exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /three-conic-polygon-geometry/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
