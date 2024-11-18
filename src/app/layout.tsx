import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Sheppard Portfolio",
  description: "My portfolio website",
  icons: {
    icon: "/mike.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
