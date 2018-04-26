module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "arrow-parens": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-autofocus": 0,
    "no-bitwise": 0,
    "no-mixed-operators": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-indent": 0,
    "react/prop-types": 0,
    semi: [2, "never"]
  },
  env: {
    browser: true,
    jest: true
  }
};
