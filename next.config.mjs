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

  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/menu',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
