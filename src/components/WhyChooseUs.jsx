import { useInView } from '../hooks/useInView';
import { Shield, HandHelping, Globe, Package, MessageCircle } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Kalsooni', text: 'Adeeg hufan oo la isku halayn karo', color: 'bg-blue-500' },
  { icon: HandHelping, title: 'Fudayd', text: 'Adiga keliya ma la tacaasho', color: 'bg-emerald-500' },
  { icon: Globe, title: 'Doorasho', text: 'Alaabooyin badan oo kala duwan', color: 'bg-violet-500' },
  { icon: Package, title: 'Tafaariiq & Jumlo', text: 'Hal alaab ama tiro badan', color: 'bg-amber-500' },
  { icon: MessageCircle, title: 'WhatsApp', text: 'Si fudud noogala xiriir', color: 'bg-whatsapp' },
];

export default function WhyChooseUs() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label justify-center">KHIISKA</p>
          <h2 className="text-display text-navy-900">
            Maxaad <span className="text-accent-500">SABCAH</span> u Dooranaysaa?
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`group rounded-3xl bg-navy-50/50 p-6 text-center transition-all duration-600 hover:bg-navy-900 ${
                  gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${value.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-900 group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="mt-1 text-xs text-navy-500 group-hover:text-white/50 leading-relaxed transition-colors">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
