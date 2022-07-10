module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    parser: "@babel/eslint-parser",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-dupe-args": "error",
    "no-duplicate-imports": "error",
    "no-dupe-keys": 0,
    "no-var": 0,
    semi: "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    "vue/no-multiple-template-root": 0,
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
};
