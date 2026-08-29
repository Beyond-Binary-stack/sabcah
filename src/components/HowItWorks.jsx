import { useInView } from '../hooks/useInView';
import { Search, ShieldCheck, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Soo Dir',
    subtitle: 'Send the product',
    text: 'Sawirka, link-ga, ama magaca alaabta.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Hubi',
    subtitle: 'Verify price',
    text: 'Waxaan kuu hubinnaa qiimaha iyo shipping-ka.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Xaqiiji',
    subtitle: 'Confirm order',
    text: 'Markaad ku qanacdo, xaqiiji dalabka.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Sug',
    subtitle: 'Receive delivery',
    text: 'Annaga ayaa maamulaya ilaa ay kuu soo gaadho.',
    icon: Truck,
  },
];

export default function HowItWorks() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`mb-14 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">HABKA</p>
          <h2 className="text-display text-navy-900">
            4 Tallabo: <span className="text-accent-500">Hal Laabo.</span>
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
          {/* Left: Package image + blurb */}
          <div className={`relative transition-all duration-700 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
              <img
                src="/Package.jpeg"
                alt="SABCAH package ready for delivery"
                className="relative rounded-[2rem] object-cover w-full aspect-[4/3] ring-1 ring-navy-100/50 shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-navy-900 p-4 shadow-xl">
                <p className="text-sm font-black text-white">Order to Door</p>
                <p className="text-xs text-white/50">12 days - 2 weeks</p>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div ref={gridRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`group relative rounded-3xl bg-navy-50/50 p-8 transition-all duration-600 hover:bg-navy-900 ${
                    gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <span className="absolute top-5 right-6 text-5xl font-black text-navy-200/40 group-hover:text-white/10 transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-900 group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-500 group-hover:text-accent-400 transition-colors duration-500">
                    {step.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-navy-500 group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
