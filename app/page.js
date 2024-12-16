"use client";
import { Camera, Clock, Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  const apps = {
    eventhex: {
      title: "EventHex",
      description: "Complete event experience platform",
      icon: <Calendar className="w-6 h-6" />,
      image: "main.png",
      features: [
        "Connect with other attendees",
        "Session scheduling & bookings",
        "Networking opportunities",
        "Event highlights & photos",
        "Interactive event map",
        "Real-time notifications",
      ],
      path: "/eventhex",
    },
    tv: {
      title: "Tv App",
      description: "Live session tracking & schedules",
      icon: <Clock className="w-6 h-6" />,
      image: "main.png",
      features: [
        "Live session tracking",
        "Multi-stage schedule view",
        "Session timings & details",
        "Stage-wise organization",
        "Upcoming session alerts",
      ],
      path: "/tv",
    },
    instasnap: {
      title: "InstaSnap",
      description: "Event photography made social",
      icon: <Camera className="w-6 h-6" />,
      image: "main.png",
      features: [
        "Instant photo sharing",
        "Event-specific galleries",
        "Social media integration",
        "Collaborative albums",
      ],
      path: "/instasnap",
    },
  };

  return (
    <div className="min-h-screen bg-[#1A1D24] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1A1D24]/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl">EventHex Platform</span>
            </div>
            <div className="flex gap-4">
              {Object.entries(apps).map(([key, app]) => (
                <a
                  key={key}
                  href={app.path}
                  className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {app.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* App Cards */}
      <div className="container mx-auto px-4 pt-32">
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(apps).map(([key, app]) => (
            <div
              key={key}
              className="relative flex flex-col bg-[#22262F] rounded-2xl shadow-xl overflow-hidden h-full"
            >
              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-emerald-500">
                    {app.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{app.title}</h2>
                    <p className="text-sm text-gray-400">{app.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="aspect-[3/2] rounded-xl overflow-hidden bg-gray-800 mb-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="text-center py-4">
                    You're just one selfie away from your event photos
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1">
                  {app.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300 mb-2"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-gray-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Launch Button - Fixed at bottom */}
              <div className="p-6 pt-0">
                <a
                  href={app.path}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Launch {app.title}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
