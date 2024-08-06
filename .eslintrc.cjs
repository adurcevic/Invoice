/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vuejs-accessibility/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ]
  }
}
