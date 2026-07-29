"use client";

import { useState } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader onMenuClick={() => setMenuOpen(true)} />
      <PrimaryNav />
      <MobileNavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex-1 px-4 py-6 sm:w-11/12 lg:w-11/12 mx-auto lg:py-8">
        {children}
      </main>
    </div>
  );
}
