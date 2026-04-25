import { Resend } from 'resend';
import { z } from 'zod';

/**
 * Define the validation schema using Zod
 * Using object signature for .email() to avoid deprecation
 */
const ContactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Imię jest za krótkie' }).max(100),
  email: z.string().trim().email({ message: 'Niepoprawny format e-maila' }),
  message: z.string().trim().min(5, { message: 'Wiadomość musi mieć min. 5 znaków' }).max(5000),
});

/**
 * HTML escaper with strict TypeScript typing
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, (m) => {
    return map[m] || m;
  });
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  
  // 1. Rate Limiting (Using Nitro's built-in storage)
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown';
  const storage = useStorage('cache');
  const rateLimitKey = `rate-limit:contact:${ip}`;
  
  const lastRequest = await storage.getItem(rateLimitKey) as number | null;
  const now = Date.now();
  const limitTime = 60 * 1000; // 60 seconds

  if (lastRequest && now - lastRequest < limitTime) {
    const remainingSeconds = Math.ceil((limitTime - (now - lastRequest)) / 1000);
    throw createError({
      statusCode: 429,
      statusMessage: `Zbyt wiele prób. Spróbuj ponownie za ${remainingSeconds}s.`,
    });
  }

  // 2. Read and validate body using Zod
  const body = await readBody(event);
  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    // Safely access the first issue message
    const firstIssue = result.error.issues[0];
    throw createError({
      statusCode: 400,
      statusMessage: firstIssue ? firstIssue.message : 'Niepoprawne dane.',
    });
  }

  const { name, email, message } = result.data;

  // 3. Security: Sanitize inputs for HTML email body
  const safeName = escapeHtml(name);
  const safeEmail = email; 
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  // 4. Check API Key
  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Błąd konfiguracji serwera.',
    });
  }

  const resend = new Resend(config.resendApiKey);

  try {
    await resend.emails.send({
      from: 'Scopedrone <onboarding@dev-mb.pl>',
      to: ['scopedrone.kb@gmail.com'],
      subject: `[Scopedrone] Nowa wiadomość od ${safeName}`,
      replyTo: safeEmail,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px; color: #333;">
          <h2 style="color: #00E275;">Nowe zapytanie z formularza</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Imię i Nazwisko:</strong> ${safeName}</p>
          <p><strong>Adres E-mail:</strong> ${safeEmail}</p>
          <p><strong>Wiadomość:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #eee; line-height: 1.6;">
            ${safeMessage}
          </div>
          <footer style="margin-top: 30px; font-size: 11px; color: #999; text-align: center;">
            Wiadomość wysłana z formularza kontaktowego na stronie Scopedrone.
          </footer>
        </div>
      `,
    });

    // 5. Update rate limit timestamp
    await storage.setItem(rateLimitKey, now, { ttl: 60 });

    return { success: true };
  } catch (error: any) {
    console.error('Resend Error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Nie udało się wysłać wiadomości.',
    });
  }
});
