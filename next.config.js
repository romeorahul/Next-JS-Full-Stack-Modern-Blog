// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


const path = require("path");

module.exports = {
  // Other configurations...
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};
