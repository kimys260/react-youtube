const postcssNormalize = require("postcss-normalize");

module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      features: {
        "nesting-rules": true,
      },
      stage: 0,
    }),
    postcssNormalize(),
  ],
};
