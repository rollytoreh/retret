import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import type { Post } from '@/data/posts';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
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

  if (variant === 'featured') {
    return (
      <article className="group">
        <Link to={`/post/${post.slug}`} className="block">
          <div className="bg-stone-50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:bg-stone-100">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              <span className="text-sm text-stone-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} menit
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4 group-hover:text-stone-600 transition-colors leading-tight">
              {post.title}
            </h2>

            <p className="text-stone-600 mb-6 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-sm font-medium text-stone-600">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-800">{post.author}</p>
                  <p className="text-xs text-stone-400">{post.date}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 group-hover:text-stone-800 transition-colors">
                Baca
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group">
        <Link to={`/post/${post.slug}`} className="block">
          <div className="flex items-start gap-4 py-4 border-b border-stone-100 transition-colors hover:bg-stone-50/50 px-2 -mx-2 rounded-lg">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
                <span className="text-xs text-stone-400">{post.readTime} menit</span>
              </div>
              <h3 className="font-serif text-lg text-stone-800 group-hover:text-stone-600 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-300 flex-shrink-0 mt-6 transition-colors group-hover:text-stone-500" />
          </div>
        </Link>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group">
      <Link to={`/post/${post.slug}`} className="block">
        <div className="bg-white rounded-2xl border border-stone-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-stone-200">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </span>
            <span className="text-sm text-stone-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} menit
            </span>
          </div>

          <h2 className="text-xl font-serif text-stone-800 mb-3 group-hover:text-stone-600 transition-colors leading-snug">
            {post.title}
          </h2>

          <p className="text-stone-600 text-sm mb-5 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600">
                {post.author.charAt(0)}
              </div>
              <span className="text-sm text-stone-500">{post.author}</span>
            </div>

            <span className="text-xs text-stone-400">{post.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
