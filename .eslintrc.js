module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for typescript
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    'jest/globals': true,
    'cypress/globals': true,
  },
  plugins: ['jest', 'testing-library', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/errors', // Uses the recommended rules from eslint-plugin-import
    'plugin:import/warnings', // Uses the recommended rules from eslint-plugin-import
    'plugin:import/typescript', // This line needed to work with typescript
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from eslint-plugin-react-hooks
    'plugin:jsx-a11y/recommended', // Uses the recommended rules from eslint-plugin-jsx-a11y
    'plugin:jest/recommended', // Uses the recommended rules from eslint-plugin-jest
    'plugin:jest/style', // Uses the recommended style rules from eslint-plugin-jest
    'plugin:testing-library/react', // Uses the recommended style rules from eslint-plugin-testing-library for React
    'plugin:cypress/recommended', // Uses the recommended style rules from eslint-plugin-cypress
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'react/jsx-uses-react': 'off', // off because New JSX Transform - https://uk.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/react-in-jsx-scope': 'off', // off because New JSX Transform
    'react/prop-types': 'off', // off because we use Typescript
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ], // configure import order, import from react always first
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'cy'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: "JSXElement > JSXExpressionContainer > LogicalExpression[operator!='??']",
        message: 'Logical AND is forbidden for conditional rendering. Use ternaries instead',
      },
    ],
  },
  overrides: [
    // disable jest rules for cypress
    {
      files: ['*.spec.ts'],
      rules: {
        'jest/valid-expect': 0,
        'jest/valid-expect-in-promise': 0,
        'jest/no-export': 0,
      },
    },
  ],
};
