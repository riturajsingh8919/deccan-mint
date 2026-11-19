import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deccanmint.com"),
  title: "Deccan Mint | Gold & Silver Coins by Sai Surya Gold",
  description: "Discover Deccan Mint by Sai Surya Gold. Explore gold and silver coins for personal ownership, meaningful gifting, and special occasions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Deccan Mint | Gold & Silver Coins",
    description: "Gold and silver coins for moments that matter. A brand by Sai Surya Gold, inspired by the heritage of the Deccan.",
    url: "https://deccanmint.com/",
    siteName: "Deccan Mint",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/deccan-coin-campaign.webp", width: 1448, height: 1086, alt: "An illustrative gold and silver coin study on pale stone" }],
  },
  twitter: { card: "summary_large_image", title: "Deccan Mint | Gold & Silver Coins", images: ["/images/deccan-coin-campaign.webp"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Shared App Router layout loads these Google Fonts for every route. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Poppins:wght@400;500;600&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
