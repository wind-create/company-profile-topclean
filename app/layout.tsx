import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topclean.id/"),
  title: {
    default: "TOPCLEAN",
    template: "%s | TOPCLEAN",
  },
  description:
    "Professional car wash, and Polish services.",
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
