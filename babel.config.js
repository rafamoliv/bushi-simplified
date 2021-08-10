module.exports = (api) => {
  api.cache(true);

  return {
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "~",
          rootPathSuffix: "src",
        },
      ],
    ],
    env: {
      production: {
        plugins: [
          "babel-plugin-root-import",
          {
            rootPathPrefix: "~",
            rootPathSuffix: "src",
          },
        ],
      },
    },
  };
};