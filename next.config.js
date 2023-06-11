/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      'k.kakaocdn.net',
    ],
  },
}

module.exports = nextConfig
