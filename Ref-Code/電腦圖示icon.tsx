import {
  Computer,
  Monitor,
  Laptop,
  LaptopMinimal,
  MonitorSmartphone,
  PcCase
} from "lucide-react";

export default function Home() {
  const icons = [
    { name: "Computer", Icon: Computer, color: "from-blue-500 to-cyan-400" },
    { name: "Monitor", Icon: Monitor, color: "from-purple-500 to-pink-400" },
    { name: "Laptop", Icon: Laptop, color: "from-orange-500 to-yellow-400" },
    { name: "Laptop Minimal", Icon: LaptopMinimal, color: "from-green-500 to-emerald-400" },
    { name: "Monitor Smartphone", Icon: MonitorSmartphone, color: "from-indigo-500 to-violet-400" },
    { name: "PC Case", Icon: PcCase, color: "from-red-500 to-rose-400" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 md:p-24 font-(family-name:--font-geist-sans)">
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1200">
          電腦圖示庫
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          為您的專案挑選最完美的電腦硬體相關圖示，採用 Lucide React 高品質向量設計。
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
        {icons.map(({ name, Icon, color }, index) => (
          <div
            key={name}
            style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
            className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500 rounded-3xl`} />

            <div className="relative flex flex-col items-center gap-6">
              <div className={`p-5 rounded-2xl bg-linear-to-br ${color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                <Icon size={48} className="text-white" strokeWidth={1.5} />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">{name}</h3>
                <code className="text-sm px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-slate-400 inline-block">
                  &lt;{name.replace(/\s+/g, '')} /&gt;
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-24 text-center text-slate-500 text-sm">
        <p>基於 Lucide React 圖示庫構建 • 為您的 Web 專案增添動感</p>
      </footer>
    </div>
  );
}

