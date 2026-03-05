import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-stone-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/80 to-stone-900" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-white/80">Refleksi Rohani & Pengembangan Diri</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          Retret
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Ruang tenang untuk merenung, menemukan inspirasi, 
          dan bertumbuh menjadi versi terbaik diri Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/renungan"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-full font-medium text-sm hover:bg-stone-100 transition-colors"
          >
            Mulai Membaca
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/motivasi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Artikel Motivasi
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
