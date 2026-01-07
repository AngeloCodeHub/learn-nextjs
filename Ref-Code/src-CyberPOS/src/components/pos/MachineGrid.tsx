import { Machine } from "./types";
import { MachineCard } from "./MachineCard";

interface MachineGridProps {
  machines: Machine[];
}

export function MachineGrid({ machines }: MachineGridProps) {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {machines.map((machine) => (
        <MachineCard key={machine.id} machine={machine} />
      ))}
    </div>
  );
}
