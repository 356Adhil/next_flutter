/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API: process.env.NEXT_PUBLIC_REACT_APP_API,
    REACT_APP_CDN: process.env.NEXT_PUBLIC_REACT_APP_CDN,
  },
  images: {
    domains: ["event-manager.syd1.cdn.digitaloceanspaces.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "event-manager.syd1.cdn.digitaloceanspaces.com",
      },
    ],
  },
  async rewrites() {
    return [
      // Flutter Apps Routes
      // InstaSnap
      {
        source: "/instasnap",
        destination: "/flutter-builds/instasnap/index.html",
      },
      {
        source: "/instasnap/:path*",
        destination: "/flutter-builds/instasnap/:path*",
      },
      // TV App
      {
        source: "/tv",
        destination: "/flutter-builds/tv/index.html",
      },
      {
        source: "/tv/:path*",
        destination: "/flutter-builds/tv/:path*",
      },
      // EventHex
      {
        source: "/eventhex",
        destination: "/flutter-builds/eventhex/index.html",
      },
      {
        source: "/eventhex/:path*",
        destination: "/flutter-builds/eventhex/:path*",
      },

      // Shared Flutter files (will be served from any of the Flutter builds)
      {
        source: "/flutter.js",
        destination: "/flutter-builds/instasnap/flutter.js",
      },
      {
        source: "/flutter_bootstrap.js",
        destination: "/flutter-builds/instasnap/flutter_bootstrap.js",
      },
      {
        source: "/flutter_service_worker.js",
        destination: "/flutter-builds/instasnap/flutter_service_worker.js",
      },
      {
        source: "/main.dart.js",
        destination: "/flutter-builds/instasnap/main.dart.js",
      },
      {
        source: "/assets/:path*",
        destination: "/flutter-builds/instasnap/assets/:path*",
      },
      {
        source: "/canvaskit/:path*",
        destination: "/flutter-builds/instasnap/canvaskit/:path*",
      },
      {
        source: "/icons/:path*",
        destination: "/flutter-builds/instasnap/icons/:path*",
      },
      {
        source: "/version.json",
        destination: "/flutter-builds/instasnap/version.json",
      },
    ];
  },
};

export default nextConfig;
