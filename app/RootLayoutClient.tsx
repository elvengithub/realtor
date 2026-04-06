"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/src/components/Navbar";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Define dashboard routes where we don't want the main Navbar
  const dashboardRoutes = [
    '/dashboard',
    '/content',
    '/inquiries',
    '/properties',
    '/settings',
    '/properties/new',
    '/login'
  ];
  
  const isDashboardRoute = pathname ? dashboardRoutes.some(route => pathname === route || pathname.startsWith(route + '/')) : false;

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      {children}
    </>
  );
}
