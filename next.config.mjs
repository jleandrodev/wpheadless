/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self'; 
              script-src 'self' 'nonce-{generated_nonce}'; 
              style-src 'self' 'unsafe-inline'; 
              img-src 'self' data: https:; 
              connect-src 'self'; 
              font-src 'self' https: data:; 
              object-src 'none'; 
              frame-ancestors 'none'; 
              base-uri 'self'; 
              form-action 'self'; 
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
