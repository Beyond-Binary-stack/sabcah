import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import {
  Shirt, ShoppingBag, Briefcase, Smartphone, Watch,
  Home, Sparkles, PenTool, Car, Store, Plus, Search,
  ArrowRight, Send
} from 'lucide-react';

const categories = [
  { name: 'Dharka & Fashion-ka', icon: Shirt, count: '1000+' },
  { name: 'Kabaha', icon: ShoppingBag, count: '500+' },
  { name: 'Boorsooyinka', icon: Briefcase, count: '300+' },
  { name: 'Electronics', icon: Smartphone, count: '800+' },
  { name: 'Accessories', icon: Watch, count: '600+' },
  { name: 'Alaabta Guriga', icon: Home, count: '400+' },
  { name: 'Beauty & Personal Care', icon: Sparkles, count: '350+' },
  { name: 'Office & School Supplies', icon: PenTool, count: '250+' },
  { name: 'Car Accessories', icon: Car, count: '200+' },
  { name: 'Alaabooyinka Ganacsiga', icon: Store, count: '150+' },
];

const platforms = [
  { name: 'Alibaba', img: '/brands/alibaba.png', bg: 'bg-[#FF6A00]' },
  { name: '1688', img: '/brands/1688.png', bg: 'bg-[#FF4400]' },
  { name: 'SHEIN', img: '/brands/shein.png', bg: 'bg-black' },
  { name: 'YesStyle', img: '/brands/yesstyle.jpg', bg: 'bg-[#E8507A]' },
  { name: 'Joom', img: '/brands/joom.png', bg: 'bg-[#3D6CFF]' },
  { name: 'iHerb', img: '/brands/IHerb.png', bg: 'bg-[#3B6E3F]' },
  { name: 'AliExpress', img: '/brands/ali express.png', bg: 'bg-[#E43225]' },
  { name: 'Amazon', img: '/brands/amazon.jpg', bg: 'bg-[#FF9900]' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoriesRef, categoriesInView] = useInView({ threshold: 0.1 });
  const [platformsRef, platformsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <div className="pt-20">
      <PageHero
        label="ALAABOYINKA"
        title="Alaabooyinka Aan Kaaga Soo Dalbanno"
        subtitle="Waxaan alaabooyin kaaga soo dalbannaa suuqyo online ah iyo suppliers ku kala yaalla China, USA iyo suuqyada caalamiga ah."
        image="/Shop page.jpg"
        alt="SABCAH products catalogue"
      />

      {/* Categories */}
      <section id="categories" className="section-padding bg-white">
        <div className="container-custom">
          <div ref={categoriesRef} className={`text-center mb-16 transition-all duration-700 ${categoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">CATEGORIES</p>
            <h2 className="text-display text-navy-900">Nooca Alaabta <span className="text-accent-500">Aad Rabto</span></h2>
            <p className="mt-4 text-navy-500 max-w-lg mx-auto">
              Dooro nooca alaabta aad rabto. Waxaan kuu soo dalbannaa meel kasta
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(isActive ? null : category.name)}
                  className={`group flex flex-col items-center rounded-2xl p-6 text-center ring-1 transition-all duration-300 ${
                    isActive
                      ? 'bg-navy-900 text-white ring-navy-900 shadow-lg -translate-y-1'
                      : 'bg-white text-navy-700 ring-navy-100/50 hover:bg-navy-50 hover:ring-navy-200 hover:-translate-y-1 hover:shadow-md'
                  } ${categoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-navy-50 text-navy-400 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-lg'
                  }`}>
                    <Icon size={26} />
                  </div>
                  <p className={`mt-3 text-sm font-semibold leading-tight transition-colors ${isActive ? 'text-white' : 'text-navy-700 group-hover:text-accent-500'}`}>
                    {category.name}
                  </p>
                  <span className={`mt-1 text-xs font-medium transition-colors ${isActive ? 'text-white/70' : 'text-navy-400'}`}>
                    {category.count} products
                  </span>
                </button>
              );
            })}

            <button className={`group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-navy-200 p-6 text-center transition-all duration-300 hover:border-accent-300 hover:bg-accent-50/50 min-h-[140px] ${categoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${categories.length * 60}ms` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-100 text-navy-400 transition-all group-hover:bg-accent-100 group-hover:text-accent-500">
                <Plus size={26} />
              </div>
              <p className="mt-3 text-sm font-medium text-navy-400 group-hover:text-accent-500 transition-colors">
                Iyo alaabooyin kale oo badan
              </p>
            </button>
          </div>

          {activeCategory && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-navy-50/50 px-6 py-4 ring-1 ring-navy-100/50">
                <span className="text-sm text-navy-600">
                  Waxaad dooratay: <strong className="text-navy-900">{activeCategory}</strong>
                </span>
                <a href={`https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27m%20interested%20in%20${encodeURIComponent(activeCategory)}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-accent-600">
                  Dalbo hadda
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div ref={platformsRef} className={`text-center mb-14 transition-all duration-700 ${platformsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">Suuqyada</p>
            <h2 className="text-display text-navy-900">Meelaha Aannu Ka <span className="text-accent-500">Dalbanno</span></h2>
            <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
              Waxaan alaabooyin kaaga soo dalbannaa suuqyo online ah iyo suppliers kala duwan
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={platform.name} className={`transition-all duration-500 ${platformsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-transparent">
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${platform.bg} p-2 shadow-md`}>
                    <img src={platform.img} alt={`${platform.name} logo`} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{platform.name}</p>
                    <p className="text-xs text-navy-400">Marketplace</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-navy-400 max-w-2xl mx-auto">
            Haddii aad alaab ka hesho website ama platform kale, waxaad noo soo diri kartaa sawirka ama link-ga, waxaana kuu hubinaynaa inaan kuu soo dalbi karno.
          </p>
        </div>
      </section>

      {/* Empty State / Request */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={ctaRef} className={`mx-auto max-w-3xl transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-3xl bg-navy-50/50 p-8 lg:p-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                <Send size={32} />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                Haddii aad rabto alaab gaar ah
              </h2>
              <p className="mt-4 text-navy-500 leading-relaxed max-w-xl mx-auto">
                Haddii aadan helin alaabta aad rabto bogagayaga, noo soo dir sawirka, link-ga, ama magaca alaabta aad rabto. Waxaan kuu soo heli doonaa.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20order%20a%20specific%20product." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon size={18} />
                  Soo-dir Alaabta WhatsApp
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-900 px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-navy-900 hover:text-white">
                  Nala soo xiriir
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Quick */}
      <section className="py-12 bg-navy-50/30">
        <div className="container-custom">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
                <img
                  src="/pachage2.jpeg"
                  alt="SABCAH order ready to ship"
                  className="relative h-64 w-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { step: '1', title: 'Soo-dir', desc: 'Sawirka, link-ga, ama magaca alaabta' },
                { step: '2', title: 'Hubi Qiimaha', desc: 'Waxaan kuu hubinaynaa qiimaha iyo shipping-ka' },
                { step: '3', title: 'Dalbo', desc: 'Xaqiiji oo sug alaabtaada' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-navy-100/50">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="text-xs text-navy-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
