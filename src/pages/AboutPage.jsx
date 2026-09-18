import { useInView } from '../hooks/useInView';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import {
  Globe, ShieldCheck, Heart, Users, Award, MapPin,
  Target, Eye, Package, Truck, ArrowRight, Quote, Building2, Search
} from 'lucide-react';

const values = [
  { icon: Target, title: 'Fudud', text: 'Adeeggu waa mid fudud oo la fahmi karo' },
  { icon: Eye, title: 'La fahmi karo', text: 'Wax walba waan ku muujinaynaa cad' },
  { icon: ShieldCheck, title: 'La isku halayn karo', text: 'Kalsooni ayaa ahasaaskeena u ah' },
  { icon: Heart, title: 'Qiimo macquul ah', text: 'Waxaan bixinaa qiimaha ugu fiican' },
  { icon: Users, title: 'Macaamiisha ku habboon', text: 'Macaamiisha ayaa ah waxa ugu muhiimsan' },
];

const milestones = [
  { number: 'Boqolaal', label: 'Products waxaan dalabnay', icon: Package },
  { number: 'Sanado', label: 'Khibrad ah suuqyada online-ka', icon: Award },
  { number: '6+', label: 'Dalal oo aan ka keenno', icon: Globe },
  { number: '100%', label: 'Alaabta si toos ah u gaadha', icon: Truck },
];

const customers = [
  {
    name: 'MAHAD',
    city: 'HARGEISA',
    text: 'Mahad waa mid ka mid ah macaamiisheena Hargeisa. Waxaan u dalabnay alaab uu u baahnaa, waxaana safarkii alaabtiisa ku soo beegmay xaalad dagaal oo sababtay in waqtigii keenistu uu dhowr toddobaad dib u dhaco.',
  },
  {
    name: "MAA'IDA",
    city: 'GAROWE',
    text: "Maa'ida waa macmiil muddo nala soo shaqaynaysay oo marar badan alaabo naga dalbatay. Waxaan ka caawinay dalabyo kala duwan, waxaana alaabihii ay dalbatay ku gaarsiinnay Garowe.",
  },
  {
    name: 'SALMA',
    city: 'JIGJIGA',
    text: 'Salma waxay naga dalbatay dharka carruurteeda ee Ciidaha. Waxaan ka caawinay raadinta iyo dalbashada alaabta ay dooratay, waxaana ugu dambayn gaarsiinnay Jigjiga.',
  },
  {
    name: 'KHALIIL',
    city: 'MUQDISHO',
    text: 'Khaliil waa macmiil ku nool Muqdisho oo adeeggeenna u adeegsaday dalab alaabo. Waxaan ka caawinay habka dalabka iyo keenista alaabtiisa.',
  },
  {
    name: 'NEEHAL',
    city: 'JABUUTI',
    text: 'Waxaan sidoo kale adeeg u fidinnay Neehal oo ku nool Jabuuti. Waxay naga dalbatay alaab, waxaana ka caawinay habka soo dalbashada iyo keenista.',
  },
];

const businessCities = [
  { city: 'Hargeisa', type: 'Retail & Wholesale' },
  { city: 'Garowe', type: 'Retail' },
  { city: 'Muqdisho', type: 'Retail & Wholesale' },
  { city: 'Burco', type: 'Wholesale' },
  { city: 'Jigjiga', type: 'Retail' },
  { city: 'Jabuuti', type: 'Retail' },
];

export default function AboutPage() {
  const [storyRef, storyInView] = useInView({ threshold: 0.1 });
  const [whoRef, whoInView] = useInView({ threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [customersRef, customersInView] = useInView({ threshold: 0.05 });
  const [businessRef, businessInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <div className="pt-20">
      <PageHero
        label="NAGU SAABSAN"
        title="Nagu Saabsan SABCAH"
        subtitle="SABCAH Online Marketing waa shirkad ku takhasustay dalbida, sourcing-ka iyo keenista alaabooyinka laga soo iibsado suuqyada China, USA iyo dhammaan suuqyada caalamiga ah."
        image="/About Us page.webp"
        alt="About SABCAH online marketing"
      />
      <div className="relative z-10 -mt-14 mb-0 container-custom">
        <p className="text-sm font-semibold text-white/40 uppercase tracking-wider">Our mission is simple:</p>
        <p className="text-xl font-bold text-accent-400">We Order. We Deliver. You Relax.</p>
      </div>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={storyRef} className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-700 ${storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="section-label">KOOXDEENA</p>
              <h2 className="text-display text-navy-900">
                Sida Aannu U <span className="text-accent-500">Shaqayno</span>
              </h2>
              <p className="mt-6 text-navy-500 leading-relaxed">
                Waxaan macaamiisha Soomaaliyeed u fududaynaa inay helaan alaabooyin kala duwan, annagoo ka caawinaynaa habka raadinta alaabta, isbarbardhigga suppliers-ka, dalbashada iyo keenista.
              </p>
              <p className="mt-4 text-navy-500 leading-relaxed">
                Waxaan alaabta kuugu keenaynaa meesha aad ka joogto dhulalka Soomaalida. Adeeggeenna wuxuu u furan yahay qof doonaya hal alaab, macaamiil doonaya alaabooyin tafaariiq ah, iyo ganacsato ama shirkado doonaya dalabyo jumlo ah.
              </p>
            </div>
            <div className="rounded-3xl bg-navy-50/50 p-8 lg:p-10">
              <div className="space-y-4">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex items-start gap-4 rounded-2xl bg-white p-4 ring-1 ring-navy-100/50">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900">{value.title}</p>
                        <p className="text-sm text-navy-500">{value.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div ref={whoRef} className={`text-center mb-16 transition-all duration-700 ${whoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">YAA AHAN?</p>
            <h2 className="text-display text-navy-900">Waxaan <span className="text-accent-500">Nahay</span></h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: 'Online Ordering', text: 'Waxaan macaamiisha ka caawinnaa inay alaabooyin ka helaan suuqyada caalamiga ah iyagoo aan si toos ah ula macaamilin suppliers-ka.' },
              { icon: Search, title: 'Product Sourcing', text: 'Waxaan raadinaa oo xulnaa suppliers-ka ugu fiican ee alaabta aad u baahan tahay, waxaanan hubinaa tayada iyo qiimaha.' },
              { icon: Package, title: 'International Procurement', text: 'Waxaan ka shaqaynaa platforms badan oo ay ka mid yihiin Alibaba, SHEIN, Amazon, iyo kuwo kale oo badan.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-navy-100/50 transition-all duration-600 ${whoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-sm text-navy-500 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={missionRef} className={`mx-auto max-w-3xl text-center transition-all duration-700 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">HADAFKEENA</p>
            <h2 className="text-display text-navy-900">Hadafkayagu</h2>
            <p className="mt-6 text-lg text-navy-500 leading-relaxed">
              Hadafkayagu waa inaan dadka Soomaaliyeed u fududayno helitaanka alaabooyin kala duwan oo tayo leh oo laga soo dalbado China, USA iyo suuqyada caalamiga ah.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Fudud', 'La fahmi karo', 'La isku halayn karo', 'Qiimo macquul ah', 'Macaamiisha ku habboon'].map((item) => (
                <span key={item} className="rounded-full bg-navy-50/50 px-5 py-2.5 text-sm font-semibold text-navy-700 ring-1 ring-navy-100/50">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-50/30">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {milestones.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className={`rounded-2xl bg-white p-6 text-center ring-1 ring-navy-100/50 transition-all duration-600 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon size={24} />
                  </div>
                  <p className="mt-4 text-3xl font-extrabold text-navy-900">{stat.number}</p>
                  <p className="mt-1 text-sm text-navy-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={customersRef} className={`text-center mb-16 transition-all duration-700 ${customersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">MACAAMIISHA</p>
            <h2 className="text-display text-navy-900">Macaamiisheenna</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {customers.map((customer, index) => (
              <div key={customer.name} className={`transition-all duration-600 ${customersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 120}ms` }}>
                <div className="card h-full flex flex-col">
                  <Quote size={20} className="text-accent-300 flex-shrink-0" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                    &ldquo;{customer.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-navy-100/50 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-900">{customer.name}</p>
                      <div className="flex items-center gap-1 text-xs text-accent-500 font-medium">
                        <MapPin size={12} />
                        {customer.city}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div className={`mb-12 overflow-hidden rounded-[2rem] shadow-xl ${businessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`} style={{ transitionDelay: '100ms' }}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
              <img
                src="/servicesPage.webp"
                alt="SABCAH serving businesses across Somali territories"
                className="relative h-56 w-full object-cover sm:h-72"
              />
            </div>
          </div>
          <div ref={businessRef} className={`transition-all duration-700 ${businessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-3xl bg-white p-8 lg:p-12 shadow-sm ring-1 ring-navy-100/50">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                    <Building2 size={28} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-navy-900">Ganacsiyada Aan U Adeegnay</h3>
                  <p className="mt-4 text-navy-500 leading-relaxed">
                    Waxaan sidoo kale la shaqaynaa meherado iyo ganacsiyo dalbada alaabooyin tiro badan. Waxaan ganacsiyada ka caawin karnaa dalabyo jumlo, sourcing, isbarbardhigga suppliers-ka iyo keenista alaabta.
                  </p>
                  <p className="mt-3 text-sm text-navy-400">
                    Waxaan alaabooyin badan u keenay meherado ku yaalla dhulalka Soomaalida.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {businessCities.map((item) => (
                    <div key={item.city} className="flex items-center gap-3 rounded-xl bg-navy-50/50 p-3 ring-1 ring-navy-100/50">
                      <MapPin size={16} className="flex-shrink-0 text-accent-500" />
                      <div>
                        <p className="text-sm font-semibold text-navy-900">{item.city}</p>
                        <p className="text-xs text-navy-400">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative overflow-hidden gradient-accent py-20 lg:py-24">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="container-custom relative z-10">
          <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-display text-white">Ma Rabtaa inaad Noqoto Macmiilkeenna Xiga?</h2>
            <p className="mt-5 text-lg text-white/80">Noo soo dir sawirka, magaca ama link-ga alaabta aad rabto.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20know%20more%20about%20your%20company." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-accent-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
                <WhatsAppIcon size={22} className="text-whatsapp" />
                La shaqee SABCAH
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10">
                Nala soo xiriir
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
