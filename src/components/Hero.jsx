import { useInView } from '../hooks/useInView';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { ArrowRight, Globe, Truck, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const stats = [
    { icon: Globe, value: '6+', label: 'Dalal' },
    { icon: MapPin, value: 'Gaarsiin Adag', label: 'Dhamaan' },
    { icon: Clock, value: 'Jawaab Degdeg ah', label: '24/7' },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden gradient-navy"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Gradient Orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-500/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="container-custom relative z-10 py-14 lg:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:h-[calc(100vh-6rem)]">
          {/* Left: Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Globe size={14} className="text-accent-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                China · USA · Caalamka
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-hero text-white">
                Alaab kasta oo aad rabto,
                <br />
                <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                  waa laguu keeni karaa.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <div
              className={`mt-5 max-w-xl transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-hero-sub text-white/60">
                Noo soo dir sawirka ama link-ga alaabta. Waxaan kuu dalbannaa si fudud,
                waxaana kuugu gaarsiinaynaa meesha aad joogto.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a href="/contact#order" className="btn-whatsapp">
                <WhatsAppIcon size={18} />
                Dalbo Hadda
              </a>
              <a href="#how-it-works" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10">
                Sida Loo Dalbado
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Trust Strip */}
            <div
              className={`mt-8 flex flex-wrap gap-x-8 gap-y-3 transition-all duration-700 delay-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <stat.icon size={16} className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-white leading-none">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/50">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
              <img
                src="/ShIpping Truck.jpeg"
                alt="SABCAH shipping truck delivering international orders"
                className="relative w-full aspect-[3/4] object-cover rounded-[2rem] ring-1 ring-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-4 inset-x-2 flex justify-center">
                <div className="rounded-2xl bg-white px-3.5 py-3 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 text-white">
                      <Truck size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-navy-900 leading-none">We Deliver.</p>
                      <p className="mt-0.5 text-xs text-navy-500">You Relax.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
