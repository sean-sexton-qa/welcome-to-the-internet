import { defineConfig } from 'eslint/config'
import playwright from 'eslint-plugin-playwright'

export default defineConfig([
  {
    files: ['tests/**/*.ts'],
    extends: [playwright.configs['flat/recommended']],
    rules: {
      // Customize Playwright rules
      // ...
    },
  },
])