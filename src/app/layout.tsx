import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deccanmint.com"),
  title: "Deccan Mint | Gold & Silver Coins by Sai Surya Gold",
  description: "Discover Deccan Mint by Sai Surya Gold. Explore gold and silver coins for personal ownership, meaningful gifting, and special occasions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Deccan Mint | Precious Metals. Personal Meaning.",
    description: "Gold and silver coins for moments that matter. A brand by Sai Surya Gold, inspired by the heritage of the Deccan.",
    url: "https://deccanmint.com/",
    siteName: "Deccan Mint",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/bullion-coins.jpg", width: 1800, height: 1200, alt: "Gold and silver bullion coins" }],
  },
  twitter: { card: "summary_large_image", title: "Deccan Mint | Gold & Silver Coins", images: ["/images/bullion-coins.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Shared App Router layout loads these Google Fonts for every route. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
