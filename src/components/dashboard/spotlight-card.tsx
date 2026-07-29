"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SpotlightCard as SpotlightCardData } from "@/types/dashboard";

function SpotlightCardImpl({ card }: { card: SpotlightCardData }) {
  const [activeImage, setActiveImage] = useState(0);
  const imageCount = card.images.length;

  function goTo(direction: -1 | 1) {
    setActiveImage((prev) => (prev + direction + imageCount) % imageCount);
  }

  const image = card.images[activeImage];

  return (
    <div className="group relative aspect-4/5 w-full shrink-0 snap-center overflow-hidden rounded-2xl sm:aspect-square sm:shrink">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={image.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />

      {card.tabs && (
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-md bg-black/40 p-1 text-xs font-medium text-white backdrop-blur-sm">
          {card.tabs.map((tab) => (
            <span
              key={tab.id}
              className={cn(
                "flex items-center gap-1 rounded-md px-2.5 py-1",
                tab.id === card.activeTabId
                  ? "bg-black/60"
                  : "text-white/70"
              )}
            >
              {tab.id === card.activeTabId && (
                <span className="size-1.5 rounded-md bg-stat-highlight" />
              )}
              {tab.label}
            </span>
          ))}
        </div>
      )}

      {card.showCarouselControls && imageCount > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => goTo(-1)}
            className="absolute top-1/2 left-3 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => goTo(1)}
            className="absolute top-1/2 right-3 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronRight className="size-4" />
          </button>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-base font-medium  text-white/80 uppercase">
          {card.eyebrow}
        </p>
        {card.title && (
          <p className="mt-1 text-xl font-semibold text-white">
            {card.title}
          </p>
        )}
        {card.subtitle && (
          <p className="text-base text-white/70">{card.subtitle}</p>
        )}
        <p className="mt-1 text-2xl font-bold text-stat-highlight">
          {card.statValue}
        </p>
        {imageCount > 1 && (
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {card.images.map((img, index) => (
              <button
                key={img.url}
                type="button"
                aria-label={`Show image ${index + 1}`}
                onClick={() => setActiveImage(index)}
                className={cn(
                  "size-1.5 rounded-full transition-colors",
                  index === activeImage ? "bg-white" : "bg-white/40"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const SpotlightCard = memo(SpotlightCardImpl);
