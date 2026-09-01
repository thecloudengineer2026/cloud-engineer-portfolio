import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ismail Abdur-Rahman | Cloud Engineer",
    template: "%s | Ismail Abdur-Rahman",
  },
  description:
    "Cloud engineering portfolio featuring secure, tested, cost-conscious AWS solutions built around real business problems.",
  keywords: [
    "AWS",
    "Cloud Engineer",
    "Solutions Architect",
    "Infrastructure as Code",
    "AWS CDK",
    "TypeScript",
    "Business Analysis",
  ],
  authors: [{ name: "Ismail Abdur-Rahman" }],
  creator: "Ismail Abdur-Rahman",
  openGraph: {
    type: "website",
    title: "Ismail Abdur-Rahman | Cloud Engineer",
    description:
      "Secure, tested, and cost-conscious AWS solutions built around real business problems.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}