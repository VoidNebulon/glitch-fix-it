// import type {NextConfig} from 'next';

// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     domains: ["picsum.photos"], // whitelist external domains
//   },
// };

// // next.config.js
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/admin",
//         destination: "/admin/index.html",
//         permanent: false, // 👈 must be true or false
//       },
//     ]
//   },
// }


// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // whitelist external domains
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;