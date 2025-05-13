import { motion } from 'framer-motion';

export default function Home({ mostFrequent, predicted, freqData }) {
  return (
    <motion.div className="min-h-screen bg-black text-white p-8"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className="text-3xl font-bold mb-4">Prediksi Nomor Togel</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Nomor Paling Sering Keluar:</h2>
        <ul className="list-disc list-inside">
          {mostFrequent.map(num => (<li key={num}>{num}</li>))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Prediksi Angka Berikutnya:</h2>
        <p className="text-2xl">{predicted.join(', ')}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Grafik Persentase Kemunculan:</h2>
        <div className="space-y-2">
          {Object.entries(freqData).map(([digit, value]) => (
            <div key={digit} className="flex items-center">
              <div className="w-1/5">{digit}</div>
              <div className="flex-1 bg-gray-700">
                <div className="bg-white text-black px-1" style={{ width: `${value}%` }}>
                  {value}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const freq = { '0': 8, '1': 15, '2': 12, '3': 18, '4': 9, '5': 14, '6': 7, '7': 11, '8': 5, '9': 6 };
  const mostFrequent = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([num]) => num);
  const predicted = [23, 45, 67];
  return { props: { mostFrequent, predicted, freqData: freq } };
}
