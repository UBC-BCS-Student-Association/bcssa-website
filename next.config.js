/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bcssa-website.appspot.com', 'firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
