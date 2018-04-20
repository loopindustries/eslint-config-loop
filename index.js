module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    semi: [2, "never"],
    "no-unused-expressions": "off"
  },
  env: {
    jest: true,
    browser: true
  }
};
