module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended', // ESLintのJavaScriptルールセットを適用
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/eslint-recommended', // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化
    // 'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型チェックが必要なルールを適用
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:tailwindcss/recommended',
  ],
  // pluginSearchDirs: false,
  plugins: ['prettier', 'tailwindcss'],
  // add your custom rules here
  rules: {
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        whitelist: ['ggmap', 'photo-by'],
      },
    ],
  },
  ignorePatterns: [
    'node-jiti/**/*.js',
    'node_modules/**/*.js',
    '.nuxt/**/*',
    '.output/**/*',
    'dist/**/*',
  ],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-empty-function': 'off', // 追加
        '@typescript-eslint/no-empty-function': 'error', // 追加
      },
    },
  ],
};
