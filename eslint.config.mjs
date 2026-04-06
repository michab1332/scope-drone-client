import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/javascript', {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always']
    }
  })
  .override('nuxt/vue/rules', {
    rules: {
      // Wymuszaj PascalCase dla komponentów w templatkach
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      // Wymuszaj script setup i TS
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      // Kolejność makr (props, emits na górze)
      'vue/define-macros-order': ['error', {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots']
      }],
      // Zakaz v-html (bezpieczeństwo)
      'vue/no-v-html': 'error',
      // Wymagaj wartości domyślnych dla propsów (oprócz wymaganych)
      'vue/require-default-prop': 'error',
      // Wymuszaj spójne odstępy w templatkach
      'vue/html-indent': ['error', 2],
      // Multi-word component names (dobre dla reużywalnych komponentów)
      'vue/multi-word-component-names': ['warn', {
        ignores: ['index', 'default', 'error'] // Ignoruj standardowe nazwy Nuxta
      }]
    }
  })
