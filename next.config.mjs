/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preodemo.gumlet.io',
        port: '',
        pathname: '/usr/venue/**',
      },
    ],
  },

};

export default nextConfig;
