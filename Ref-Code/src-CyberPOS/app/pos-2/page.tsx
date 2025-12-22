import { Sidebar } from "@/components/pos-2/sidebar"
import { Header } from "@/components/pos-2/header"
import { MachineGrid } from "@/components/pos-2/machine-grid"
import { StatusPanel } from "@/components/pos-2/status-panel"

export default function POSPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Machine Grid */}
          <div className="flex-1 overflow-auto p-6">
            <MachineGrid />
          </div>

          {/* Right Status Panel */}
          <StatusPanel />
        </div>
      </div>
    </div>
  )
}
