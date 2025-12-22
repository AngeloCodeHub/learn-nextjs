import { Button } from "@/components/ui/button";
import { Settings, DollarSign, ShoppingBag, Users, Shield, Monitor, MoreHorizontal } from "lucide-react";

export function PosHeader() {
  return (
    <div className="flex flex-col border-b border-border bg-background">
      {/* Top Menu */}
      <div className="flex items-center gap-1 overflow-x-auto p-2">
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <Settings className="h-4 w-4" /> 基本參數
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <DollarSign className="h-4 w-4" /> 計價設定
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <ShoppingBag className="h-4 w-4" /> 商品管理
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <Users className="h-4 w-4" /> 會員管理
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <Shield className="h-4 w-4" /> 內部管理
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <Monitor className="h-4 w-4" /> 被控端管理
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
          <MoreHorizontal className="h-4 w-4" /> 其它管理
        </Button>
      </div>

      {/* Status Bar */}
      <div className="flex items-center gap-4 bg-muted/50 px-4 py-2 text-sm overflow-x-auto border-t border-border/50">
        <div className="flex items-center gap-2">
          <span className="font-bold text-muted-foreground">總台數:</span>
          <span className="rounded bg-muted px-2 py-0.5 font-mono font-bold text-foreground">82</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-success">連線:</span>
          <span className="rounded bg-success/20 px-2 py-0.5 font-mono font-bold text-success">49</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-primary">清潔:</span>
          <span className="rounded bg-primary/20 px-2 py-0.5 font-mono font-bold text-primary">10</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-destructive">故障:</span>
          <span className="rounded bg-destructive/20 px-2 py-0.5 font-mono font-bold text-destructive">1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-warning">維修:</span>
          <span className="rounded bg-warning/20 px-2 py-0.5 font-mono font-bold text-warning">0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-accent">員工:</span>
          <span className="rounded bg-accent/20 px-2 py-0.5 font-mono font-bold text-accent">0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-muted-foreground">空台:</span>
          <span className="rounded bg-muted px-2 py-0.5 font-mono font-bold text-foreground">49</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-primary">計費數:</span>
          <span className="rounded bg-primary/20 px-2 py-0.5 font-mono font-bold text-primary">33</span>
        </div>
      </div>
    </div>
  );
}
