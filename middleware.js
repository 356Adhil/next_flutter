import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // List of Flutter paths and their base routes
  const flutterPaths = ["/instasnap", "/tv", "/eventhex"];
  const flutterResources = [
    "/flutter",
    "/main.dart.js",
    "/assets",
    "/canvaskit",
    "/icons",
  ];

  // Check if it's a Flutter path or resource
  if (
    flutterPaths.some((path) => pathname.startsWith(path)) ||
    flutterResources.some((resource) => pathname.startsWith(resource))
  ) {
    return NextResponse.next();
  }

  // If it's the dashboard path
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  // For root level invalid paths (not starting with any valid prefix)
  if (
    pathname !== "/" &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/static") &&
    !pathname.startsWith("/manifest") &&
    !pathname.startsWith("/favicon") &&
    !pathname.startsWith("/asset-manifest")
  ) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip internal Next.js paths
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
