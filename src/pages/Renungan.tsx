import { BookOpen } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { getPostsByCategory } from '@/data/posts';

export default function Renungan() {
  const renunganPosts = getPostsByCategory('renungan');

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <div className="bg-amber-50/50 border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-700" />
            </div>
            <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">
              Kategori
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            Renungan
          </h1>
          <p className="text-stone-500 max-w-xl leading-relaxed">
            Refleksi rohani harian untuk memperkuat iman, menemukan makna hidup, 
            dan menginspirasi langkah-langkah Anda setiap hari.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {renunganPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renunganPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-stone-200 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-stone-600 mb-2">
              Belum Ada Artikel
            </h3>
            <p className="text-stone-400">
              Artikel renungan akan segera hadir.
            </p>
          </div>
        )}
      </div>

      {/* Quote Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-serif text-white mb-6 leading-relaxed">
            "Orang yang menanti-nantikan TUHAN akan mendapat kekuatan baru; 
            mereka akan naik sayap seperti elang."
          </blockquote>
          <cite className="text-stone-400 not-italic">
            — Yesaya 40:31
          </cite>
        </div>
      </div>
    </div>
  );
}
