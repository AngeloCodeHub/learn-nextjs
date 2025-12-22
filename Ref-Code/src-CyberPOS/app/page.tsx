
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monitor, Server, Zap, MapPin, Phone, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Gamepad2 className="h-6 w-6" />
              <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
            </div>
            <span className="hidden text-xl font-bold tracking-tight md:inline-block">
              北半球電競館
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/pos"
              className="transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)]"
            >
              中控 Layout-1
            </Link>
            <Link
              href="/pos-2"
              className="transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)]"
            >
              中控 Layout-2
            </Link>
            <Link
              href="/login"
              className="transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)]"
            >
              登入
            </Link>
            <Button variant="default" className="shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_25px_var(--color-primary)] transition-shadow">
              座位預約
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute left-0 top-0 -z-10 h-125 w-125 -translate-x-[30%] -translate-y-[20%] rounded-full bg-primary/20 blur-[100px] opacity-50" />
          <div className="absolute right-0 bottom-0 -z-10 h-125 w-125 translate-x-[30%] translate-y-[20%] rounded-full bg-secondary/20 blur-[100px] opacity-50" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              {/* Feature 1: Professional */}
              <div className="group relative flex flex-col items-center space-y-4 text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/50">
                  <Monitor className="h-12 w-12 text-primary transition-all duration-500 group-hover:drop-shadow-[0_0_10px_var(--color-primary)]" />
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/50 transition-all duration-500">
                  專業
                </h2>
                <p className="max-w-75 text-muted-foreground md:text-lg">
                  頂級電競設備，極致流暢體驗。
                  <br />
                  為勝利而生的專業場域。
                </p>
              </div>

              {/* Feature 2: Service */}
              <div className="group relative flex flex-col items-center space-y-4 text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/50">
                  <Server className="h-12 w-12 text-primary transition-all duration-500 group-hover:drop-shadow-[0_0_10px_var(--color-primary)]" />
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/50 transition-all duration-500">
                  服務
                </h2>
                <p className="max-w-75 text-muted-foreground md:text-lg">
                  24小時全天候支援，貼心餐飲服務。
                  <br />
                  讓您專注於每一場戰鬥。
                </p>
              </div>

              {/* Feature 3: Progress */}
              <div className="group relative flex flex-col items-center space-y-4 text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/50">
                  <Zap className="h-12 w-12 text-primary transition-all duration-500 group-hover:drop-shadow-[0_0_10px_var(--color-primary)]" />
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/50 transition-all duration-500">
                  進步
                </h2>
                <p className="max-w-75 text-muted-foreground md:text-lg">
                  持續更新硬體，引進最新遊戲技術。
                  <br />
                  與玩家一同進化，超越極限。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">高雄市楠梓區加昌路725號</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">07-3610933</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} 北半球電競館. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
