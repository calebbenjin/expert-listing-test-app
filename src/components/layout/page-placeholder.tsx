import type { LucideIcon } from "lucide-react";

export function PagePlaceholder({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-card px-6 py-24 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-mint text-mint-foreground">
        <Icon className="size-6" />
      </span>
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
