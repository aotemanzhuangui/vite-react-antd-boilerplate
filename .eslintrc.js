module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint-config-tencent',
    'eslint-config-tencent/ts',
    "airbnb-base",
    "airbnb/rules/react"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 2 }],
    "max-len": ["error", { code: 120 }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-props-no-spreading": [
      1,
      {
        html: "enforce",
        custom: "ignore",
      },
    ]
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["assets", "./src/assets"],
          ["configs", "./src/configs"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
};
