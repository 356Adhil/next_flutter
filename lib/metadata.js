// lib/metadata.js
import { headers } from "next/headers";

// Base metadata configuration
export const siteConfig = {
  name: "EventHex",
  description:
    "EventHex is a complete platform for seamless event organization",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eventhex.ai",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/eventhex",
    facebook: "https://facebook.com/eventhex",
    linkedin: "https://linkedin.com/company/eventhex",
    instagram: "https://instagram.com/eventhex",
  },
};

// Generate keywords for an event
const generateEventKeywords = (event) => {
  const baseKeywords = [
    "event",
    "conference",
    "registration",
    "tickets",
    "eventhex",
    "events platform",
  ];

  const eventSpecificKeywords = [
    event.title,
    event.venue,
    event.city,
    event.type,
    ...(event.tags || []),
  ].filter(Boolean);

  return [...new Set([...baseKeywords, ...eventSpecificKeywords])].join(", ");
};

// Generate social image URL
const generateSocialImage = (event) => {
  if (!event?.banner) return siteConfig.ogImage;
  return `${process.env.NEXT_PUBLIC_REACT_APP_CDN}${event.banner}`;
};

// Generate event metadata
export async function generateEventMetadata(event) {
  if (!event) return defaultMetadata;

  const headersList = headers();
  const domain = headersList.get("host") || "";
  const eventUrl = `https://${domain}`;
  console.log("Domain:", domain);

  const title = event.title;
  const description =
    event.description?.substring(0, 160) || siteConfig.description;
  const keywords = generateEventKeywords(event);
  const image = generateSocialImage(event);

  const dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const eventDate = event.startDate
    ? dateFormat.format(new Date(event.startDate))
    : "";

  return {
    metadataBase: new URL(eventUrl),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords,
    authors: [{ name: event.organizer || siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: eventUrl,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@eventhex",
      creator: "@eventhex",
      images: [image],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
    alternates: {
      canonical: eventUrl,
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black",
      "format-detection": "telephone=no",
      "msapplication-TileColor": "#ffffff",
      "msapplication-config": "/browserconfig.xml",
      "theme-color": "#ffffff",
    },
    applicationName: siteConfig.name,
    referrer: "origin-when-cross-origin",
    keywords: keywords,
    category: "events",
    classification: "events, conferences, meetups",
  };
}

// Default metadata for the root layout
export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@eventhex",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};
