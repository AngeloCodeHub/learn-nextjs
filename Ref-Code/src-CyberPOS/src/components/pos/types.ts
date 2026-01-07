export type MachineStatus = 'available' | 'occupied' | 'cleaning' | 'maintenance' | 'faulty';

export interface Machine {
  id: number;
  name: string;
  status: MachineStatus;
  startTime?: string;
  duration?: string;
  user?: string;
  amount?: number;
}
