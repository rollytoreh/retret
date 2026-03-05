import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import { getPostBySlug, posts } from '@/data/posts';

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center px-6">
          <h1 className="text-3xl font-serif text-stone-800 mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-stone-500 mb-6">
            Maaf, artikel yang Anda cari tidak tersedia.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium text-sm hover:bg-stone-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const categoryLabels = {
    renungan: 'Renungan',
    motivasi: 'Motivasi',
    tokoh: 'Tokoh Inspiratif'
  };

  const categoryColors = {
    renungan: 'bg-amber-100 text-amber-800',
    motivasi: 'bg-emerald-100 text-emerald-800',
    tokoh: 'bg-indigo-100 text-indigo-800'
  };

  const categoryBgColors = {
    renungan: 'bg-amber-50/50',
    motivasi: 'bg-emerald-50/50',
    tokoh: 'bg-indigo-50/50'
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Kembali</span>
            </button>

            <div className="flex items-center gap-2">
              <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`${categoryBgColors[post.category]} py-16`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </span>
            <span className="text-sm text-stone-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} menit baca
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-sm font-medium text-stone-600">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-stone-800">{post.author}</p>
              <p className="text-xs text-stone-400">{post.date}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-stone prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-serif text-stone-800 mb-8">
              Artikel Terkait
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/post/${relatedPost.slug}`}
                  className="group bg-white rounded-xl p-6 border border-stone-100 hover:shadow-md transition-all"
                >
                  <span className={`text-xs font-medium px-2 py-1 rounded ${categoryColors[relatedPost.category]}`}>
                    {categoryLabels[relatedPost.category]}
                  </span>
                  <h3 className="font-serif text-lg text-stone-800 mt-3 mb-2 group-hover:text-stone-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-stone-800 mb-4">
            Ingin Lebih Banyak Inspirasi?
          </h2>
          <p className="text-stone-500 mb-8">
            Jelajahi koleksi artikel lainnya di Retret.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/renungan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium text-sm hover:bg-stone-700 transition-colors"
            >
              Renungan
            </Link>
            <Link
              to="/motivasi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-800 rounded-full font-medium text-sm hover:bg-stone-200 transition-colors"
            >
              Motivasi
            </Link>
            <Link
              to="/tokoh"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-800 rounded-full font-medium text-sm hover:bg-stone-200 transition-colors"
            >
              Tokoh Inspiratif
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
