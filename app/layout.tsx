import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgautocare.com"),
  title: {
    default: "SG Auto Care",
    template: "%s | SG Auto Care",
  },
  description:
    "Professional auto care, car wash, detailing, and coating services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
