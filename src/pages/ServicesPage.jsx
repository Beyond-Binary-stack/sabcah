import { useInView } from '../hooks/useInView';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { Globe, Search, ShieldCheck, Truck, ArrowRight, Clock, Package, Plane, Ship } from 'lucide-react';

const services = [
  {
    id: 'ordering',
    icon: Globe,
    image: '/pachage2.jpeg',
    title: 'Dalbida Alaabta Caalamiga ah',
    subtitle: 'International Product Ordering',
    description: 'Waxaan kuu dalbannaa alaab kasta oo aad ka hesho suuqyada online-ka ah ee China, USA iyo suuqyada caalamiga ah. Noo soo dir sawirka, magaca ama link-ga alaabta aad rabto.',
    features: [
      'Dalbasho toos ah oo ka timid suuqyada caalamiga ah',
      'Waxaan la xiriirnaa suppliers-ka tooska ah',
      'Hubinta tayada alaabta ka hor inta aan la keenin',
      'Kharashyo cad oo la wadaagay macaamiilka',
    ],
  },
  {
    id: 'sourcing',
    icon: Search,
    image: '/Shop page.jpg',
    title: 'Raadinta iyo Xulista Alaabta',
    subtitle: 'Product Sourcing & Procurement',
    description: 'Haddii aadan hubin meesha alaabta ka heli karto, waxaan kaa caawinaynaa raadinta iyo xulista suppliers-ka ugu fiican ee alaabta aad u baahan tahay.',
    features: [
      'Isbarbardhigga suppliers kala duwan',
      'Hubinta tayada iyo shuruudaha',
      'Qiimaha ugu macquulsan',
      'Xulista habka shipping-ka ku habboon',
    ],
  },
  {
    id: 'retail-wholesale',
    icon: Package,
    image: '/Package.jpeg',
    title: 'Tafaariiq & Jumlo',
    subtitle: 'Retail & Wholesale Orders',
    description: 'Waxaad dalban kartaa hal alaab (tafaariiq) ama tiro badan (jumlo). Waxaan taageernaa labada baahiyood ee macaamiisha kala duwan.',
    features: [
      'Hal alaab ama tiro badan',
      'Qiimaha jumlo ee dhimisan',
      'Adeegga ganacsatada',
      'Isbarbardhigga shuruudaha supplier-ka',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    image: '/ShIpping Truck.jpeg',
    title: 'Keenista & Gaarsiinta',
    subtitle: 'Shipping & Delivery',
    description: 'Waxaan maamulnaa habka keenista ilaa alaabtaadu ka gaadho meesha aad ku joogto dhulalka Soomaalida.',
    features: [
      'Diyaarad (Air): 3 toddobaad',
      'Markab (Sea): illaa 2 bilood',
      'La raacsanaanta dalabka',
      'Gaarsiinta meesha aad joogto',
    ],
  },
];

const shippingMethods = [
  {
    icon: Plane,
    name: 'Diyaarad (Air)',
    timeline: 'Qiyaastii 3 toddobaad',
    pros: 'Way ka dhakhso badan tahay markabka',
    cons: 'Qiimaheedu wuu ka sarreeyaa',
    bestFor: 'Abaalmarin ku habboon alaabta degdegga ah',
  },
  {
    icon: Ship,
    name: 'Markab (Sea)',
    timeline: 'Illaa qiyaastii 2 bilood',
    pros: 'Wuu ka jaban yahay diyaaradda',
    cons: 'Wuxuu qaataa waqti dheer',
    bestFor: 'Jumlo iyo alaab tiro badan',
  },
];

export default function ServicesPage() {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.05 });
  const [shippingRef, shippingInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <div className="pt-20">
      <PageHero
        label="ADEEGYADA"
        title="Adeegyadayada"
        subtitle="SABCAH Online Marketing waxay bixisaa adeegyo dhamaystiran oo ku saabsan dalbida, sourcing-ka, iyo keenista alaabooyinka laga soo iibsado suuqyada caalamiga ah."
        image="/servicesPage.jpg"
        alt="SABCAH online marketing services"
      />
      <div className="relative z-10 -mt-20 mb-0 container-custom">
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon size={18} />
            Nala soo xiriir
          </a>
          <a
            href="#services-detail"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Wax ka baro adeegyada
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Core Services */}
      <section id="services-detail" className="section-padding bg-white">
        <div className="container-custom">
          <div
            ref={servicesRef}
            className={`text-center mb-16 transition-all duration-700 ${
              servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label justify-center">Adeegyada Aannu Bixino</p>
            <h2 className="text-display text-navy-900">
              Adeegyadayada <span className="text-accent-500">Kala Duwan</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-100/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.subtitle}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon size={22} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent-500">
                        {service.subtitle}
                      </p>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-navy-900 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-navy-500 leading-relaxed">{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <ShieldCheck size={17} className="mt-0.5 flex-shrink-0 text-accent-500" />
                          <span className="text-sm text-navy-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retail & Wholesale Detail */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Retail */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                <Package size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">Tafaariiq (Retail)</h3>
              <p className="mt-4 text-navy-500 leading-relaxed">
                Waxaad dalban kartaa hal alaab ama dhowr alaabood. Kharashka KG-ga waxaa lala
                qaybsan karaa macaamiisha kale ee shipment-ka, sidaas darteed hal qof kaligiis uma
                baahna inuu qaado dhammaan kharashka shipment-ka.
              </p>
              <div className="mt-6 rounded-xl bg-navy-50/50 p-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-accent-500" />
                  <p className="text-sm font-semibold text-navy-700">
                    Waqtiga keenista: 12 maalmood - 2 toddobaad
                  </p>
                </div>
                <p className="mt-1 text-xs text-navy-400">
                  Iyadoo ku xiran meesha alaabtu ka imanayso iyo shipping-ka
                </p>
              </div>
            </div>

            {/* Wholesale */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                <Package size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">Jumlo (Wholesale)</h3>
              <p className="mt-4 text-navy-500 leading-relaxed">
                Waxaan sidoo kale kaa caawin karnaa dalabaadka jumlada. Markaad noo soo dirto
                alaabta aad rabto, waxaan isbarbardhigaynaa companies/suppliers kala duwan, waxaanan
                hubinnaa inay buuxiyaan shuruudaha aad u baahan tahay.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-accent-500" />
                  <span className="text-sm text-navy-600">
                    Supplier-ka buuxiya shuruudahaaga, isla markaana bixiya qiimaha ugu macquulsan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-accent-500" />
                  <span className="text-sm text-navy-600">
                    Doorashada habka shipping-ka ku habboon: Diyaarad ama Markab
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div
            ref={shippingRef}
            className={`text-center mb-16 transition-all duration-700 ${
              shippingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label justify-center">SHIPPING</p>
            <h2 className="text-display text-navy-900">
              Diyaarad mise <span className="text-accent-500">Markab?</span>
            </h2>
            <p className="mt-4 text-navy-500 max-w-lg mx-auto">
              Annaga ayaa kuu sharxaynaa labada option ka hor inta aan dalabka la samayn.
            </p>
          </div>

          <div className={`mb-12 overflow-hidden rounded-[2rem] shadow-xl ${shippingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`} style={{ transitionDelay: '100ms' }}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
              <img
                src="/ShIpping Truck.jpeg"
                alt="SABCAH shipping methods - air and sea delivery"
                className="relative h-56 w-full object-cover sm:h-72"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {shippingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.name}
                  className={`rounded-3xl bg-navy-50/50 p-8 transition-all duration-600 ${
                    shippingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">{method.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-accent-500">{method.timeline}</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-sm text-navy-600">{method.pros}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                      <span className="text-sm text-navy-600">{method.cons}</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl bg-white p-3 text-center ring-1 ring-navy-100/50">
                    <p className="text-xs text-navy-500 font-medium">{method.bestFor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden gradient-accent py-20 lg:py-24"
      >
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="container-custom relative z-10">
          <div
            className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-display text-white">
              Ma Haysaa Alaab Aad Rabto?
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Noo soo dir magaca, sawirka ama link-ga alaabta aad rabto.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-accent-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
              >
                <WhatsAppIcon size={22} className="text-whatsapp" />
                Nala soo xiriir: WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
