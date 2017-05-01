module.exports = {
  type: 'preact-app',
  webpack: {
    rules: {
      'sass-css': {
        modules: true,
        localIdentName:  '[hash:base64:5]'
      }
    },
    extra: {
      devtool: 'inline-source-map'
    }
  }
}
