import { cn } from "@/lib/utils";

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow font-display text-lg font-bold text-primary-foreground shadow-[var(--shadow-elegant)]">
        Z
      </span>
      {showText && (
        <span className="truncate font-display text-[0.95rem] font-semibold tracking-tight text-foreground sm:text-base">
          Zanchetin <span className="text-muted-foreground">Technology</span>
        </span>
      )}
    </span>
  );
}