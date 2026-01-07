"use client"

import {
  MonitorCheck,
  Users,
  TrendingUp,
  ShoppingCart,
  Database,
  UserCog,
  Volume2,
  Radio,
  Settings,
  Home,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const menuItems = [
  { icon: Home, label: "主頁", id: "home" },
  { icon: MonitorCheck, label: "機台管理", id: "machines" },
  { icon: Users, label: "登入值班人員", id: "staff" },
  { icon: UserCog, label: "員工交班管理", id: "shift" },
  { icon: TrendingUp, label: "機台到時排行", id: "ranking" },
  { icon: ShoppingCart, label: "餐飲銷售管理", id: "sales" },
  { icon: Database, label: "顧客點資訊息", id: "customer" },
  { icon: UserCog, label: "會員資料管理", id: "member" },
  { icon: Volume2, label: "機台音量控管", id: "volume" },
  { icon: Radio, label: "全場訊息廣播", id: "broadcast" },
  { icon: Settings, label: "系統設定", id: "settings" },
]

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("machines")

  return (
    <div className="flex h-full w-64 flex-col border-r border-sidebar-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <MonitorCheck className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-sidebar-foreground">北半球－楠梓</span>
            <span className="text-xs text-muted-foreground">中控主櫃檯</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-3">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeItem === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                activeItem === item.id && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Version Info */}
      <div className="border-t border-sidebar-border p-4">
        <p className="text-xs text-muted-foreground">版本: 4.0.0</p>
        <p className="text-xs text-muted-foreground">本班: 本店老闆 中班</p>
      </div>
    </div>
  )
}
