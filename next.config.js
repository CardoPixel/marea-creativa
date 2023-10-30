const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: ['app-build-manifest.json'],
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Set limit to 10 MB
});

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  images: {
    deviceSizes: [
      360, 375, 390, 393, 412, 414, 810, 1280, 1366, 1440, 1536, 1600, 1920,
      2560,
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {not: /url/}, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    // Modify the file loader rule to ignore *.svg since we have it handled now
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = withPWA(nextConfig);
