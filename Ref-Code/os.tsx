import { getOSInfo } from "@/lib/os";

export default function Home() {
  const osInfo = getOSInfo();

  const formatValue = (key: string, value: unknown) => {
    if (key === 'freemem') {
      return `${((value as number) / 1024 / 1024 / 1024).toFixed(2)} GB`;
    }
    if (key === 'uptime') {
      const hours = Math.floor((value as number) / 3600);
      const minutes = Math.floor(((value as number) % 3600) / 60);
      return `${hours}h ${minutes}m`;
    }
    if (key === 'cpus' && Array.isArray(value)) {
      const cpus = value as { model: string }[];
      return `${cpus.length} Cores - ${cpus[0]?.model}`;
    }
    if (typeof value === 'object' && value !== null) {
      return <pre style={{ margin: 0 }}>{JSON.stringify(value, null, 2)}</pre>;
    }
    return String(value);
  };

  return (
    <main style={{
      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      padding: '3rem',
      backgroundColor: '#0a0a0a',
      color: '#ededed',
      minHeight: '100vh',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(90, 90, 150, 0.15) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(200, 50, 50, 0.1) 0%, transparent 20%)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            letterSpacing: '-0.05em',
            background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}>
            Server Status
          </h1>
          <p style={{ color: '#666', fontSize: '1.2rem', fontWeight: 300 }}>
            Real-time Operating System Metrics
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {Object.entries(osInfo).map(([key, value]) => (
            <div key={key} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '2rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                paddingBottom: '0.8rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: key === 'uptime' || key === 'freemem' ? '#00E096' : '#FF0055',
                  marginRight: '12px',
                  boxShadow: key === 'uptime' || key === 'freemem' ? '0 0 10px #00E096' : '0 0 10px #FF0055'
                }} />
                <h2 style={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ccc',
                  margin: 0,
                  letterSpacing: '0.02em'
                }}>{key.replace(/([A-Z])/g, ' $1').trim()}</h2>
              </div>

              <div style={{
                fontFamily: typeof value === 'object' ? '"JetBrains Mono", "Fira Code", monospace' : 'inherit',
                fontSize: typeof value === 'object' ? '0.85rem' : '1.5rem',
                fontWeight: typeof value === 'object' ? 400 : 500,
                color: typeof value === 'object' ? '#aaa' : '#fff',
                overflowX: 'auto',
                maxHeight: '300px',
                lineHeight: 1.6,
              }}>
                {formatValue(key, value)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
