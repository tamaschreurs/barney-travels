exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /globe\.gl/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
