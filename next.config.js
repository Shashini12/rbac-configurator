// next.config.js
module.exports = {
    webpack: (config) => {
      config.externals = [...config.externals, 'lightningcss'];
      return config;
    },
    experimental: {
      optimizeCss: false, // Disable CSS optimization if using lightningcss
    }
  };