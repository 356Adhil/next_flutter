"use client";
import { useState, useEffect } from "react";
import { Home, ArrowLeft, Globe, RefreshCw } from "lucide-react";

const FloatingElements = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0C1222,#000000)]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,black_70%,transparent_100%)]" />
    <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-red-500/20 blur-[128px]" />
    <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[128px]" />
  </div>
);

export default function Error404() {
  const [count, setCount] = useState(0);
  const [errorId, setErrorId] = useState("");

  useEffect(() => {
    // Generate error ID on client side only
    setErrorId(Math.random().toString(36).substr(2, 9));

    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <FloatingElements />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-red-500" />
            <span className="text-lg font-medium">EventHex</span>
          </div>
        </div>
      </header>

      <main className="relative min-h-screen flex items-center justify-center p-6">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Error Display */}
          <div className="relative mb-8">
            <div className="text-[150px] font-bold text-white/5 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
                404
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Please
            check the URL or navigate back to the home page.
          </p>

          {/* Loading Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-2 border-white/5 rounded-full" />
              <div
                className="absolute inset-0 border-2 border-red-500 rounded-full"
                style={{
                  clipPath: `polygon(0 0, ${count}% 0, ${count}% 100%, 0 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-red-500 animate-spin" />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all group"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </a>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all group"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Error ID - Only shown after client-side generation */}
          {errorId && (
            <div className="mt-12 text-sm text-gray-500">
              Error ID: {errorId}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
