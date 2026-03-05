import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookHeart, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { articles, getArticlesByType } from '@/data/articles';

function RenunganCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/blog/${article.slug}`}
        className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card transition-all hover:-translate-y-1"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-display text-dark group-hover:text-secondary transition-colors mb-3 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-dark/60 text-sm line-clamp-3 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-dark/70">{article.author.name}</span>
            </div>
            <span className="text-sm text-dark/50 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} menit
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function RenunganPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renunganArticles = getArticlesByType('renungan');
  const todayRenungan = renunganArticles[0];
  const otherRenungan = renunganArticles.slice(1);

  return (
    <>
      <SEO
        title="Renungan Harian"
        description="Renungan rohari harian untuk memperkuat iman, menemukan kedamaian batin, dan menginspirasi hidup Anda."
        keywords={['renungan harian', 'renungan rohani', 'devosi', 'iman', 'inspirasi kristen']}
        url="/renungan"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div ref={heroRef} className="relative bg-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-2xl">
              <div 
                className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <BookHeart className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Renungan Harian</span>
              </div>
              
              <h1 
                className={`text-4xl lg:text-6xl font-display text-white mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                Temukan <span className="text-primary">Kedamaian</span> dalam Firman
              </h1>
              
              <p 
                className={`text-white/70 text-lg mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Renungan harian untuk memperkuat iman, menemukan makna hidup, 
                dan menginspirasi langkah-langkah Anda setiap hari.
              </p>

              <div 
                className={`flex flex-wrap gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <Link to={`/blog/${todayRenungan?.slug}`} className="btn-primary">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Baca Renungan Hari Ini
                </Link>
                <Link to="/blog" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white hover:text-dark">
                  Jelajahi Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Devotion */}
        {todayRenungan && (
          <section className="py-16 lg:py-24">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display text-dark">Renungan Hari Ini</h2>
              </div>

              <Link
                to={`/blog/${todayRenungan.slug}`}
                className="group block bg-gradient-to-br from-light to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={todayRenungan.coverImage}
                      alt={todayRenungan.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mb-4">
                      <Sparkles className="w-4 h-4" />
                      Renungan Pilihan
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-display text-dark group-hover:text-secondary transition-colors mb-4">
                      {todayRenungan.title}
                    </h3>
                    <p className="text-dark/60 mb-6 line-clamp-3">
                      {todayRenungan.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={todayRenungan.author.avatar}
                        alt={todayRenungan.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-dark">{todayRenungan.author.name}</div>
                        <div className="text-sm text-dark/50">{todayRenungan.readTime} menit baca</div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center text-secondary font-medium group-hover:gap-2 transition-all">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* All Devotions Grid */}
        <section className="py-16 bg-light">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display text-dark">Koleksi Renungan</h2>
              <span className="text-dark/50 text-sm">
                {renunganArticles.length} renungan tersedia
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRenungan.map((article, index) => (
                <RenunganCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
            <BookHeart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-display text-dark mb-4">
              Dapatkan Renungan Harian
            </h2>
            <p className="text-dark/60 mb-8">
              Berlangganan untuk menerima renungan inspiratif langsung di inbox Anda setiap pagi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-5 py-3 rounded-full border border-light bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-primary"
              />
              <button className="btn-primary whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
