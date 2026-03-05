import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Clock, Share2, Bookmark, Heart, 
  Twitter, Linkedin, Facebook, Link as LinkIcon,
  ChevronRight
} from 'lucide-react';
import { SEO, ArticleStructuredData } from '@/components/seo/SEO';
import { getArticleBySlug, getRelatedArticles } from '@/data/articles';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = article ? getRelatedArticles(article, 3) : [];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-display text-dark mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-dark/60 mb-6">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link to="/blog" className="btn-primary">
            Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href);
        setShowShareMenu(false);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords={article.tags}
        image={article.coverImage}
        url={`/blog/${article.slug}`}
        type="article"
        publishedAt={article.publishedAt}
        author={article.author.name}
      />
      <ArticleStructuredData article={article} />

      <div className="min-h-screen bg-white">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-light z-50">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-light">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-dark/60 hover:text-dark transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Kembali</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2.5 rounded-full transition-all ${
                    isBookmarked ? 'bg-primary text-dark' : 'bg-light text-dark/60 hover:bg-dark/10'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-2.5 rounded-full bg-light text-dark/60 hover:bg-dark/10 transition-all"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>

                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-light p-2 min-w-[160px]">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-light transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                        <span className="text-sm">Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-light transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="text-sm">Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-light transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-light transition-colors"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span className="text-sm">Salin Link</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Image */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div 
            className={`relative overflow-hidden rounded-3xl aspect-[21/9] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-[720px] mx-auto px-4 sm:px-6 py-12" ref={contentRef}>
          {/* Category & Meta */}
          <div 
            className={`flex flex-wrap items-center gap-3 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Link
              to={`/kategori/${article.category.slug}`}
              className={`text-xs font-medium px-3 py-1 rounded-full ${article.category.color} text-white`}
            >
              {article.category.name}
            </Link>
            <span className="text-sm text-dark/50 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} menit baca
            </span>
          </div>

          {/* Title */}
          <h1 
            className={`text-3xl sm:text-4xl lg:text-5xl font-display text-dark leading-tight mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {article.title}
          </h1>

          {/* Author */}
          <div 
            className={`flex items-center gap-4 pb-8 mb-8 border-b border-light transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-dark">{article.author.name}</div>
              <div className="text-sm text-dark/50">{article.author.bio}</div>
              <div className="text-sm text-dark/40 mt-1">
                {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`prose prose-lg max-w-none transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div 
            className={`flex flex-wrap gap-2 mt-12 pt-8 border-t border-light transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {article.tags.map((tag, index) => (
              <Link
                key={index}
                to={`/kategori?tag=${tag}`}
                className="px-4 py-2 bg-light rounded-full text-sm text-dark/70 hover:bg-primary hover:text-dark transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Like Button */}
          <div 
            className={`flex items-center justify-center gap-4 mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                isLiked 
                  ? 'bg-red-50 text-red-500' 
                  : 'bg-light text-dark/60 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{isLiked ? 'Disukai' : 'Suka'}</span>
            </button>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-light py-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-display text-dark mb-8">Artikel Terkait</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-card transition-all hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedArticle.coverImage}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${relatedArticle.category.color} text-white`}>
                        {relatedArticle.category.name}
                      </span>
                      <h3 className="font-display text-dark mt-3 mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-dark/50">
                        <span>{relatedArticle.readTime} menit baca</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-display text-dark mb-4">
              Ingin Lebih Banyak Inspirasi?
            </h2>
            <p className="text-dark/60 mb-6">
              Jelajahi koleksi artikel motivasi dan renungan kami yang lain.
            </p>
            <Link to="/blog" className="btn-primary inline-flex">
              Lihat Semua Artikel
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
