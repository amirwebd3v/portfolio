import withNuxt from './.nuxt/eslint.config.js';

export default withNuxt({
  rules: {
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
});
