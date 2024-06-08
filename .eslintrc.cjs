module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'import-newlines',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    indent: ['error', 2, { 'ignoredNodes': ['PropertyDefinition'] }],
    quotes: ['error', 'single'],
    'no-mixed-spaces-and-tabs': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 4, consistent: true },
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'consistent-return': 'off',
    'no-useless-return': 'off',

    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'unknown', ['parent', 'sibling', 'index'], 'type', 'object'],
      pathGroupsExcludedImportTypes: [],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],

    'import-newlines/enforce': ['error', 4, 120],

    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-static-only-class': 'off',

    '@typescript-eslint/indent': ['error', 2, { 'ignoredNodes': ['PropertyDefinition'] }],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/quotes': ['error', 'single', {
      avoidEscape: false,
      allowTemplateLiterals: true,
    }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
      exceptAfterOverload: true,
    }],
    '@typescript-eslint/no-use-before-define': ['off'],
  },
  overrides: [{
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  }, {
    files: ['**/types/**/*.ts'],
    rules: {
      '@typescript-eslint/no-namespace': 'off',
    },
  }],
};
