module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "^mongoose$" }],
  },
  globals: {
    mongoose: "readonly",
  },
};
