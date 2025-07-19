import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Faiz Ahmed | Web Developer",
  description: "Personal portfolio showcasing web development skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
