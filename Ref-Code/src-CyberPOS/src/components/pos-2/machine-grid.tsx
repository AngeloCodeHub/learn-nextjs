"use client"

import { Monitor, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type MachineStatus = "available" | "occupied" | "cleaning" | "maintenance" | "error"

interface Machine {
  id: number
  status: MachineStatus
  position: { x: number; y: number }
}

// Generate machine layout matching the original image
const generateMachines = (): Machine[] => {
  const machines: Machine[] = []
  const statusOptions: MachineStatus[] = ["available", "occupied", "cleaning", "maintenance", "error"]

  // Row 1: 1-12
  for (let i = 1; i <= 12; i++) {
    machines.push({
      id: i,
      status: i % 3 === 0 ? "occupied" : "available",
      position: { x: i - 1, y: 0 },
    })
  }

  // Row 2: 13-18
  for (let i = 13; i <= 18; i++) {
    machines.push({
      id: i,
      status: i % 4 === 0 ? "occupied" : "available",
      position: { x: i - 13, y: 1 },
    })
  }

  // Row 3: 19-24
  for (let i = 19; i <= 24; i++) {
    machines.push({
      id: i,
      status: i === 23 ? "cleaning" : i === 24 ? "error" : i % 3 === 0 ? "occupied" : "available",
      position: { x: i - 19, y: 2 },
    })
  }

  // Add more machines for demonstration (25-72)
  for (let i = 25; i <= 72; i++) {
    const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)]
    machines.push({
      id: i,
      status: i % 5 === 0 ? "occupied" : i % 17 === 0 ? "error" : i % 13 === 0 ? "cleaning" : "available",
      position: { x: (i - 25) % 8, y: Math.floor((i - 25) / 8) + 3 },
    })
  }

  return machines
}

const machines = generateMachines()

const statusConfig = {
  available: {
    bg: "bg-secondary hover:bg-secondary/80",
    border: "border-border",
    text: "text-muted-foreground",
    icon: "text-muted-foreground",
    label: "空台",
  },
  occupied: {
    bg: "bg-success/20 hover:bg-success/30",
    border: "border-success",
    text: "text-success-foreground",
    icon: "text-success",
    label: "使用中",
  },
  cleaning: {
    bg: "bg-warning/20 hover:bg-warning/30",
    border: "border-warning",
    text: "text-warning-foreground",
    icon: "text-warning",
    label: "清潔",
  },
  maintenance: {
    bg: "bg-primary/20 hover:bg-primary/30",
    border: "border-primary",
    text: "text-primary-foreground",
    icon: "text-primary",
    label: "維修",
  },
  error: {
    bg: "bg-destructive/20 hover:bg-destructive/30",
    border: "border-destructive",
    text: "text-destructive-foreground",
    icon: "text-destructive",
    label: "故障",
  },
}

export function MachineGrid() {
  return (
    <div className="grid grid-cols-12 gap-4 auto-rows-min">
      {machines.map((machine) => {
        const config = statusConfig[machine.status]

        return (
          <button
            key={machine.id}
            className={cn(
              "group relative flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-all hover:scale-105",
              config.bg,
              config.border,
            )}
          >
            {/* Machine Number */}
            <div className={cn("absolute left-2 top-2 text-xs font-semibold", config.text)}>{machine.id}</div>

            {/* Status Indicator */}
            {machine.status === "error" && (
              <AlertCircle className={cn("absolute right-2 top-2 h-4 w-4", config.icon)} />
            )}

            {/* Machine Icon */}
            <Monitor className={cn("h-8 w-8 mb-2", config.icon)} />

            {/* Status Label */}
            <span className={cn("text-xs font-medium", config.text)}>{config.label}</span>

            {/* Usage Time for occupied machines */}
            {machine.status === "occupied" && <span className="mt-1 text-xs text-muted-foreground">2:35:42</span>}
          </button>
        )
      })}
    </div>
  )
}
