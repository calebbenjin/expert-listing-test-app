import { memo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SpotlightCard as SpotlightCardData } from "@/types/dashboard";

function SpotlightCardImpl({ card }: { card: SpotlightCardData }) {
  return (
    <div className="group relative aspect-4/5 w-full shrink-0 snap-center overflow-hidden rounded-2xl sm:aspect-square sm:shrink">
      <Image
        src={card.imageUrl}
        alt={card.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/30" />

      {card.tabs && (
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-black/40 p-1 text-xs font-medium text-white backdrop-blur-sm">
          {card.tabs.map((tab) => (
            <span
              key={tab.id}
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1",
                tab.id === card.activeTabId
                  ? "bg-black/60"
                  : "text-white/70"
              )}
            >
              {tab.id === card.activeTabId && (
                <span className="size-1.5 rounded-full bg-stat-highlight" />
              )}
              {tab.label}
            </span>
          ))}
        </div>
      )}

      {card.showCarouselControls && (
        <>
          <button
            type="button"
            aria-label="Previous"
            className="absolute top-1/2 left-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronRight className="size-4" />
          </button>
        </>
      )}

      {card.showChatAction && (
        <button
          type="button"
          aria-label="Open chat"
          className="absolute right-3 bottom-16 flex size-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <MessageCircle className="size-4" />
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-xs font-medium tracking-wide text-white/80 uppercase">
          {card.eyebrow}
        </p>
        {card.title && (
          <p className="mt-1 text-base font-semibold text-white">
            {card.title}
          </p>
        )}
        {card.subtitle && (
          <p className="text-sm text-white/70">{card.subtitle}</p>
        )}
        <p className="mt-1 text-2xl font-bold text-stat-highlight">
          {card.statValue}
        </p>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <span className="size-1.5 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}

export const SpotlightCard = memo(SpotlightCardImpl);
