// import type {NextConfig} from 'next';
// import next from 'next';
// /** @type {import('next').NextConfig} */



// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "picsum.photos" },
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "res.cloudinary.com" },
//     ],
//   },
// };

// export default nextConfig;
// module.exports = nextConfig
//---------------------------------
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "picsum.photos" },
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "res.cloudinary.com" },
//     ],
//   },
//   async redirects() {
//     return [
//       {
//         source: "/admin",
//         destination: "/admin/index.html",
//       },
//     ];
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
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
