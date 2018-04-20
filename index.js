module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
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
