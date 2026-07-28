"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navItems } from "./nav-items";

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden border-b border-border bg-background lg:block">
      <div className="flex items-center gap-1 px-8 py-3">
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
              className="relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {isActive && (
                <motion.span
                  layoutId="primary-nav-active"
                  className="absolute inset-0 rounded-full bg-mint"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <Icon
                  className={
                    isActive ? "size-4 text-mint-foreground" : "size-4"
                  }
                />
                <span className={isActive ? "text-mint-foreground" : ""}>
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
