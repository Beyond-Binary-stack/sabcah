import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function FloatingWhatsApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/contact') {
      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact#order');
    }
  };

  return (
    <a
      href="/contact#order"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30 transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Order via the contact form"
    >
      <ShoppingCart size={26} />

      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-30" />
    </a>
  );
}
