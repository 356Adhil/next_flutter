// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Core Flutter files and assets
  const flutterFiles = [
    '/index.html',
    '/main.dart.js',
    '/flutter.js',
    '/flutter.js.map',
    '/flutter_bootstrap.js',
    '/flutter_service_worker.js',
    '/manifest.json',
    '/assets',
    '/icons',
    '/canvaskit'
  ];

  // Check if the request is for a Flutter file
  for (const file of flutterFiles) {
    if (request.nextUrl.pathname.startsWith(file)) {
      return NextResponse.next();
    }
  }

  // Check if the path is for InstaSnap
  if (request.nextUrl.pathname.startsWith('/instasnap')) {
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/index.html',
    '/main.dart.js',
    '/flutter.js',
    '/flutter.js.map',
    '/flutter_bootstrap.js',
    '/flutter_service_worker.js',
    '/manifest.json',
    '/assets/:path*',
    '/icons/:path*',
    '/canvaskit/:path*',
    '/instasnap/:path*'
  ],
};