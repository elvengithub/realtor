"use client";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import AccessibilityWidget from "@/src/components/AccessibilityWidget";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <AccessibilityWidget />
    </>
  );
}
