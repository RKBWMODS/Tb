import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Loading() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => { router.push('/home'); }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-48 h-48">
        <img src="/img/hacker.png" alt="Hacker" className="relative z-10 w-full h-full object-cover" />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-500 border-l-red-500 border-b-green-500 border-r-white animate-spin"
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
