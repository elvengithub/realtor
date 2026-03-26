import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/style.css";
import { ThemeProvider } from "../src/context/ThemeContext";
import { AccessibilityProvider } from "../src/context/AccessibilityContext";
import { AuthProvider } from "../src/context/AuthContext";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import AccessibilityWidget from "../src/components/AccessibilityWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony Gerard Orais Leuterio | Global Real Estate Coaching Platform",
  description: "High-performance real estate coaching and training platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider>
            <AccessibilityProvider>
              <div className="layout">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <AccessibilityWidget />
              </div>
            </AccessibilityProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
