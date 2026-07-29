import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@fontsource/open-runde/400.css";
import "@fontsource/open-runde/500.css";
import "@fontsource/open-runde/600.css";
import "@fontsource/open-runde/700.css";
import "./globals.css";

import { Providers } from "@/components/providers";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Expert Listing | Dashboard";
const description =
  "Expert Listing admin dashboard — track sales, listings, and user activity at a glance.";

export const metadata: Metadata = {
  metadataBase: new URL("https://expert-listing-test-app.vercel.app"),
  title: {
    default: title,
    template: "%s | Expert Listing",
  },
  description,
  keywords: [
    "Expert Listing",
    "admin dashboard",
    "sales overview",
    "listings management",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Expert Listing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-muted/30">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
