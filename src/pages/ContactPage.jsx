import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import {
  MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight,
  Camera, Link2, Type, Hash
} from 'lucide-react';

const whatToSend = [
  { icon: Camera, label: 'Sawirka alaabta', description: 'Sawirka alaabta aad rabto' },
  { icon: Link2, label: 'Link-ga alaabta', description: 'Link-ga alaabta website-ka' },
  { icon: Type, label: 'Magaca alaabta', description: 'Magaca alaabta aad rabto' },
  { icon: Hash, label: 'Tirada aad rabto', description: 'Tirada alaabta aad doonayso' },
];

const contactMethods = [
  { icon: MessageCircle, name: 'WhatsApp', value: '+252 672 338 937', href: 'https://wa.me/252672338937', external: true, description: 'Si fudud ayaad noo soo wici kartaa WhatsApp' },
  { icon: Phone, name: 'Telefoon', value: '063 858 7502', href: 'tel:+252638587502', external: false, description: 'Noo soo wac moobiilka' },
  { icon: Mail, name: 'Email', value: 'onlinesabcah@gmail.com', href: 'mailto:onlinesabcah@gmail.com', external: false, description: 'Noogu soo dir email' },
];

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [methodsRef, methodsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', phone: '', productLink: '', quantity: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `*Dalab Cusub - New Order*`,
      '',
      `Magaca: ${formData.name}`,
      `Telefoon: ${formData.phone}`,
      formData.productLink ? `Link-ga alaabta: ${formData.productLink}` : '',
      formData.quantity ? `Tirada: ${formData.quantity}` : '',
      formData.message ? `Faahfaahin: ${formData.message}` : '',
    ].filter(Boolean);
    window.open(`https://wa.me/252672338937?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden gradient-navy py-28 lg:py-40">
        <div className="absolute inset-0">
          <img
            src="/pachage2.webp"
            alt="SABCAH customer support"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-navy-900/40" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label !text-accent-400 before:!bg-accent-400">XIRIIRKA</p>
            <h1 className="text-hero text-white">Nala Soo Xiriir</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Dalab ama Su'aal? Noo soo dir fariin WhatsApp ah. Waxaad noo soo diri kartaa sawirka, link-ga, magaca alaabta, iyo tirada aad rabto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={methodsRef} className={`text-center mb-16 transition-all duration-700 ${methodsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">XIRIIRKA</p>
            <h2 className="text-display text-navy-900">Noo La <span className="text-accent-500">Xiriir</span></h2>
            <p className="mt-4 text-navy-500 max-w-lg mx-auto">
              Dooro habka kugu habboon ee aad noogu soo xiriiri karto
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={method.name} className={`transition-all duration-600 ${methodsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <a href={method.href} target={method.external ? '_blank' : undefined} rel={method.external ? 'noopener noreferrer' : undefined} className="group flex flex-col items-center rounded-3xl bg-navy-50/50 p-8 text-center ring-1 ring-navy-100/50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 ${
                      method.name === 'WhatsApp' ? 'bg-whatsapp' : method.name === 'Telefoon' ? 'bg-navy-900' : 'bg-navy-600'
                    }`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-navy-900">{method.name}</h3>
                    <p className="mt-1 text-sm text-navy-500">{method.description}</p>
                    <p className="mt-3 font-semibold text-accent-500">{method.value}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      Contact now <ArrowRight size={14} />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="section-padding bg-navy-50/30 scroll-mt-24">
        <div className="container-custom">
          <div ref={formRef} className={`transition-all duration-700 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="section-label">WAXAAD NOO SOO DIRI KARTAA</p>
                <h2 className="text-display text-navy-900">Dalab ama <span className="text-accent-500">Su'aal?</span></h2>
                <p className="mt-4 text-navy-500 leading-relaxed">
                  Noo soo dir fariin WhatsApp ah. Waxaad noo soo diri kartaa:
                </p>
                <div className="mt-8 space-y-4">
                  {whatToSend.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className={`flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-navy-100/50 transition-all duration-500 ${formInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                          <Icon size={22} />
                        </div>
                        <div>
                          <p className="font-semibold text-navy-900">{item.label}</p>
                          <p className="text-sm text-navy-500">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src="/pachage2.webp"
                    alt="SABCAH orders ready to ship"
                    className="h-52 w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100/50">
                  <h3 className="text-xl font-bold text-navy-900">Dalbo Hadda</h3>
                  <p className="mt-2 text-sm text-navy-500">Buuxi foomkan. Fariintaada waxaa loo dirayaa WhatsApp-ka SABCAH</p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">Magaca</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Magacaaga" className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">Numberka Telefoonka</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+252 ..." className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
                    </div>
                    <div>
                      <label htmlFor="productLink" className="block text-sm font-medium text-navy-700 mb-1.5">Link-ga Alaabta (Ikhtiyaari)</label>
                      <input type="url" id="productLink" name="productLink" value={formData.productLink} onChange={handleChange} placeholder="https://..." className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-navy-700 mb-1.5">Tirada (Ikhtiyaari)</label>
                      <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Tusaale: 3" className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">Fariinta</label>
                      <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder="Qor fariintaada ama sheeg alaabta aad rabto..." className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 resize-none" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-whatsappDark hover:shadow-xl hover:scale-[1.02]">
                      <WhatsAppIcon size={20} />
                      Dir Dalabka WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section className="py-12 bg-navy-50/30">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-100/50 sm:flex-row sm:gap-8">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
              <MapPin size={28} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-navy-900">Dhulalka Soomaalida</h3>
              <p className="mt-1 text-sm text-navy-500">Adeeggeennu wuxuu ku fidiyaa meelo kala duwan oo dhulalka Soomaalida ah. Waxaan alaabta kuugu keenaynaa meesha aad ka joogto.</p>
            </div>
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 sm:ml-auto">
              <Clock size={28} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-navy-900">Waqtiyada Adeegga</h3>
              <p className="mt-1 text-sm text-navy-500">WhatsApp: Maalin kasta | Telefoon: 8am - 8pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
