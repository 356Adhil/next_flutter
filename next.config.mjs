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

      // Dynamic Flutter file routing based on the app
      {
        source: "/:app(instasnap|tv|eventhex)/flutter.js",
        destination: "/flutter-builds/:app/flutter.js",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/flutter_bootstrap.js",
        destination: "/flutter-builds/:app/flutter_bootstrap.js",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/flutter_service_worker.js",
        destination: "/flutter-builds/:app/flutter_service_worker.js",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/main.dart.js",
        destination: "/flutter-builds/:app/main.dart.js",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/assets/:path*",
        destination: "/flutter-builds/:app/assets/:path*",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/canvaskit/:path*",
        destination: "/flutter-builds/:app/canvaskit/:path*",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/icons/:path*",
        destination: "/flutter-builds/:app/icons/:path*",
      },
      {
        source: "/:app(instasnap|tv|eventhex)/version.json",
        destination: "/flutter-builds/:app/version.json",
      },

      // Fallback routes for root-level Flutter files
      {
        source: "/flutter.js",
        destination: "/flutter-builds/shared/flutter.js",
      },
      {
        source: "/flutter_bootstrap.js",
        destination: "/flutter-builds/shared/flutter_bootstrap.js",
      },
      {
        source: "/flutter_service_worker.js",
        destination: "/flutter-builds/shared/flutter_service_worker.js",
      },
      {
        source: "/main.dart.js",
        destination: "/flutter-builds/shared/main.dart.js",
      },
      {
        source: "/assets/:path*",
        destination: "/flutter-builds/shared/assets/:path*",
      },
      {
        source: "/canvaskit/:path*",
        destination: "/flutter-builds/shared/canvaskit/:path*",
      },
      {
        source: "/icons/:path*",
        destination: "/flutter-builds/shared/icons/:path*",
      },
      {
        source: "/version.json",
        destination: "/flutter-builds/shared/version.json",
      },
    ];
  },
};

export default nextConfig;
