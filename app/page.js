import { headers } from "next/headers";
import { generateEventMetadata, defaultMetadata } from "@/lib/metadata";
import SinglePageLanding from "./SinglePageLanding";

// This runs on the server
export async function generateMetadata() {
  try {
    const headersList = headers();
    const domain = headersList.get("host") || "localhost:3000";
    console.log("Domain:", domain);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/whitelisted-domains/check-domain?domain=${domain}`,
      { cache: "no-store" } // Disable caching to ensure fresh data
    );

    if (!response.ok) {
      throw new Error("Failed to fetch event data");
    }

    const data = await response.json();
    console.log("Event data:", data);
    const event = data.response.event;

    return generateEventMetadata(event);
  } catch (error) {
    console.error("Error generating metadata:", error);
    return defaultMetadata;
  }
}

// Server Component
export default function Page() {
  return <SinglePageLanding />;
}
