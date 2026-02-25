"use client"

import { Machine, MachineStatus } from "@/components/pos/types";
import { MachineGrid } from "@/components/pos/MachineGrid";
import { PosHeader } from "@/components/pos/PosHeader";
import { PosSidebar } from "@/components/pos/PosSidebar";
// import { useState, useEffect } from "react";
import { useState } from "react";

// Generate dummy data
const generateMachines = (count: number): Machine[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const rand = Math.random();
    let status: MachineStatus = 'available';
    let duration = undefined;
    let amount = undefined;

    if (rand > 0.7) {
      status = 'occupied';
      duration = `${Math.floor(Math.random() * 5)}h ${Math.floor(Math.random() * 60)}m`;
      amount = Math.floor(Math.random() * 500) + 50;
    } else if (rand > 0.65) {
      status = 'cleaning';
    } else if (rand > 0.63) {
      status = 'maintenance';
    } else if (rand > 0.62) {
      status = 'faulty';
    }

    return {
      id,
      name: `PC-${id}`,
      status,
      duration,
      amount,
    };
  });
};

export default function PosPage() {
  const [machines] = useState<Machine[]>(() => generateMachines(80));

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Left Sidebar */}
      <PosSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <PosHeader />

        {/* Scrollable Grid Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <MachineGrid machines={machines} />
        </main>
      </div>
    </div>
  );
}
