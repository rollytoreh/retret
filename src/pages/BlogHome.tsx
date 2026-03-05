import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, BookOpen, Sparkles } from 'lucide-react';
import { SEO, OrganizationStructuredData } from '@/components/seo/SEO';
import { articles, categories, getFeaturedArticles } from '@/data/articles';

function ArticleCard({ article, featured = false }: { article: typeof articles[0]; featured?: boolean }) {
  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <Link to={`/blog/${article.slug}`} className="block">
        <div className={`relative overflow-hidden rounded-2xl mb-4 ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
      
      <div className="flex items-center gap-3 mb-3">
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

      <Link to={`/blog/${article.slug}`}>
        <h3 className={`font-display text-dark group-hover:text-secondary transition-colors leading-tight mb-3 ${
          featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          {article.title}
        </h3>
      </Link>

      <p className={`text-dark/60 mb-4 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
        {article.excerpt}
      </p>

      <div className="flex items-center gap-3">
        <img
          src={article.author.avatar}
          alt={article.author.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-dark">{article.author.name}</span>
          <span className="text-dark/30">·</span>
          <span className="text-dark/50">
            {new Date(article.publishedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    </article>
  );
}

function FeaturedArticle({ article }: { article: typeof articles[0] }) {
  return (
    <article className="group relative">
      <Link to={`/blog/${article.slug}`} className="block">
        <div className="relative overflow-hidden rounded-3xl aspect-[21/9]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                FEATURED
              </span>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${article.category.color} text-white`}>
                {article.category.name}
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-display text-white mb-3 max-w-3xl group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            
            <p className="text-white/80 text-base lg:text-lg mb-4 max-w-2xl line-clamp-2">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <div className="font-medium text-white">{article.author.name}</div>
                <div className="text-sm text-white/60">
                  {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })} · {article.readTime} menit baca
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogHome() {
  const [activeTab, setActiveTab] = useState<'all' | 'motivasi' | 'renungan'>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredArticles = getFeaturedArticles();
  const mainFeatured = featuredArticles[0];
  const secondaryFeatured = featuredArticles.slice(1, 3);

  const filteredArticles = activeTab === 'all' 
    ? articles.filter(a => !a.featured)
    : articles.filter(a => a.type === activeTab);

  return (
    <>
      <SEO
        title="Blog - Artikel Motivasi & Renungan"
        description="Kumpulan artikel motivasi, renungan rohani, dan tulisan pengembangan diri untuk transformasi pribadi Anda."
        keywords={['blog motivasi', 'renungan harian', 'pengembangan diri', 'self improvement', 'inspirasi']}
        url="/blog"
      />
      <OrganizationStructuredData />

      <div className="min-h-screen bg-white pt-24 pb-20">
        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">Blog</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-display text-dark mb-4">
                Temukan <span className="text-secondary">Inspirasi</span> Harian
              </h1>
              <p className="text-dark/60 text-lg max-w-xl">
                Artikel motivasi, renungan rohani, dan tulisan pengembangan diri untuk perjalanan transformasi Anda.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'motivasi', label: 'Motivasi' },
                { id: 'renungan', label: 'Renungan' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-dark text-white'
                      : 'bg-light text-dark hover:bg-dark/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Section */}
        {activeTab === 'all' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            {mainFeatured && <FeaturedArticle article={mainFeatured} />}
            
            {secondaryFeatured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {secondaryFeatured.map((article) => (
                  <ArticleCard key={article.id} article={article} featured />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Categories */}
        <div className="bg-light py-12 mb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display text-dark mb-8">Jelajahi Kategori</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/kategori/${category.slug}`}
                  className="group bg-white rounded-2xl p-5 hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-dark mb-1">{category.name}</h3>
                  <p className="text-sm text-dark/50 line-clamp-2">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display text-dark">
              {activeTab === 'all' ? 'Artikel Terbaru' : 
               activeTab === 'motivasi' ? 'Artikel Motivasi' : 'Renungan Rohani'}
            </h2>
            <Link 
              to="/kategori" 
              className="text-secondary font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div
                key={article.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-dark rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-display text-white mb-4">
              Dapatkan Inspirasi Langsung di Inbox Anda
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Berlangganan newsletter kami untuk menerima artikel motivasi dan renungan harian.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
              />
              <button className="btn-primary whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
