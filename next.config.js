/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: [] },
  async redirects() {
    return [
      { source: "/web3",               destination: "/services#web3",               permanent: true },
      { source: "/medical-billing",    destination: "/services#medical-billing",    permanent: true },
      { source: "/virtual-assistants", destination: "/services#virtual-assistants", permanent: true },
      { source: "/dedicated-teams",    destination: "/services#dedicated-teams",    permanent: true },
      { source: "/pricing",            destination: "/services#pricing",            permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
