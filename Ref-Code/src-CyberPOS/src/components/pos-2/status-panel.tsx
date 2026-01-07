"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MonitorCheck } from "lucide-react"

export function StatusPanel() {
  const currentTime = new Date()

  return (
    <div className="w-80 border-l border-border bg-card p-6 overflow-y-auto">
      <div className="space-y-6">
        {/* Current Time */}
        <Card className="bg-primary/10 border-primary p-4">
          <div className="flex items-center justify-between">
            <Clock className="h-8 w-8 text-primary" />
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">
                {currentTime.toLocaleTimeString("zh-TW", { hour12: false })}
              </div>
              <div className="text-sm text-muted-foreground">{currentTime.toLocaleDateString("zh-TW")}</div>
            </div>
          </div>
        </Card>

        {/* Machine Info */}
        <Card className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
            <MonitorCheck className="h-4 w-4" />
            機台資訊
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">總數</span>
              <Badge variant="outline">72 台</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">使用中</span>
              <Badge className="bg-success/20 text-success border-success">15 台</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">空台</span>
              <Badge variant="outline">48 台</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">清潔中</span>
              <Badge className="bg-warning/20 text-warning border-warning">3 台</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">維修中</span>
              <Badge className="bg-primary/20 text-primary border-primary">4 台</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">故障</span>
              <Badge className="bg-destructive/20 text-destructive border-destructive">2 台</Badge>
            </div>
          </div>
        </Card>

        {/* Time Info */}
        <Card className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            時間資訊
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">開台時間</span>
              <span className="text-sm font-medium">08:00:00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">到時時間</span>
              <span className="text-sm font-medium">--:--:--</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">使用時間</span>
              <span className="text-sm font-medium">15:48:01</span>
            </div>
          </div>
        </Card>

        {/* Financial Info */}
        <Card className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            營收資訊
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">開台金額</span>
              <span className="text-lg font-bold text-success">$12,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">本日營收</span>
              <span className="text-lg font-bold text-primary">$38,920</span>
            </div>
          </div>
        </Card>

        {/* Mode Selector */}
        <Card className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-card-foreground">開啟模式</h3>
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-lg border border-border bg-secondary p-2 text-sm hover:bg-secondary/80">
              一般模式
            </button>
            <button className="rounded-lg border border-primary bg-primary/20 p-2 text-sm text-primary hover:bg-primary/30">
              空台模式
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
