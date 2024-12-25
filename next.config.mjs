/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.jp", "hml-blog-coliseu.seodev.ambienteseo.com.br"],
  },
  async headers() {
    return [
      {
        // Define os headers para todas as rotas
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self'; 
              script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
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
              .trim(), // Remove espaços extras
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Permissions-Policy",
            value:
              "geolocation=(), microphone=(), camera=(), fullscreen=(self), payment=()",
          },
          {
            key: "Expect-CT",
            value: "max-age=86400, enforce",
          },
          {
            key: "Cache-Control",
            value:
              "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
