import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Handle Flutter routes
  if (
    pathname.startsWith("/instasnap") ||
    pathname.startsWith("/tv") ||
    pathname.startsWith("/eventhex") ||
    pathname.startsWith("/flutter") ||
    pathname.startsWith("/main.dart.js") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/canvaskit")
  ) {
    return NextResponse.next();
  }

  // Handle dashboard route
  if (pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  // All other routes go to React
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
