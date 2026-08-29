import { useInView } from '../hooks/useInView';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { Send } from 'lucide-react';

export default function WhatsAppCta() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden gradient-accent py-20 lg:py-24"
    >
      {/* Decorative */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-white/10 blur-2xl" />
              <img
                src="/pachage2.jpeg"
                alt="SABCAH order being prepared"
                className="relative rounded-[2rem] object-cover w-full aspect-[4/3] ring-1 ring-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-whatsapp text-white">
                    <Send size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-navy-900">Ready to Ship</p>
                    <p className="text-xs text-navy-500">Ship with SABCAH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Send size={24} className="text-white" />
            </div>
            <h2 className="text-display text-white">
              Ma Haysaa Alaab?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-lg">
              Noo soo dir sawirka, link-ga, ama magaca. Waxaan kuu hubinaynaa qiimaha.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20order%20a%20product."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-accent-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
              >
                <WhatsAppIcon size={22} className="text-whatsapp" />
                Dalbo Hadda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
