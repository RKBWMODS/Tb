import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const sessionUsed = localStorage.getItem('usedFree');
    const savedCoins = parseInt(localStorage.getItem('coins') || '0', 10);
    setHasSession(!!sessionUsed);
    setCoins(savedCoins);
  }, []);

  const handleBuyCoins = () => {
    let newCoins = coins + 10;
    setCoins(newCoins);
    localStorage.setItem('coins', newCoins.toString());
  };

  const confirmTransfer = () => {
    handleBuyCoins();
  };

  if (loading) {
    return <div className="loader">Loading intel...</div>;
  }

  if (hasSession && coins <= 0) {
    return (
      <div className="blocked">
        <h1>ANDA HARUS MEMBELI KOIN UNTUK MEMBUKA BOCORAN SELANJUTNYA</h1>
        <div className="coin-box" onClick={handleBuyCoins}>BELI 10 KOIN</div>
        <img src="/qr-payment.png" alt="QR Payment" className="qr" />
        <button onClick={confirmTransfer}>SAYA SUDAH TRANSFER</button>
      </div>
    );
  }

  const showIntel = () => {
    localStorage.setItem('usedFree', 'true');
    setCoins(coins - 1);
    localStorage.setItem('coins', (coins - 1).toString());
  };

  return (
    <div className="main">
      <h1>=== [ HACKER TOGEL INTEL V2 ] ===</h1>
      <button onClick={showIntel}>LIHAT BOCORAN</button>
      {coins > 0 && <p>Sisa Koin: {coins}</p>}
    </div>
  );
}
