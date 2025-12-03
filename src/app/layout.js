import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "A&Y Cabinets LTD - Premium Kitchen Cabinets Since 2010",
  description: "Crafting high-quality, Canadian-inspired kitchen cabinetry with natural woods and modern finishes. Expert designers dedicated to sustainable, personalized solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
