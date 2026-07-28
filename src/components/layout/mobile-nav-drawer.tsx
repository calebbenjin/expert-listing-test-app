"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageSquare,
  RefreshCw,
  FileText,
  Wallet,
  Store,
  X,
} from "lucide-react";

import { navItems } from "./nav-items";

const headerIcons = [
  { id: "chat", icon: MessageSquare, label: "Messages" },
  { id: "sync", icon: RefreshCw, label: "Sync" },
  { id: "docs", icon: FileText, label: "Documents" },
  { id: "wallet", icon: Wallet, label: "Wallet" },
  { id: "store", icon: Store, label: "Store" },
];

export function MobileNavDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col bg-background shadow-xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-semibold">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-3 py-4">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className={
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors " +
                      (isActive
                        ? "bg-mint text-mint-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground")
                    }
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-border px-3 py-4">
              <p className="px-3 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Quick actions
              </p>
              <div className="flex flex-wrap gap-1 px-1">
                {headerIcons.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    type="button"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="size-[18px]" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
