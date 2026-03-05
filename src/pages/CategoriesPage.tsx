import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Grid3X3, Clock, ArrowRight, FolderOpen, 
  Sparkles, BookOpen, Heart, Users, Brain
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { articles, categories, getArticlesByCategory } from '@/data/articles';

const categoryIcons: Record<string, React.ElementType> = {
  'motivasi': Sparkles,
  'renungan': BookOpen,
  'self-improvement': Brain,
  'mindfulness': Heart,
  'relasi': Users,
};

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-all hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2 py-1 rounded ${article.category.color} text-white`}>
            {article.category.name}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-dark group-hover:text-secondary transition-colors mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-dark/60 text-sm line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-dark/70">{article.author.name}</span>
          </div>
          <span className="text-dark/50 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime} menit
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategoryCard({ category, articleCount }: { category: typeof categories[0]; articleCount: number }) {
  const Icon = categoryIcons[category.slug] || FolderOpen;
  
  return (
    <Link
      to={`/kategori/${category.slug}`}
      className="group block bg-white rounded-2xl p-6 hover:shadow-card transition-all hover:-translate-y-1"
    >
      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-display text-dark mb-2">{category.name}</h3>
      <p className="text-dark/60 text-sm mb-4 line-clamp-2">{category.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-dark/50">{articleCount} artikel</span>
        <ArrowRight className="w-4 h-4 text-dark/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

export default function CategoriesPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [slug]);

  // If no slug, show all categories
  if (!slug) {
    return (
      <>
        <SEO
          title="Kategori"
          description="Jelajahi artikel berdasarkan kategori: Motivasi, Renungan, Self-Improvement, Mindfulness, dan Relasi."
          keywords={['kategori blog', 'topik artikel', 'motivasi', 'renungan', 'self improvement']}
          url="/kategori"
        />

        <div className="min-h-screen bg-white pt-24 pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Grid3X3 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">Kategori</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-display text-dark mb-4">
                Jelajahi <span className="text-secondary">Topik</span> Favorit Anda
              </h1>
              <p className="text-dark/60 text-lg">
                Pilih kategori yang sesuai dengan minat Anda dan temukan artikel yang menginspirasi.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const articleCount = articles.filter(a => a.category.id === category.id).length;
                return (
                  <div
                    key={category.id}
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CategoryCard category={category} articleCount={articleCount} />
                  </div>
                );
              })}
            </div>

            {/* Featured Articles */}
            <div className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display text-dark">Artikel Populer</h2>
                <Link to="/blog" className="text-secondary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Lihat Semua
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.slice(0, 4).map((article, idx) => (
                  <div
                    key={article.id}
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${(categories.length + idx) * 100}ms` }}
                  >
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Show specific category
  const category = categories.find(c => c.slug === slug);
  const categoryArticles = getArticlesByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-display text-dark mb-4">Kategori Tidak Ditemukan</h1>
          <p className="text-dark/60 mb-6">Maaf, kategori yang Anda cari tidak tersedia.</p>
          <Link to="/kategori" className="btn-primary">
            Lihat Semua Kategori
          </Link>
        </div>
      </div>
    );
  }

  const Icon = categoryIcons[category.slug] || FolderOpen;

  return (
    <>
      <SEO
        title={`Kategori ${category.name}`}
        description={category.description}
        keywords={[category.name, 'artikel', 'blog', 'pengembangan diri']}
        url={`/kategori/${category.slug}`}
      />

      <div className="min-h-screen bg-white pt-24 pb-20">
        {/* Header */}
        <div className="bg-light py-16 mb-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-dark/50 mb-4">
              <Link to="/kategori" className="hover:text-secondary transition-colors">
                Kategori
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-dark">{category.name}</span>
            </div>

            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-display text-dark mb-2">
                  {category.name}
                </h1>
                <p className="text-dark/60 max-w-xl">{category.description}</p>
                <div className="mt-4 text-sm text-dark/50">
                  {categoryArticles.length} artikel tersedia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {categoryArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article, idx) => (
                <div
                  key={article.id}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FolderOpen className="w-16 h-16 text-dark/20 mx-auto mb-4" />
              <h3 className="text-xl font-display text-dark mb-2">Belum Ada Artikel</h3>
              <p className="text-dark/60 mb-6">Kategori ini belum memiliki artikel.</p>
              <Link to="/blog" className="btn-primary">
                Jelajahi Blog
              </Link>
            </div>
          )}
        </div>

        {/* Other Categories */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-2xl font-display text-dark mb-8">Kategori Lainnya</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(c => c.id !== category.id)
              .map((otherCategory) => {
                const OtherIcon = categoryIcons[otherCategory.slug] || FolderOpen;
                const count = articles.filter(a => a.category.id === otherCategory.id).length;
                return (
                  <Link
                    key={otherCategory.id}
                    to={`/kategori/${otherCategory.slug}`}
                    className="flex items-center gap-3 p-4 bg-light rounded-xl hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className={`w-10 h-10 ${otherCategory.color} rounded-lg flex items-center justify-center`}>
                      <OtherIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-dark text-sm">{otherCategory.name}</div>
                      <div className="text-xs text-dark/50">{count} artikel</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
