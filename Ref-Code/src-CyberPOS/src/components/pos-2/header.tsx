"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-card-foreground">機台監控中心</h1>

        {/* Status Badges */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted">
            <span className="mr-1 text-success">●</span>
            連線: 15
          </Badge>
          <Badge variant="outline" className="bg-muted">
            <span className="mr-1 text-warning">●</span>
            清潔: 3
          </Badge>
          <Badge variant="outline" className="bg-muted">
            <span className="mr-1 text-muted-foreground">●</span>
            空台: 48
          </Badge>
          <Badge variant="outline" className="bg-muted">
            <span className="mr-1 text-destructive">●</span>
            故障: 2
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="搜尋機台編號..." className="pl-10 bg-secondary border-input" />
        </div>

        {/* Actions */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground">
            3
          </span>
        </Button>

        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
