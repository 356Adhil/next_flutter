"use client";
import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import {
  Calendar,
  MapPin,
  Info,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Loader,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

const SinglePageLanding = ({ setMessage }) => {
  const router = useRouter();
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useRef(null);
  const [domainUrl, setDomainUrl] = useState("phygital-world.eventhex.ai");

  useEffect(() => {
    setDomainUrl("phygital-world.eventhex.ai");
    // setDomainUrl(window.location.hostname);
  }, []);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/whitelisted-domains/check-domain?domain=${domainUrl}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event data");
        }

        const data = await response.json();
        setEventData(data);
        theme.current = data.response.event.themeColor;
        // Handle routing based on API response
        if (data.response.route) {
          const route = data.response.event.defaultRoute;

          switch (route) {
            case "default":
              // Stay on the landing page ('/')
              break;
            case "instasnap":
              router.push("/instasnap");
              return;
            case "eventhex":
              router.push("/eventhex");
              return;
            default:
              // For any unexpected route value, stay on landing page
              console.warn("Unexpected route value:", route);
              break;
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, [domainUrl, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!eventData || !eventData.response || !eventData.response.event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No event data available
      </div>
    );
  }

  const { event } = eventData.response;
  const tickets = eventData.configs || [];
  const start = moment(event.startDate);
  const end = moment(event.endDate);
  const isSameDay = start.isSame(end, "day");

  const logoSrc = `${process.env.NEXT_PUBLIC_REACT_APP_CDN}${event.logo}`;
  const primaryColor = event.themeColor;

  const ExpoCard = (item, index, customClass = "") => {
    const endDate = moment(item.saleEndDate);

    return (
      <div
        key={index}
        className={`relative w-full max-w-[350px] mx-auto mb-8 text-center rounded-lg bg-[#f7fbff] p-6 shadow-lg ${customClass}`}
      >
        {/* Banner Section */}
        <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-6">
          <Image
            src={
              process.env.NEXT_PUBLIC_REACT_APP_CDN +
              (item.thumbnail || event.banner)
            }
            alt={item.title}
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Main Content Wrapper - Added flex and flex-col */}
        <div className="flex flex-col h-[calc(100%-180px)]">
          {/* Title Section */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h4>

          {/* Pricing Section */}
          <div className="my-4">
            <div className="text-xl font-semibold text-gray-900">
              {item.discountValue > 0 ? (
                <span className="line-through text-gray-400 mr-2">
                  ₹{item.paymentAmount}
                </span>
              ) : null}

              {(item.discountValue > 0 || item.paymentAmount > 0) && (
                <span className="font-bold text-lg">
                  ₹
                  {item.discountValue > 0
                    ? item.discountValue
                    : item.paymentAmount}
                </span>
              )}
            </div>

            {/* Add min-height to ensure consistent spacing */}
            <div className="min-h-[28px] flex flex-col justify-between">
              {item.enableDiscount && (
                <p className="text-sm text-green-600 mt-2">
                  {item.discountTag} applied!
                </p>
              )}
            </div>
          </div>

          {/* Sale End Date */}
          <p className="w-full py-2 text-sm text-gray-600 border-t border-b border-gray-200 my-4">
            Sales ends on {endDate.format("Do MMMM YYYY")}
          </p>

          {/* Register Button - Added mt-auto to push it to bottom */}
          <div className="mt-auto mb-auto">
            <button
              className="w-full px-4 py-2 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition duration-300"
              style={{
                backgroundColor: primaryColor || "#e63946",
              }}
            >
              <span className="font-light">Register</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto md:px-0">
        <header className={styles.header}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <Image
              src={logoSrc}
              alt="Event Logo"
              width={2000}
              height={2000}
              className="object-contain"
              priority
            />
          </div>

          {/* Register Button */}
          <button
            className={styles.button}
            style={{
              backgroundColor: primaryColor,
            }}
          >
            Register
          </button>
        </header>

        <div className="mx-4 md:mx-8 my-4 rounded-xl overflow-hidden relative min-h-fit max-h-[200px] bg-gradient-to-r from-[#e5f7ff] to-[#f0fbff]">
          <Image
            src={`${process.env.NEXT_PUBLIC_REACT_APP_CDN}${event.banner}`}
            alt="Event Banner"
            layout="responsive"
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row p-8 gap-5">
          <div className="flex-1 min-w-[60%]">
            <div className="mb-8">
              <h2 className="text-[22px] text-[#1f2937] mb-6">
                <strong>{event.title}</strong>
              </h2>

              <div className="flex flex-col md:flex-row gap-8 my-8">
                {isSameDay ? (
                  <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                    <Calendar
                      className="w-[30px] h-[30px]"
                      style={{ color: eventData.response.event.themeColor }}
                    />
                    <div>
                      <p className="font-semibold text-[#1f2937]">
                        {start.format("dddd, Do MMMM YYYY")}
                      </p>
                      <p className="text-[#6b7280] text-sm">
                        {start.format("h:mm A - ") + end.format("h:mm A")}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                      <Calendar
                        className="w-[30px] h-[30px]"
                        style={{ color: eventData.response.event.themeColor }}
                      />
                      <div>
                        <p className="font-semibold text-[#1f2937]">
                          {start.format("dddd, Do MMMM YYYY")}
                        </p>
                        <p className="text-[#6b7280] text-sm">
                          Starts at {start.format("h:mm A")}
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                      <Calendar
                        className="w-[30px] h-[30px]"
                        style={{ color: eventData.response.event.themeColor }}
                      />
                      <div>
                        <p className="font-semibold text-[#1f2937]">
                          {end.format("dddd, Do MMMM YYYY")}
                        </p>
                        <p className="text-[#6b7280] text-sm">
                          Ends at {end.format("h:mm A")}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                <MapPin
                  className="w-[30px] h-[30px]"
                  style={{ color: eventData.response.event.themeColor }}
                />
                <div>
                  <h4 className="font-medium text-[#1f2937] mb-2">
                    {event.venue}
                  </h4>
                  <p className="text-[#6b7280]">{event.venue}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[22px] text-[#1f2937] mb-4">About Event</h2>
              <div
                className="text-[#4b5563] leading-[1.6] text-lg"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>
          </div>

          {tickets.length === 1 && (
            <div className="min-w-[350px] lg:sticky lg:top-[10px] min-h-[200px]">
              {ExpoCard(tickets[0], 0, "single")}
            </div>
          )}
        </div>

        <div className="p-8">
          <h2 className="text-[22px] text-[#1f2937] mb-4">
            <strong>Tickets</strong>
          </h2>
          <div className="flex flex-wrap gap-[30px] items-stretch justify-start w-full">
            {tickets.map((item, index) => ExpoCard(item, index))}
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-[22px] text-[#1f2937] mb-4">Location</h2>
          <div className="rounded-lg overflow-hidden h-[300px] bg-[#f1f1f1]">
            <iframe
              title={event.title}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.271724288086!2d76.37364157451023!3d10.158554170287491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08061b468975ab%3A0xdeeba8a7f2436d7d!2sCIAL%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1728543012977!5m2!1sen!2sin`}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <footer className="bg-[#1f2937] text-white py-8 mt-8 md:py-10">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Section */}
          <div className="text-[#d1d5db] text-sm md:text-base text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {event.title} All Rights Reserved |
              Developed by Eventhex
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex gap-6 justify-center md:justify-start">
            <Facebook className="w-6 h-6 cursor-pointer text-[#d1d5db] hover:text-white transition-colors" />
            <Linkedin className="w-6 h-6 cursor-pointer text-[#d1d5db] hover:text-white transition-colors" />
            <Instagram className="w-6 h-6 cursor-pointer text-[#d1d5db] hover:text-white transition-colors" />
            <Twitter className="w-6 h-6 cursor-pointer text-[#d1d5db] hover:text-white transition-colors" />
          </div>
        </div>
      </footer>

      <div className="hidden lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-[1000] md:block">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-base font-medium">
                {tickets ? tickets.length : 0} Tickets
              </p>
            </div>
            <button
              className="px-6 py-3 text-white rounded-lg font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: eventData.response.event.themeColor }}
            >
              View Tickets
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePageLanding;
