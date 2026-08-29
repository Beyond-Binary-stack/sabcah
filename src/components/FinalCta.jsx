import { useInView } from '../hooks/useInView';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { Camera, Link2, Type, Hash, Phone } from 'lucide-react';

const instructions = [
  { icon: Camera, label: 'Sawir' },
  { icon: Link2, label: 'Link' },
  { icon: Type, label: 'Magac' },
  { icon: Hash, label: 'Tiro' },
];

export default function FinalCta() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="section-padding bg-navy-50/30">
      <div className="container-custom">
        <div
          ref={ref}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label justify-center">BILLOW</p>
          <h2 className="text-display text-navy-900">
            Ma <span className="text-accent-500">Rabtaa</span> inaad Dalabka Bilowdo?
          </h2>

          <p className="mt-4 text-navy-500">Noo soo dir:</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {instructions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-full bg-white px-4 py-2.5 ring-1 ring-navy-100/50 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <Icon size={16} className="text-accent-500" />
                  <span className="text-sm font-semibold text-navy-700">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <WhatsAppIcon size={18} />
              WhatsApp: +252 672 338 937
            </a>
            <a
              href="tel:+252638587502"
              className="btn-secondary w-full sm:w-auto"
            >
              <Phone size={18} />
              Call: 063 858 7502
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
