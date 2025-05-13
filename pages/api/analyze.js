
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { url } = req.body;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const textContent = document.body.textContent;
    const match = textContent.match(/\b\d{2,4}\b/g);
    const numbers = match ? Array.from(new Set(match)).slice(-10) : [];

    const prediksi = {
      '2D': ('' + Math.floor(Math.random() * 100)).padStart(2, '0'),
      '3D': ('' + Math.floor(Math.random() * 1000)).padStart(3, '0'),
      '4D': ('' + Math.floor(Math.random() * 10000)).padStart(4, '0')
    };

    res.status(200).json({ nomer: numbers, prediksi });
  } catch (e) {
    res.status(500).json({ error: 'Gagal mengambil atau memproses halaman.' });
  }
}
