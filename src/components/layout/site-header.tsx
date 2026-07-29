"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { headerIcons } from "@/components/layout/header-icons";
import logoImg from "/icons/expert-listing-logo.png";


export function SiteHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-brand text-brand-foreground">
      <div className="flex h-16 items-center justify-between gap-4 w-11/12 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Image
            src="/icons/expert-listing-logo.png"
            alt=""
            width={200}
            height={200}
            className="lg:h-8 h-5 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {headerIcons.map(({ id, src, label }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full opacity-85 transition-opacity hover:bg-white/10 hover:opacity-100"
            >
              <Image src={src} alt="" width={28} height={28} />
            </button>
          ))}
          <Avatar size="lg" className="ml-2 bg-white/15 text-brand-foreground">
            <AvatarFallback className="bg-white text-brand font-semibold text-xl">
              D
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <Avatar className="bg-white text-brand-foreground">
            <AvatarFallback className="bg-transparent text-brand font-semibold text-xl">
              D
            </AvatarFallback>
          </Avatar>
          <button
            type="button"
            aria-label="Open menu"
            onClick={onMenuClick}
            className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
