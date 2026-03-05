import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, User } from 'lucide-react';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import { getLatestPosts, getPostsByCategory } from '@/data/posts';

export default function Home() {
  const latestPosts = getLatestPosts(3);
  const renunganPosts = getPostsByCategory('renungan').slice(0, 2);
  const motivasiPosts = getPostsByCategory('motivasi').slice(0, 2);
  const tokohPosts = getPostsByCategory('tokoh').slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Latest Posts Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-2">
                Artikel Terbaru
              </h2>
              <p className="text-stone-500 text-sm">
                Temukan inspirasi untuk hari Anda
              </p>
            </div>
            <Link
              to="/renungan"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-3">
              Jelajahi Kategori
            </h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Pilih topik yang sesuai dengan kebutuhan spiritual dan pengembangan diri Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Renungan */}
            <div className="bg-white rounded-2xl p-8 border border-stone-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-3">Renungan</h3>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                Refleksi rohani harian untuk memperkuat iman dan menemukan kedamaian batin.
              </p>
              <div className="space-y-3 mb-6">
                {renunganPosts.map((post) => (
                  <PostCard key={post.id} post={post} variant="compact" />
                ))}
              </div>
              <Link
                to="/renungan"
                className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors"
              >
                Lihat Semua Renungan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Motivasi */}
            <div className="bg-white rounded-2xl p-8 border border-stone-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-3">Motivasi</h3>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                Artikel pengembangan diri untuk membangun kebiasaan baik dan mencapai tujuan.
              </p>
              <div className="space-y-3 mb-6">
                {motivasiPosts.map((post) => (
                  <PostCard key={post.id} post={post} variant="compact" />
                ))}
              </div>
              <Link
                to="/motivasi"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Lihat Semua Motivasi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tokoh Inspiratif */}
            <div className="bg-white rounded-2xl p-8 border border-stone-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-3">Tokoh Inspiratif</h3>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                Kisah tokoh-tokoh dunia yang menginspirasi melalui perjalanan hidup mereka.
              </p>
              <div className="space-y-3 mb-6">
                {tokohPosts.map((post) => (
                  <PostCard key={post.id} post={post} variant="compact" />
                ))}
              </div>
              <Link
                to="/tokoh"
                className="inline-flex items-center gap-1 text-sm font-medium text-indigo-700 hover:text-indigo-800 transition-colors"
              >
                Lihat Semua Tokoh
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Mulai Perjalanan Anda Hari Ini
          </h2>
          <p className="text-stone-500 mb-8 max-w-lg mx-auto leading-relaxed">
            Setiap hari adalah kesempatan baru untuk tumbuh, belajar, dan menjadi 
            versi terbaik dari diri Anda. Temukan inspirasi di Retret.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/renungan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium text-sm hover:bg-stone-700 transition-colors"
            >
              Baca Renungan
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/motivasi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-800 rounded-full font-medium text-sm hover:bg-stone-200 transition-colors"
            >
              Artikel Motivasi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
