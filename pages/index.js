
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const analyze = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const result = await res.json();
      if (res.ok) setData(result);
      else setError(result.error);
    } catch (err) {
      setError('Gagal menghubungi server.');
    }
    setLoading(false);
  };

  return (
    <div style={{ background: '#000', color: '#0f0', fontFamily: 'Courier New', padding: 40, minHeight: '100vh' }}>
      <h1>===[ HACKER TOGEL INTEL ]===</h1>
      <p>Masukkan link situs togel:</p>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: '100%', padding: 10, background: '#111', color: '#0f0', border: '1px solid #0f0' }}
      />
      <button onClick={analyze} style={{ marginTop: 10, padding: 10, background: '#0f0', color: '#000', border: 'none' }}>
        ANALISA SITUS
      </button>
      {loading && <pre>Memindai kode bandar... ████████████</pre>}
      {error && <pre style={{ color: 'red' }}>{error}</pre>}
      {data && (
        <pre>
Bocoran AI:
2D: {data.prediksi["2D"]} | 3D: {data.prediksi["3D"]} | 4D: {data.prediksi["4D"]}

Terakhir ditemukan:
{data.nomer.join(', ')}
        </pre>
      )}
    </div>
  );
          }
