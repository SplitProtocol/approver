const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "airbnb",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", path.resolve(__dirname, "src")]],
        extensions: [".ts", ".js", ".jsx", ".json", ".tsx"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/require-default-props": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/function-component-definition": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/jsx-props-no-spreading": 0,
    camelcase: 1,
    "import/no-extraneous-dependencies": 0,
    "react/no-unstable-nested-components": 0,
    "no-undef": "off",
  },
};
