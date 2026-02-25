import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Monitor, User, Clock, AlertCircle, Wrench } from "lucide-react";
import { Machine, MachineStatus } from "./types";

interface MachineCardProps {
  machine: Machine;
}

const statusStyles: Record<MachineStatus, string> = {
  available: "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
  occupied: "border-primary/50 bg-primary/10 text-primary hover:border-primary hover:shadow-[0_0_10px_var(--color-primary)]",
  cleaning: "border-blue-500/50 bg-blue-500/10 text-blue-500 hover:border-blue-500",
  maintenance: "border-warning/50 bg-warning/10 text-warning hover:border-warning",
  faulty: "border-destructive/50 bg-destructive/10 text-destructive hover:border-destructive",
};

const StatusIcon = ({ status }: { status: MachineStatus }) => {
  switch (status) {
    case 'occupied': return <User className="h-4 w-4" />;
    case 'cleaning': return <Monitor className="h-4 w-4" />; // 替代 Broom
    case 'maintenance': return <Wrench className="h-4 w-4" />;
    case 'faulty': return <AlertCircle className="h-4 w-4" />;
    default: return <Monitor className="h-4 w-4" />;
  }
};

export function MachineCard({ machine }: MachineCardProps) {
  return (
    <Card className={cn("cursor-pointer transition-all hover:shadow-md", statusStyles[machine.status])}>
      <CardHeader className="p-3 pb-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">#{machine.id}</CardTitle>
          <StatusIcon status={machine.status} />
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-1 text-xs">
        {machine.status === 'occupied' ? (
          <div className="space-y-1">
            <div className="flex items-center gap-1 font-medium">
              <Clock className="h-3 w-3" />
              <span>{machine.duration}</span>
            </div>
            <div className="font-mono text-sm font-bold">
              ${machine.amount}
            </div>
          </div>
        ) : (
          <div className="flex h-9.5 items-center justify-center text-xs opacity-70">
            {machine.status === 'available' ? '空閒' :
              machine.status === 'cleaning' ? '待清潔' :
                machine.status === 'maintenance' ? '維護中' : '故障'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
