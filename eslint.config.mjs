import globals from 'globals';
import vueEslintParser from 'vue-eslint-parser';
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default withNuxt(
  eslintPluginPrettierRecommended,
  {
    plugins: { tailwindcss: tailwindcss },
    rules: {
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: ['ggmap', 'photo-by', 'js\\-.*', 'custom\\-.*'],
        },
      ],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    files: ['**/*.ts', '**/*.js', '**/*.vue'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
    },
  }
);
