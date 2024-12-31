import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const flutterPaths = ["/instasnap", "/tv", "/eventhex"];
  const flutterResources = [
    "/flutter",
    "/main.dart.js",
    "/assets",
    "/canvaskit",
    "/icons",
  ];

  if (
    flutterPaths.some((path) => pathname.startsWith(path)) ||
    flutterResources.some((resource) => pathname.startsWith(resource))
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  if (
    pathname !== "/" &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api")
  ) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
