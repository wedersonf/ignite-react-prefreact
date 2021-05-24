const withBundleAnalyser = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'true',
})

module.exports = withBundleAnalyser({})