import { useInView } from '../hooks/useInView';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import FaqAccordion from '../components/FaqAccordion';
import {
  Send, ShieldCheck, ClipboardCheck, Truck,
  MessageCircle, HelpCircle, Phone, Mail
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Soo Dir Alaabta',
    subtitle: 'Send the Product',
    description: 'Noo soo dir sawirka, magaca ama link-ga alaabta aad rabto. Waxaad noo soo diri kartaa WhatsApp, email, ama bogayaga bulshada.',
    details: ['Sawirka alaabta', 'Link-ga alaabta', 'Magaca alaabta', 'Tirada aad rabto'],
    icon: Send,
  },
  {
    number: '02',
    title: 'Qiimaha Hubi',
    subtitle: 'Verify the Price',
    description: 'Waxaan kuu soo hubinaynaa qiimaha alaabta iyo kharashyada la xiriira dalabka. Waxaan isbarbardhigaynaa suppliers kala duwan.',
    details: ['Qiimaha alaabta', 'Kharashka shipping-ka', 'Isbarbardhigga suppliers', 'Qiimaha ugu macquulsan'],
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Xaqiiji',
    subtitle: 'Confirm',
    description: 'Haddii aad ku qanacdo qiimaha iyo faahfaahinta, waxaad xaqiijinaysaa dalabka. Alaabtu way ka jabnaanaysa tan suuqa.',
    details: ['Hubinta qiimaha', 'Xaqiijinta dalabka', 'Bixinta kharashka', 'Furaha dalabka'],
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Dalabkaaga Sug',
    subtitle: 'Wait for Delivery',
    description: 'Annaga ayaa maamulaya habka soo dalbashada iyo gaarsiinta alaabtaada. Waxaan kugu soo xiriirnaa marka alaabtu gaadho.',
    details: ['Maamulka dalabka', 'La socodka alaabta', 'Gaarsiinta meesha', 'Xaqiijinta gaadhiidka'],
    icon: Truck,
  },
];

const faqItems = [
  {
    question: 'Ma dalban karaa hal xabbo?',
    answer: 'Haa. Waxaad dalban kartaa hal alaab, haddii nooca alaabta iyo shuruudaha supplier-ku oggol yihiin.',
  },
  {
    question: 'Ma dalban karaa alaab tafaariiq ah?',
    answer: 'Haa. Waxaad noo soo diri kartaa sawirka alaabta aad rabto, annaga ayaa kuu dalbaya, kadibna kuu keenaya. Kharashka KG-ga waxaa lala qaybsan karaa macaamiisha kale ee shipment-ka.',
  },
  {
    question: 'Intee ayay qaadataa alaabta tafaariiqda?',
    answer: 'Alaabta tafaariiqda badanaa waxay ku soo gaadhi kartaa qiyaastii 12 maalmood ilaa dhammaadka 2 toddobaad, iyadoo ku xiran meesha alaabtu ka imanayso iyo shipping-ka.',
  },
  {
    question: 'Ma dalban karaa alaab jumlad ah?',
    answer: 'Haa. Waxaan sidoo kale kaa caawin karnaa dalabaadka jumlada. Markaad noo soo dirto alaabta aad rabto, waxaan isbarbardhigaynaa companies/suppliers kala duwan.',
  },
  {
    question: 'Sidee ayay dalabyada jumlada u yimaadaan?',
    answer: 'Dalabyada jumlada waxaa lagu keeni karaa laba hab: 1. Diyaarad (Air): qiyaastii 3 toddobaad. 2. Markab (Sea): illaa qiyaastii 2 bilood.',
  },
  {
    question: 'Diyaaradmise Markab: Kee igu habboon?',
    answer: 'Annaga ayaa kuu sharxaynaa labada option ka hor inta aan dalabka la samayn. Markaan ogaanno nooca alaabtaada, tirada, waqtiga aad u baahan tahay iyo kharashka ku habboon.',
  },
  {
    question: 'Alaabo hore ma u dalabteen?',
    answer: 'Haa. Alxamdulillaah, waxaan horey u dalabnay boqolaal products, waxaana ka mid ah alaabooyin ay dalbadeen macaamiil caadi ah, shakhsiyaad, ganacsato, meherado iyo goobo ganacsi.',
  },
  {
    question: 'Xaggee ka daawan karaa alaabihii aad keenteen?',
    answer: 'Waxaad ka daawan kartaa alaabooyinka iyo dalabyada aan keenno barahayaga bulshada, oo ay ka mid yihiin: TikTok, Telegram, WhatsApp Group, iyo Facebook.',
  },
  {
    question: 'Intee ayaad ka shaqaynayseen suuqyadan?',
    answer: 'Waxaan sanado badan ka shaqaynaynay dalbida iyo sourcing-ka alaabooyinka suuqyada online-ka ah.',
  },
  {
    question: 'Xilliyo discount ah ma jiraan?',
    answer: 'Haa. Suuqyada caalamiga ah waxay leeyihiin xilliyo kala duwan oo qiimo-dhimis ah, waxaana isku daynaa inaan ka faa\'iidaysanno xilliyadaas.',
  },
  {
    question: 'Macluumaadka isbeddelka suuqyada xaggee kala socotaan?',
    answer: 'Waxaan kala soconnaa barahayaga bulshada iyo suuqyada aan ka shaqayno, waxaana macaamiisheena la wadaagnaa wararka, alaabooyinka iyo fursadaha muhiimka ah.',
  },
  {
    question: 'Ma jiraan dhibaatooyin aad xallisaan?',
    answer: 'Haa. Waxaan horey u xallinay dhibaatooyin badan oo la xiriira dalabka, suppliers-ka, qiimaha, shipping-ka iyo habka keenista.',
  },
  {
    question: 'Ma jiraan alaabo aad waydeen ama aan idin soo gaadhin?',
    answer: 'Alxamdulillaah, alaabihii aan dalabnay waxay si toos ah noo soo gaadheen. Waxaan ku dadaalnaa inaan si taxaddar leh u dooranno suppliers-ka iyo habka shipping-ka.',
  },
];

export default function HowItWorksPage() {
  const [stepsRef, stepsInView] = useInView({ threshold: 0.05 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <div className="pt-20">
      <PageHero
        label="HABKA DALBASHADA"
        title="Sida Loo Dalbado"
        subtitle="SABCAH Online Marketing waxay kuu fududaynaysaa habka aad alaab uga dalban karto suuqyada online-ka ah."
        image="/How It Works page.jpg"
        alt="How to order with SABCAH"
      />
      <div className="relative z-10 -mt-20 mb-0 container-custom">
        <a href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20order%20a%20product." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <WhatsAppIcon size={18} />
          Bilow Hadda
        </a>
      </div>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={stepsRef} className={`text-center mb-16 transition-all duration-700 ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label justify-center">HABKA</p>
            <h2 className="text-display text-navy-900">4 Tallabooyin oo <span className="text-accent-500">Fudud</span></h2>
          </div>

          <div className={`mb-12 overflow-hidden rounded-[2rem] shadow-xl ${stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`} style={{ transitionDelay: '100ms' }}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
              <img
                src="/Package.jpeg"
                alt="SABCAH order package"
                className="relative h-56 w-full object-cover sm:h-72"
              />
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const [stepRef, stepInView] = useInView({ threshold: 0.2 });
              return (
                <div key={step.number} ref={stepRef} className={`transition-all duration-600 ${stepInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-white shadow-lg">
                        <Icon size={28} />
                      </div>
                      <div className="lg:hidden">
                        <span className="text-xs font-semibold text-navy-400">TALLABO {step.number}</span>
                        <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-navy-50/50 p-6 lg:p-8">
                      <div className="hidden mb-3">
                        <span className="text-xs font-semibold text-navy-400">TALLABO {step.number}</span>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-navy-900 mb-2">{step.title}</h3>
                      <p className="text-sm font-semibold text-accent-500 mb-3">{step.subtitle}</p>
                      <p className="text-navy-500 leading-relaxed">{step.description}</p>
                      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2 rounded-xl bg-white p-3 ring-1 ring-navy-100/50">
                            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-accent-500" />
                            <span className="text-xs font-medium text-navy-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex justify-center py-2">
                      <div className="h-8 w-px bg-gradient-to-b from-navy-200 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div ref={faqRef} className={`transition-all duration-700 ${faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500">
                <HelpCircle size={28} />
              </div>
              <h2 className="text-display text-navy-900">Su'aalaha <span className="text-accent-500">Badan</span> La Iska Weydiiyo</h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display text-navy-900">Sideen Kuu <span className="text-accent-500">Caawin</span> Karaa?</h2>
            <p className="mt-4 text-navy-500 max-w-lg mx-auto">
              Noo soo dir fariin WhatsApp ah. Waxaad noo soo diri kartaa sawirka, link-ga, magaca alaabta, iyo tirada
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <a href="https://wa.me/252672338937" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center rounded-2xl bg-navy-50/50 p-6 text-center ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <p className="mt-3 font-semibold text-navy-900">WhatsApp</p>
              <p className="mt-1 text-sm text-navy-500">+252 672 338 937</p>
            </a>
            <a href="tel:+252638587502" className="group flex flex-col items-center rounded-2xl bg-navy-50/50 p-6 text-center ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <p className="mt-3 font-semibold text-navy-900">Call</p>
              <p className="mt-1 text-sm text-navy-500">063 858 7502</p>
            </a>
            <a href="mailto:onlinesabcah@gmail.com" className="group flex flex-col items-center rounded-2xl bg-navy-50/50 p-6 text-center ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-600 text-white group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <p className="mt-3 font-semibold text-navy-900">Email</p>
              <p className="mt-1 text-sm text-navy-500">onlinesabcah@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative overflow-hidden gradient-accent py-20 lg:py-24">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="container-custom relative z-10">
          <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-display text-white">Diyaar Ma U Tahay inaad Dalabka Bilowdo?</h2>
            <p className="mt-5 text-lg text-white/80">Noo soo dir sawirka, magaca ama link-ga alaabta aad rabto.</p>
            <div className="mt-8">
              <a href="https://wa.me/252672338937?text=Hi%20SABCAH!%20I%27d%20like%20to%20order%20a%20product." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-accent-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
                <WhatsAppIcon size={22} className="text-whatsapp" />
                Dalbo Hadda: WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
