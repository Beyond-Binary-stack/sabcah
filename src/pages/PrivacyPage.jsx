import { useInView } from '../hooks/useInView';
import { Shield, FileText, MessageCircle, Mail, Phone } from 'lucide-react';

const sections = [
  {
    title: 'Macluumaadka Aannu Kaydinno',
    content: 'SABCAH Online Marketing waxay kaydisaa macluumaadka aad noo soo dirtay sida magaca, numberka telefoonka, iyo email-ka. Macluumaadkan waxaa loo isticmaalaa kaliya in laguu soo gudbiyo dalabkaaga ama laguu jawaabo su\'aalaha.',
  },
  {
    title: 'Isticmaalida Macluumaadka',
    content: 'Macluumaadkaaga waxaa loo isticmaalaa kaliya si loo fuliyo dalabkaaga, loona soo gudbiyo wararka ku saabsan alaabtaada. Macluumaadkaaga lama wadaagi doono dhinac saddexaad aan kugu ogolaan.',
  },
  {
    title: 'Xogta Bulshada',
    content: 'Haddii aad nagala soo xiriirto barahayaga bulshada sida TikTok, Telegram, WhatsApp Group, iyo Facebook, macluumaadkaaga wuxuu ku xiran yahay siyaasadda platform-kaas.',
  },
  {
    title: 'Xaqqaaga',
    content: 'Waxaad xaq u leedahay inaad na weydiiso macluumaadka aannu kaydinno, inaad codsato in la tirtiro, ama inaad ka baxdo liiska macaamiisha.',
  },
  {
    title: 'Amniga',
    content: 'Waxaan isticmaalnaa habab amni si loo ilaaliyo macluumaadkaaga. Laakiin, ma shaqayno internet-ka 100% amaan ah.',
  },
  {
    title: 'Isbeddelka Siyaasadda',
    content: 'SABCAH waxay xaq u leedahay inay wax ka beddesho siyaasaddan mar kasta. Isbeddelka waxaa lagu soo daayaa boggan.',
  },
];

const terms = [
  {
    title: 'Adeegga',
    content: 'SABCAH Online Marketing waxay bixisaa adeegyo dalbida, sourcing-ka, iyo keenista alaabooyinka laga soo iibsado suuqyada caalamiga ah. Adeeggu wuxuu ku xiran yahay shuruudaha supplier-ka iyo nooca alaabta.',
  },
  {
    title: 'Qiimaha',
    content: 'Qiimaha waxaa lagu soo bandhigayaa ka hor inta aan dalabka la samayn. Qiimaha wuxuu ku xiran yahay isbeddelka suuqyada iyo kharashyada shipping-ka.',
  },
  {
    title: 'Bixinta',
    content: 'Bixinta waxaa la sameeyaa ka hor inta aan alaabta la dalban. Waxaan aqbalnaa bixinta WhatsApp-ka iyo habab kale.',
  },
  {
    title: 'Keenista & Gaarsiinta',
    content: 'Waqtiga keenistu wuxuu ku xiran yahay nooca shipping-ka, meesha alaabtu ka imanayso, iyo meesha aad ku joogto. SABCAH ma dammaanad qaadoso waqtiga keenista.',
  },
  {
    title: 'Joojinta & Noqoshada',
    content: 'Haddii aad rabto inaad joojiso dalabka, noo soo dir WhatsApp sida ugu dhakhsiyaha badan. Noqoshada waxaa lagu xiran yahay xaaladda dalabka iyo siyaasadda supplier-ka.',
  },
  {
    title: "Mas'uuliyadda",
    content: "SABCAH waxay ku dadaalaysaa inay bixiso adeeg hufan. Laakiin, mas'uuliyadda alaabta tayadeeda iyo shuruudaha supplier-ka waxaa iska leh supplier-ka.",
  },
];

export default function PrivacyPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [privacyRef, privacyInView] = useInView({ threshold: 0.05 });
  const [termsRef, termsInView] = useInView({ threshold: 0.05 });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden gradient-navy py-28 lg:py-40">
        <div className="absolute inset-0">
          <img
            src="/Package.webp"
            alt="SABCAH privacy and terms"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-navy-900/40" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className={`max-w-3xl transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Shield size={32} className="text-accent-400" />
            </div>
            <h1 className="text-hero text-white">Siyaasadda Arrimaha Gaarka & Shuruudaha</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Macluumaadka ku saabsan sida aannu u maamulno xogtaada iyo shuruudaha adeeggeenna
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={privacyRef} className={`mx-auto max-w-3xl transition-all duration-700 ${privacyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                <Shield size={22} />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Siyaasadda Arrimaha Gaarka</h2>
            </div>
            <p className="mb-8 text-sm text-navy-400">Ku dhammaatay: Ogosto 2026 | SABCAH Online Marketing</p>
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={section.title} className={`transition-all duration-500 ${privacyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 80}ms` }}>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{section.title}</h3>
                  <p className="text-navy-500 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div ref={termsRef} className={`mx-auto max-w-3xl transition-all duration-700 ${termsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                <FileText size={22} />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">Shuruudaha Adeegga</h2>
            </div>
            <div className="space-y-4">
              {terms.map((term, index) => (
                <div key={term.title} className={`rounded-2xl bg-white p-6 ring-1 ring-navy-100/50 transition-all duration-500 ${termsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 80}ms` }}>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{term.title}</h3>
                  <p className="text-navy-500 leading-relaxed text-sm">{term.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-navy-900">Su'aal Ma Lehid?</h2>
            <p className="mt-2 text-sm text-navy-500">Haddii aad wax su'aal ah ka qabto siyaasadda arrimaha gaarka ama shuruudaha, noo soo dir.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/252672338937" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsappDark hover:scale-[1.02]">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href="mailto:onlinesabcah@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-700 transition-all duration-300 hover:bg-navy-50">
                <Mail size={18} />
                Email
              </a>
              <a href="tel:+252638587502" className="inline-flex items-center gap-2 rounded-xl border border-navy-200 px-5 py-3 text-sm font-semibold text-navy-700 transition-all duration-300 hover:bg-navy-50">
                <Phone size={18} />
                Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
