module.exports = {
  root: true,
  plugins: ["react", "react-native"],
  extends: ["@react-native-community", "plugin:react-native/all"],
  rules: {
    semi: ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
};
