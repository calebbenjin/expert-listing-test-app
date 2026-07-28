"use client";

import Link from "next/link";
import {
  MessageSquare,
  RefreshCw,
  FileText,
  Wallet,
  Store,
  Menu,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const headerIcons = [
  { id: "chat", icon: MessageSquare, label: "Messages" },
  { id: "sync", icon: RefreshCw, label: "Sync" },
  { id: "docs", icon: FileText, label: "Documents" },
  { id: "wallet", icon: Wallet, label: "Wallet" },
  { id: "store", icon: Store, label: "Store" },
];

export function SiteHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-brand text-brand-foreground">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-white/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
              aria-hidden
            >
              <path
                d="M4 20L20 4M20 4H8M20 4V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-lg">Expert Listing</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {headerIcons.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full text-brand-foreground/85 transition-colors hover:bg-white/10 hover:text-brand-foreground"
            >
              <Icon className="size-[18px]" />
            </button>
          ))}
          <Avatar className="ml-2 bg-white/15 text-brand-foreground">
            <AvatarFallback className="bg-transparent text-brand-foreground">
              D
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Avatar className="bg-white/15 text-brand-foreground">
            <AvatarFallback className="bg-transparent text-brand-foreground">
              D
            </AvatarFallback>
          </Avatar>
          <button
            type="button"
            aria-label="Open menu"
            onClick={onMenuClick}
            className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
