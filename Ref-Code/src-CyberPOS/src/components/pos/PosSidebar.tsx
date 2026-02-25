import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator"; // Assuming Separator exists, if not I'll use div
// import { Clock, LogOut, MonitorPlay, PlayCircle, RefreshCw, Users, Volume2, MessageSquare, Coffee, UserCog, ShieldAlert } from "lucide-react";
import { Clock, MonitorPlay, PlayCircle, RefreshCw, Users, Volume2, MessageSquare, Coffee, UserCog, ShieldAlert } from "lucide-react";

export function PosSidebar() {
  return (
    <div className="flex h-full w-70 flex-col gap-4 border-r border-sidebar-border bg-sidebar p-4 text-sidebar-foreground">
      {/* Time & Date */}
      <div className="rounded-lg bg-sidebar-primary p-4 text-center text-sidebar-primary-foreground shadow-sm">
        <div className="text-3xl font-bold font-mono">23:48:01</div>
        <div className="text-sm opacity-80">114/08/14 (週四)</div>
      </div>

      {/* Shift Info */}
      <Card className="bg-sidebar-accent border-sidebar-border text-sidebar-accent-foreground">
        <CardHeader className="p-3 pb-2">
          <CardTitle className="text-sm font-medium opacity-70">當前班次</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0 text-sm">
          <div className="flex justify-between">
            <span>本班:</span>
            <span className="font-bold">本店老闆</span>
          </div>
          <div className="flex justify-between">
            <span>前班:</span>
            <span className="font-bold">中班</span>
          </div>
        </CardContent>
      </Card>

      {/* Primary Actions */}
      <div className="grid gap-2">
        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <MonitorPlay className="mr-2 h-5 w-5" /> 開台時間
        </Button>
        <Button size="lg" variant="outline" className="w-full border-sidebar-border bg-transparent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <Clock className="mr-2 h-5 w-5" /> 到時時間
        </Button>
        <Button size="lg" variant="outline" className="w-full border-sidebar-border bg-transparent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <PlayCircle className="mr-2 h-5 w-5" /> 開啟模式
        </Button>
      </div>

      <div className="my-2 h-px bg-sidebar-border" />

      {/* Management Actions */}
      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <UserCog className="h-5 w-5" />
          <span className="text-xs">登入值班</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <RefreshCw className="h-5 w-5" />
          <span className="text-xs">員工交班</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <Coffee className="h-5 w-5" />
          <span className="text-xs">餐飲銷售</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs">顧客訊息</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <Users className="h-5 w-5" />
          <span className="text-xs">會員資料</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <Volume2 className="h-5 w-5" />
          <span className="text-xs">音量控管</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-auto flex-col gap-1 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <ShieldAlert className="h-5 w-5" />
          <span className="text-xs">全場廣播</span>
        </Button>
        <Button variant="secondary" size="sm" className="col-span-2 h-auto flex-row gap-2 py-3 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80">
          <Clock className="h-5 w-5" />
          <span className="text-xs">機台到時排行</span>
        </Button>
      </div>

      <div className="mt-auto text-center text-xs text-muted-foreground">
        版本: 3.0.6529.10897
        <br />
        中控計費模式
      </div>
    </div>
  );
}
