import { useInView } from '../hooks/useInView';
import { MapPin, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'MAHAD',
    city: 'HARGEISA',
    text: 'Waxaan u dalabnay alaab uu u baahnaa. Waxaan si joogto ah ula soconnay xaaladda ilaa alaabtiisii si nabad ah u soo gaadhay.',
  },
  {
    name: "MAA'IDA",
    city: 'GAROWE',
    text: 'Waxaan ka caawinay dalabyo kala duwan, waxaana alaabihii ay dalbatay ku gaarsiinnay Garowe.',
  },
  {
    name: 'SALMA',
    city: 'JIGJIGA',
    text: 'Waxay naga dalbatay dharka carruurteeda ee Ciidaha. Waxaan ugu dambayn gaarsiinnay Jigjiga.',
  },
  {
    name: 'KHALIIL',
    city: 'MUQDISHO',
    text: 'Waxaan ka caawinay habka dalabka iyo keenista alaabtiisa ilaa ay gaadhay goobtii uu joogay.',
  },
  {
    name: 'NEEHAL',
    city: 'JABUUTI',
    text: 'Waxay naga dalbatay alaab, waxaana ka caawinay habka soo dalbashada iyo keenista.',
  },
];

export default function Testimonials() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-navy-50/30">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">MACAAMIISHA</p>
          <h2 className="text-display text-navy-900">
            Waxa Ay <span className="text-accent-500">Naga Yidhaahdeen.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-100/50 transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 ${
                gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote size={20} className="text-accent-300 mb-4" />
              <p className="text-sm text-navy-600 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-navy-100/50">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">{t.name}</p>
                  <div className="flex items-center gap-1 text-[11px] text-accent-500 font-medium">
                    <MapPin size={10} />
                    {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-bold text-navy-400 uppercase tracking-wider">
          Real Customers. Real Orders. Real Delivery.
        </p>
      </div>
    </section>
  );
}
