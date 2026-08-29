import { useInView } from '../hooks/useInView';
import {
  Shirt, ShoppingBag, Briefcase, Smartphone, Watch,
  Home, Sparkles, PenTool, Car, Store, ArrowRight
} from 'lucide-react';

const categories = [
  { name: 'Dharka & Fashion', icon: Shirt, color: 'from-pink-500 to-rose-500' },
  { name: 'Kabaha', icon: ShoppingBag, color: 'from-amber-500 to-orange-500' },
  { name: 'Boorsooyinka', icon: Briefcase, color: 'from-violet-500 to-purple-500' },
  { name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
  { name: 'Accessories', icon: Watch, color: 'from-emerald-500 to-teal-500' },
  { name: 'Alaabta Guriga', icon: Home, color: 'from-orange-500 to-red-500' },
  { name: 'Beauty', icon: Sparkles, color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Office & School', icon: PenTool, color: 'from-indigo-500 to-blue-500' },
  { name: 'Car Accessories', icon: Car, color: 'from-slate-500 to-gray-600' },
  { name: 'Ganacsiga', icon: Store, color: 'from-green-500 to-emerald-500' },
];

export default function Categories() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section id="shop" className="section-padding bg-navy-50/30">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="section-label">CATEGORIES</p>
            <h2 className="text-display text-navy-900">
              Alaabooyin <span className="text-accent-500">Kala Duwan.</span>
            </h2>
          </div>
          <a
            href="https://wa.me/252672338937"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !text-accent-500 hover:!bg-accent-500/5 group"
          >
            Wax ka arko dhammaan
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className={`group transition-all duration-500 ${
                  gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 text-center ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1 hover:ring-transparent cursor-pointer">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} />
                  </div>
                  <p className="mt-4 text-sm font-bold text-navy-800 group-hover:text-navy-900 leading-tight">
                    {category.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
