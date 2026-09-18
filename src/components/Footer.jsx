import { Link } from 'react-router-dom';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Shop', href: '/shop' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/zakarie16' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583070639514' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@sabcah.online.mark' },
  { name: 'WhatsApp', href: 'https://wa.me/252672338937' },
];

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-white font-black text-lg shadow-lg shadow-accent-500/30">
                S
              </div>
              <div>
                <span className="text-lg font-black tracking-tight">SABCAH</span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                  Online Marketing
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Alaabaha China, USA iyo suuqyada caalamiga ah: jumlad iyo tafaariiqba.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/252672338937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <WhatsAppIcon size={14} className="text-whatsapp" />
                  +252 672 338 937
                </a>
              </li>
              <li>
                <a href="tel:+252638587502" className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
                  <Phone size={14} />
                  063 858 7502
                </a>
              </li>
              <li>
                <a href="mailto:onlinesabcah@gmail.com" className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
                  <Mail size={14} />
                  onlinesabcah@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; 2026 SABCAH Online Marketing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-white/30 transition-colors hover:text-white/60">
              Privacy
            </Link>
            <span className="text-white/10">|</span>
            <p className="text-xs text-white/30 font-medium italic">
              We Order. We Deliver. You Relax.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
