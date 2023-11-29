const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Adiciona um alias para '@' apontando para a pasta 'src'
    config.resolve.alias["@"] = path.join(__dirname, "src");

    return config;
  },
};

module.exports = nextConfig;
