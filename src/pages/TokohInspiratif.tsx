import { User } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { getPostsByCategory } from '@/data/posts';

export default function TokohInspiratif() {
  const tokohPosts = getPostsByCategory('tokoh');

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <div className="bg-indigo-50/50 border-b border-indigo-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-indigo-700" />
            </div>
            <span className="text-sm font-medium text-indigo-700 uppercase tracking-wider">
              Kategori
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            Tokoh Inspiratif
          </h1>
          <p className="text-stone-500 max-w-xl leading-relaxed">
            Kisah tokoh-tokoh dunia yang menginspirasi melalui perjalanan hidup, 
            tantangan yang dihadapi, dan pencapaian mereka.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {tokohPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokohPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <User className="w-16 h-16 text-stone-200 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-stone-600 mb-2">
              Belum Ada Artikel
            </h3>
            <p className="text-stone-400">
              Kisah tokoh inspiratif akan segera hadir.
            </p>
          </div>
        )}
      </div>

      {/* Quote Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl font-serif text-white mb-6 leading-relaxed">
            "Pemimpin terbaik adalah yang kepeduliannya untuk orang lain 
            melebihi kepeduliannya untuk dirinya sendiri."
          </blockquote>
          <cite className="text-stone-400 not-italic">
            — Nelson Mandela
          </cite>
        </div>
      </div>
    </div>
  );
}
