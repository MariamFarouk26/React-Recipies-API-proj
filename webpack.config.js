module.exports = {
    // Other webpack configuration options...
  
    module: {
      rules: [
        {
          test: /\.module\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
            },
          ],
        },
        // Add other rules for regular CSS files if needed
      ],
    },
};
  