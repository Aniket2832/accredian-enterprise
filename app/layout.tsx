import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description:
    "Partner with Accredian to deliver IIT & IIM-backed programs to your workforce. Trusted by 500+ leading companies across India.",
  keywords: "corporate training, enterprise learning, upskilling, IIT programs, IIM programs, L&D",
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
