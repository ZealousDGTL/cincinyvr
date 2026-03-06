import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CinCin YVR Co-Host | Premium Airbnb Management Vancouver",
  description: "Hands-off Airbnb co-hosting in Vancouver. Designer background, bilingual expertise, and maximum bookings for your property.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Serif+Display&family=Space+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
