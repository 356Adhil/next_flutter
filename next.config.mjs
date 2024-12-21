/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API: process.env.NEXT_PUBLIC_REACT_APP_API,
    REACT_APP_CDN: process.env.NEXT_PUBLIC_REACT_APP_CDN,
  },
  async rewrites() {
    return [
      // Flutter App Routes
      {
        source: "/instasnap",
        destination: "/flutter-builds/instasnap/index.html",
      },
      {
        source: "/instasnap/:path*",
        destination: "/flutter-builds/instasnap/:path*",
      },
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

      // React App Routes
      {
        source: "/",
        destination: "/react-builds/app/index.html",
      },
      {
        source: "/static/js/:path*",
        destination: "/react-builds/app/static/js/:path*",
      },
      {
        source: "/static/css/:path*",
        destination: "/react-builds/app/static/css/:path*",
      },
      {
        source: "/static/media/:path*",
        destination: "/react-builds/app/static/media/:path*",
      },
      {
        source: "/manifest.json",
        destination: "/react-builds/app/manifest.json",
      },
      {
        source: "/manifest.webmanifest",
        destination: "/react-builds/app/manifest.webmanifest",
      },
      {
        source: "/asset-manifest.json",
        destination: "/react-builds/app/asset-manifest.json",
      },
      {
        source: "/robots.txt",
        destination: "/react-builds/app/robots.txt",
      },
      {
        source:
          "/:path((?!instasnap|flutter|main\\.dart\\.js|assets|canvaskit|icons).*)",
        destination: "/react-builds/app/index.html",
      },
    ];
  },
};

export default nextConfig;
