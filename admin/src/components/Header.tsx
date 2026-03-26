"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { FileText, Settings, LogOut, User } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-500 capitalize">
          {pathname === "/" ? "Dashboard" : pathname.split("/").filter(Boolean).pop()}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Link 
          href="/content" 
          className={`p-2 rounded-lg transition-colors ${pathname === "/content" ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
          title="Page Content"
        >
          <FileText className="w-5 h-5" />
        </Link>
        <Link 
          href="/settings" 
          className={`p-2 rounded-lg transition-all duration-300 ${
            pathname === "/settings" 
              ? "bg-brand-gold text-white shadow-lg scale-110" 
              : "text-brand-gold hover:bg-brand-gold/10 hover:scale-105"
          }`}
          title="Settings"
        >
          <Settings className="w-6 h-6 stroke-[2.5px]" />
        </Link>
        <div className="h-6 w-px bg-slate-200 mx-2" />
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}
