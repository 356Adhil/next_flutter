// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Handle direct index.html requests
      {
        source: "/index.html",
        destination: "/flutter-builds/instasnap/index.html",
      },
      
      // Main Flutter app route
      {
        source: "/instasnap",
        destination: "/flutter-builds/instasnap/index.html",
      },

      // Core Flutter files
      {
        source: "/main.dart.js",
        destination: "/flutter-builds/instasnap/main.dart.js",
      },
      {
        source: "/flutter.js",
        destination: "/flutter-builds/instasnap/flutter.js",
      },
      {
        source: "/flutter.js.map",
        destination: "/flutter-builds/instasnap/flutter.js.map",
      },
      {
        source: "/flutter_bootstrap.js",
        destination: "/flutter-builds/instasnap/flutter_bootstrap.js",
      },
      {
        source: "/flutter_service_worker.js",
        destination: "/flutter-builds/instasnap/flutter_service_worker.js",
      },

      // Manifest and assets
      {
        source: "/manifest.json",
        destination: "/flutter-builds/instasnap/manifest.json",
      },
      {
        source: "/assets/:path*",
        destination: "/flutter-builds/instasnap/assets/:path*",
      },
      {
        source: "/icons/:path*",
        destination: "/flutter-builds/instasnap/icons/:path*",
      },
      {
        source: "/canvaskit/:path*",
        destination: "/flutter-builds/instasnap/canvaskit/:path*",
      },

      // Catch all route for other InstaSnap assets
      {
        source: "/instasnap/:path*",
        destination: "/flutter-builds/instasnap/:path*",
      }
    ];
  },
};

export default nextConfig;