"use client";
import { useState, useEffect } from "react";
import {
  Camera,
  Clock,
  Calendar,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";

const FloatingElements = () => (
  <div className="fixed inset-0 -z-10">
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0C1222,#000000)]" />

    {/* Animated grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,black_70%,transparent_100%)]" />

    {/* Ambient light effects */}
    <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[128px]" />
    <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[128px]" />
  </div>
);

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const platforms = [
    {
      id: "instasnap",
      name: "InstaSnap",
      title: "Event Photography",
      description: "AI-enhanced photo sharing platform",
      icon: <Camera className="w-6 h-6" />,
      color: "blue",
      features: ["Instant Sharing", "Auto Enhancement", "Smart Albums"],
    },
    {
      id: "eventhex",
      name: "EventHex",
      title: "Smart Event Management",
      description: "Complete platform for seamless event organization",
      icon: <Calendar className="w-6 h-6" />,
      color: "emerald",
      features: [
        "AI-Powered Networking",
        "Real-time Analytics",
        "Event Planning",
      ],
    },
    {
      id: "Tv App",
      name: "Tv App",
      title: "Intelligent Session Manager",
      description: "Track and manage live sessions effortlessly",
      icon: <Clock className="w-6 h-6" />,
      color: "violet",
      features: [
        "Live Session Tracking",
        "Smart Notifications",
        "Multi-stage View",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <FloatingElements />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-emerald-500" />
              <span className="text-lg font-medium">EventHex</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`text-sm transition-colors ${
                    selectedPlatform === platform.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {platform.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              EventHex: Where Events
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
                {" "}
                Come Alive
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our suite of tools designed to enhance your event
              experience
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="group relative"
                onMouseEnter={() => setSelectedPlatform(platform.id)}
                onMouseLeave={() => setSelectedPlatform(null)}
              >
                {/* Glass Card */}
                <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-${platform.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2 rounded-xl bg-${platform.color}-500/10`}
                      >
                        {platform.icon}
                      </div>
                      <Sparkles
                        className={`w-5 h-5 text-${platform.color}-500 opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {platform.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {platform.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <div
                            className={`w-1 h-1 rounded-full bg-${platform.color}-500`}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action */}
                    <a
                      href={`/${platform.id}`}
                      className={`inline-flex items-center gap-2 text-${platform.color}-500 group-hover:gap-3 transition-all`}
                    >
                      Explore {platform.name}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
