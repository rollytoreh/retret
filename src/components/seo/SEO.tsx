import { useEffect } from 'react';
import type { SEOProps } from '@/types/blog';

export function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/hero-bg.jpg',
  url = '',
  type = 'website',
  publishedAt,
  author
}: SEOProps) {
  const siteUrl = 'https://pengembangandiri.id';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = title ? `${title} | PengembanganDiri` : 'PengembanganDiri - Transformasi Dimulai dari Dalam';

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImage, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'PengembanganDiri', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);
    
    if (type === 'article' && publishedAt) {
      updateMetaTag('article:published_time', publishedAt, true);
      if (author) {
        updateMetaTag('article:author', author, true);
      }
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
  }, [fullTitle, description, keywords, fullImage, fullUrl, type, publishedAt, author]);

  return null;
}

export function ArticleStructuredData({ article }: { article: any }) {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      image: `https://pengembangandiri.id${article.coverImage}`,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: {
        '@type': 'Person',
        name: article.author.name,
        image: `https://pengembangandiri.id${article.author.avatar}`
      },
      publisher: {
        '@type': 'Organization',
        name: 'PengembanganDiri',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pengembangandiri.id/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://pengembangandiri.id/blog/${article.slug}`
      }
    };

    let script = document.getElementById('article-structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'article-structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      if (script) script.remove();
    };
  }, [article]);

  return null;
}

export function OrganizationStructuredData() {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'PengembanganDiri',
      url: 'https://pengembangandiri.id',
      logo: 'https://pengembangandiri.id/logo.png',
      description: 'Platform pengembangan diri untuk transformasi pribadi.',
      sameAs: [
        'https://instagram.com/pengembangandiri',
        'https://linkedin.com/company/pengembangandiri'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-812-3456-7890',
        contactType: 'customer service',
        email: 'hello@pengembangandiri.id'
      }
    };

    let script = document.getElementById('organization-structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'organization-structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      if (script) script.remove();
    };
  }, []);

  return null;
}
