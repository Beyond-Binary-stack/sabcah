import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Shop', href: '/shop' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-navy-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-black text-lg shadow-lg">
              S
            </div>
            <div className="hidden sm:block">
              <span className={`text-lg font-black tracking-tight ${isHome && !isScrolled ? 'text-white' : 'text-navy-900'} transition-colors`}>
                SABCAH
              </span>
              <span className={`block text-[9px] font-bold uppercase tracking-[0.25em] ${isHome && !isScrolled ? 'text-white/50' : 'text-navy-400'} transition-colors`}>
                Online Marketing
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                  location.pathname === link.href
                    ? 'text-accent-500 bg-accent-500/10'
                    : isHome && !isScrolled
                      ? 'text-white/70 hover:text-white hover:bg-white/10'
                      : 'text-navy-500 hover:text-navy-900 hover:bg-navy-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+252672338937"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isHome && !isScrolled ? 'text-white/60 hover:text-white' : 'text-navy-400 hover:text-navy-700'
              }`}
            >
              <Phone size={15} />
              <span className="hidden xl:inline">063 858 7502</span>
            </a>
            <a
              href="https://wa.me/252672338937"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !py-2.5 !px-5 !text-xs"
            >
              <WhatsAppIcon size={16} />
              Order Now
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/252672338937"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg"
            >
              <WhatsAppIcon size={18} />
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-navy-700 hover:bg-navy-50'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom border-t border-navy-100 bg-white pb-4 pt-2">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  location.pathname === link.href
                    ? 'text-accent-500 bg-accent-500/5'
                    : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+252672338937"
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-navy-600 hover:bg-navy-50"
            >
              <Phone size={15} />
              063 858 7502
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
