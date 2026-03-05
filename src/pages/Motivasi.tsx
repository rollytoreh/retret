import { Sparkles } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { getPostsByCategory } from '@/data/posts';

export default function Motivasi() {
  const motivasiPosts = getPostsByCategory('motivasi');

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <div className="bg-emerald-50/50 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider">
              Kategori
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            Motivasi
          </h1>
          <p className="text-stone-500 max-w-xl leading-relaxed">
            Artikel pengembangan diri untuk membangun kebiasaan baik, 
            meningkatkan produktivitas, dan mencapai tujuan hidup Anda.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {motivasiPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motivasiPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 text-stone-200 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-stone-600 mb-2">
              Belum Ada Artikel
            </h3>
            <p className="text-stone-400">
              Artikel motivasi akan segera hadir.
            </p>
          </div>
        )}
      </div>

      {/* Quote Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-serif text-white mb-6 leading-relaxed">
            "Keberhasilan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci keberhasilan. 
            Jika Anda mencintai apa yang Anda lakukan, Anda akan berhasil."
          </blockquote>
          <cite className="text-stone-400 not-italic">
            — Albert Schweitzer
          </cite>
        </div>
      </div>
    </div>
  );
}
