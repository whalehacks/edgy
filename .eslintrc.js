module.exports = {
  root: true,
  extends: "airbnb-base",
  env: {
    browser: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "import/extensions": ["error", { js: "always" }], // require js file extensions in imports
    "linebreak-style": ["error", "unix"], // enforce unix linebreaks
    "no-param-reassign": [2, { props: false }], // allow modifying properties of param
    "xwalk/max-cells": [
      "error",
      {
        "*": 4, // default limit for all models
        form: 15,
        wizard: 12,
        "form-button": 7,
        "checkbox-group": 20,
        checkbox: 19,
        "date-input": 21,
        "drop-down": 19,
        email: 22,
        "file-input": 20,
        "form-fragment": 15,
        "form-image": 7,
        "multiline-input": 23,
        "number-input": 22,
        panel: 17,
        "radio-group": 20,
        "form-reset-button": 7,
        "form-submit-button": 7,
        "telephone-input": 20,
        "text-input": 23,
        accordion: 14,
        modal: 11,
        rating: 18,
        password: 20,
        tnc: 12,
      },
    ],
    "xwalk/no-orphan-collapsible-fields": "off", // Disable until enhancement is done for Forms properties
  },
};
