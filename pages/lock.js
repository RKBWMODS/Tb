import { motion } from 'framer-motion';

export default function Lock() {
  return (
    <motion.div className="h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-6 text-center">
        ANDA PERLU MEMBELI KOIN AGAR TETAP BISA MENGGUNAKAN BOCORAN NOMER TOGEL KAMI.
        <br />SETELAH MEMBELI KAMI AKAN MEMBUKA AKUN ANDA KEMBALI
      </h1>
      <img src="/img/qr.png" alt="QR Code Pembayaran" className="mb-4 w-48 h-48" />
      <p className="text-center">KAMI MENGGUNAKAN DANA SEBAGAI ALAT PEMBAYARAN.</p>
    </motion.div>
  );
}
