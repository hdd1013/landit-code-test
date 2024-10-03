const jsRules = {
  'no-unused-vars': [
    'warn',
    {
      varsIgnorePattern: '^_',
    },
  ],
  'eol-last': [
    'warn', 'always',
  ],
};

const tsRules = {
  '@typescript-eslint/no-unused-vars': [
    'off',
    {
      varsIgnorePattern: '^_',
    },
  ],
};

/** @type {import('@stylistic/eslint-plugin').RuleOptions} */
const stylisticRules = {
  '@stylistic/no-trailing-spaces': ['error', {}],
  '@stylistic/indent': ['error', 2],
  '@stylistic/space-before-function-paren': ['error', 'always'],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': [
    'error', { before: false, after: true },
  ],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': ['error', { before: false, after: true }],
  '@stylistic/max-len': ['error', {
    code: 120,
    tabWidth: 2,
    ignoreStrings: true,
    ignoreUrls: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true,
  }],
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/quote-props': ['error', 'consistent-as-needed'],
  '@stylistic/type-annotation-spacing': [
    'error', {
      before: false,
      after: false,
    },
  ],
  '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
  '@stylistic/keyword-spacing': [
    'error', { before: true, after: true },
  ],
  '@stylistic/space-before-blocks': ['error', 'always'],
};

export {
  jsRules, tsRules, stylisticRules,
};
