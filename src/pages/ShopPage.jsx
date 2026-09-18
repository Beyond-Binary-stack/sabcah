import { useInView } from '../hooks/useInView';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { ArrowRight, Send } from 'lucide-react';

const platforms = [
  { name: 'Alibaba', img: '/brands/alibaba.webp', bg: 'bg-[#FF6A00]' },
  { name: '1688', img: '/brands/1688.webp', bg: 'bg-[#FF4400]' },
  { name: 'SHEIN', img: '/brands/shein.webp', bg: 'bg-black' },
  { name: 'YesStyle', img: '/brands/yesstyle.webp', bg: 'bg-[#E8507A]' },
  { name: 'Joom', img: '/brands/joom.webp', bg: 'bg-[#3D6CFF]' },
  { name: 'iHerb', img: '/brands/IHerb.webp', bg: 'bg-[#3B6E3F]' },
  { name: 'AliExpress', img: '/brands/ali express.webp', bg: 'bg-[#E43225]' },
  { name: 'Amazon', img: '/brands/amazon.webp', bg: 'bg-[#FF9900]' },
];

export default function ShopPage() {
  const [platformsRef, platformsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });
  const [collectionsRef, collectionsInView] = useInView({ threshold: 0.1 });

  const collections = [
    {
      title: 'GENERAL PRODUCTS',
      image: '/shop_images/genral.webp',
      source: '1688 + Alibaba',
      products: ['Watches', 'Shoes', 'Jewelry', 'Bags', 'Toys', 'Household products']
    },
    {
      title: 'BEAUTY & SKINCARE',
      image: '/shop_images/BEAUTY & SKINCARE.webp',
      source: 'YesStyle',
      products: ['Skincare', 'Serums', 'Cosmetics', 'Cleansers', 'Makeup', 'Beauty tools']
    },
    {
      title: 'SUPPLEMENTS & NUTRITION',
      image: '/shop_images/SUPPLEMENTS & NUTRITION.webp',
      source: 'iHerb',
      products: ['Protein', 'Nutrition products', 'Vitamins', 'Minerals', 'Wellness items', 'Sports nutrition']
    },
    {
      title: 'ELECTRONICS & GADGETS',
      image: '/shop_images/ELECTRONICS & GADGETS.webp',
      source: 'Amazon',
      products: ['Headphones', 'Laptops', 'Earbuds', 'Smartwatches', 'Cameras', 'Computer accessories']
    },
    {
      title: 'FASHION & CLOTHING',
      image: '/shop_images/FASHION & CLOTHING.webp',
      source: 'SHEIN',
      products: ["Women's clothing", 'Shoes', "Men's clothing", "Children's clothing", 'Bags', 'Fashion accessories']
    },
    {
      title: 'RETAIL PRODUCTS',
      image: '/shop_images/RETAIL PRODUCTS.webp',
      source: 'AliExpress',
      products: ['Phone accessories', 'Shoes', 'Gadgets', 'Jewelry', 'Beauty products', 'Home products']
    },
    {
      title: 'HOME & LIFESTYLE',
      image: '/shop_images/HOME & LIFESTYLE.webp',
      source: 'Joom',
      products: ['Kitchen items', 'Daily-use items', 'Home décor', 'Storage', 'Lighting', 'Lifestyle gadgets']
    },
    {
      title: 'WHOLESALE & BUSINESS ORDERS',
      image: '/shop_images/WHOLESALE & BUSINESS ORDERS.webp',
      source: 'Alibaba + 1688',
      products: ['Bulk clothing', 'Bulk electronics', 'Bulk shoes', 'Bulk bags', 'Business supplies', 'Custom orders']
    }
  ];

  return (
    <div className="pt-20">
      <PageHero
        label="ALAABOYINKA"
        title="Alaabooyinka Aan Kaaga Soo Dalbanno"
        subtitle="Waxaan alaabooyin kaaga soo dalbannaa suuqyo online ah iyo suppliers ku kala yaalla China, USA iyo suuqyada caalamiga ah."
        image="/Shop page.webp"
        alt="SABCAH products catalogue"
      />

      {/* Product Collections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={collectionsRef} className={`text-center mb-12 transition-all duration-700 ${collectionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">PRODUCT COLLECTIONS</p>
            <h2 className="text-display text-navy-900">Explore Our <span className="text-accent-500">Collections</span></h2>
          </div>

          <div className={`mb-12 rounded-2xl bg-accent-500 px-6 py-4 text-center transition-all duration-700 ${collectionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-sm font-semibold text-white">ANY PRODUCT. WE CAN SOURCE IT FOR YOU</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <div
                key={collection.title}
                className={`group overflow-hidden rounded-3xl bg-white ring-1 ring-navy-100/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${collectionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{collection.title}</h3>
                    <p className="mt-1 text-sm text-white/80">Source marketplace: {collection.source}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {collection.products.map((product) => (
                      <span
                        key={product}
                        className="inline-flex items-center rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:bg-accent-500 hover:text-white"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  src="/pachage2.webp"
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
