import { Link } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';

const footerLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Renungan', href: '/renungan' },
  { name: 'Motivasi', href: '/motivasi' },
  { name: 'Tokoh Inspiratif', href: '/tokoh' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-serif font-medium text-stone-800">
                Retret
              </span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Ruang tenang untuk merenung, menemukan inspirasi, 
              dan bertumbuh menjadi versi terbaik diri Anda.
            </p>
            <p className="text-stone-400 text-xs">
              © {new Date().getFullYear()} Retret. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-stone-800 mb-4 uppercase tracking-wider">
              Menu
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-stone-500 hover:text-stone-800 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-medium text-stone-800 mb-4 uppercase tracking-wider">
              Tentang
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Retret adalah blog refleksi rohani dan pengembangan diri 
              yang berisi renungan harian, motivasi hidup, dan kisah 
              tokoh inspiratif.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-400 text-xs flex items-center justify-center gap-1">
            Dibuat dengan <Heart className="w-3 h-3 text-red-400 fill-current" /> untuk inspirasi
          </p>
        </div>
      </div>
    </footer>
  );
}
