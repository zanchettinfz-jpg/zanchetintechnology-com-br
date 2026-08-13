import { Activity, BarChart3, Boxes, LayoutDashboard, Settings, Users } from "lucide-react";

const bars = [42, 68, 55, 84, 61, 92, 74, 48, 80, 66, 95, 58];

export function DashboardMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-card/80 shadow-[var(--shadow-elegant)] backdrop-blur-sm"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/40" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/20" />
        <span className="ml-3 truncate text-[11px] text-muted-foreground">
          painel.zanchetintechnology.com
        </span>
      </div>

      <div className="grid grid-cols-[auto_minmax(0,1fr)]">
        <aside className="flex flex-col gap-4 border-r border-border p-3 sm:p-4">
          {[LayoutDashboard, Boxes, Users, BarChart3, Activity, Settings].map((Icon, i) => (
            <span
              key={i}
              className={`grid size-8 place-items-center rounded-lg ${
                i === 0 ? "bg-primary/20 text-primary-glow" : "text-muted-foreground"
              }`}
            >
              <Icon className="size-4" />
            </span>
          ))}
        </aside>

        <div className="min-w-0 space-y-4 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { l: "Pedidos", v: "128" },
              { l: "Em produção", v: "34" },
              { l: "Estoque", v: "97%" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl border border-border bg-background/60 p-3">
                <p className="truncate text-[10px] text-muted-foreground">{k.l}</p>
                <p className="mt-1 font-display text-base font-semibold sm:text-lg">{k.v}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">Produção mensal</span>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] text-primary-glow">
                +18%
              </span>
            </div>
            <div className="flex h-24 items-end gap-1.5 sm:h-28">
              {bars.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary-glow"
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {[80, 60, 42].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="size-6 shrink-0 rounded-md bg-secondary" />
                <span className="h-2 rounded-full bg-secondary" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}