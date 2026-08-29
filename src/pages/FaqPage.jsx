import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import FaqAccordion from '../components/FaqAccordion';
import { HelpCircle, Search, MessageCircle, Phone, Mail } from 'lucide-react';

const faqCategories = [
  {
    category: 'Dalbashada',
    questions: [
      { question: 'Ma dalban karaa hal xabbo?', answer: 'Haa. Waxaad dalban kartaa hal alaab, haddii nooca alaabta iyo shuruudaha supplier-ku oggol yihiin.' },
      { question: 'Ma dalban karaa alaab tafaariiq ah?', answer: 'Haa. Waxaad noo soo diri kartaa sawirka alaabta aad rabto, annaga ayaa kuu dalbaya, kadibna kuu keenaya. Kharashka KG-ga waxaa lala qaybsan karaa macaamiisha kale ee shipment-ka.' },
      { question: 'Ma dalban karaa alaab jumlad ah?', answer: 'Haa. Waxaan sidoo kale kaa caawin karnaa dalabaadka jumlada. Markaad noo soo dirto alaabta aad rabto, waxaan isbarbardhigaynaa companies/suppliers kala duwan.' },
      { question: 'Sidee aan u dalbadaa alaab?', answer: 'Noo soo dir sawirka, magaca ama link-ga alaabta aad rabto. Waxaan kuu soo hubinaynaa qiimaha iyo kharashyada, markaas ka dib waxaad xaqiijinaysaa dalabka.' },
    ],
  },
  {
    category: 'Qiimaha & Kharashyada',
    questions: [
      { question: 'Sidee loo xisaabiyaa qiimaha?', answer: 'Waxaan hubinnaa qiimaha alaabta, kharashka shipping-ka, iyo wax kasta oo la xiriira. Waxaan kuu soo gudbinaynaa faahfaahinta oo dhan ka hor inta aan dalabka la samayn.' },
      { question: 'Xilliyo discount ah ma jiraan?', answer: "Haa. Suuqyada caalamiga ah waxay leeyihiin xilliyo kala duwan oo qiimo-dhimis ah, waxaana isku daynaa inaan ka faa'iidaysanno xilliyadaas si macaamiisheena ay u helaan qiimooyin wanaagsan." },
    ],
  },
  {
    category: 'Shipping & Gaarsiinta',
    questions: [
      { question: 'Intee ayay qaadataa alaabta tafaariiqda?', answer: 'Alaabta tafaariiqda badanaa waxay ku soo gaadhi kartaa qiyaastii 12 maalmood ilaa dhammaadka 2 toddobaad, iyadoo ku xiran meesha alaabtu ka imanayso iyo shipping-ka.' },
      { question: 'Sidee ayay dalabyada jumlada u yimaadaan?', answer: 'Dalabyada jumlada waxaa lagu keeni karaa laba hab: 1. Diyaarad (Air): qiyaastii 3 toddobaad. 2. Markab (Sea): illaa qiyaastii 2 bilood.' },
      { question: 'Diyaaradmise Markab: Kee igu habboon?', answer: 'Annaga ayaa kuu sharxaynaa labada option ka hor inta aan dalabka la samayn. Markaan ogaanno nooca alaabtaada, tirada, waqtiga aad u baahan tahay iyo kharashka ku habboon.' },
      { question: 'Xaggee ayaad alaabta ku keenaysaan?', answer: 'Waxaan alaabta kuugu keenaynaa meesha aad ka joogto dhulalka Soomaalida: Hargeisa, Garowe, Muqdisho, Burco, Jigjiga, Jabuuti, iyo meelo kale.' },
    ],
  },
  {
    category: 'Khibradda & Adeegga',
    questions: [
      { question: 'Alaabo hore ma u dalabteen?', answer: 'Haa. Alxamdulillaah, waxaan horey u dalabnay boqolaal products, waxaana ka mid ah alaabooyin ay dalbadeen macaamiil caadi ah, shakhsiyaad, ganacsato, meherado iyo goobo ganacsi.' },
      { question: 'Xaggee ka daawan karaa alaabihii aad keenteen?', answer: 'Waxaad ka daawan kartaa alaabooyinka iyo dalabyada aan keenno barahayaga bulshada, oo ay ka mid yihiin: TikTok, Telegram, WhatsApp Group, iyo Facebook.' },
      { question: 'Intee ayaad ka shaqaynayseen suuqyadan?', answer: 'Waxaan sanado badan ka shaqaynaynay dalbida iyo sourcing-ka alaabooyinka suuqyada online-ka ah.' },
      { question: 'Macluumaadka isbeddelka suuqyada xaggee kala socotaan?', answer: 'Waxaan kala soconnaa barahayaga bulshada iyo suuqyada aan ka shaqayno, waxaana macaamiisheena la wadaagnaa wararka, alaabooyinka iyo fursadaha muhiimka ah.' },
    ],
  },
  {
    category: 'Caqabadaha & Xallinta',
    questions: [
      { question: 'Ma jiraan dhibaatooyin aad xallisaan?', answer: 'Haa. Waxaan horey u xallinay dhibaatooyin badan oo la xiriira dalabka, suppliers-ka, qiimaha, shipping-ka iyo habka keenista.' },
      { question: 'Ma jiraan alaabo aad waydeen ama aan idin soo gaadhin?', answer: 'Alxamdulillaah, alaabihii aan dalabnay waxay si toos ah noo soo gaadheen. Waxaan ku dadaalnaa inaan si taxaddar leh u dooranno suppliers-ka iyo habka shipping-ka.' },
    ],
  },
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const allQuestions = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory
      ? faqCategories.find((c) => c.category === activeCategory)?.questions || []
      : allQuestions;

  return (
    <div className="pt-20">
      <PageHero
        label="FAQ"
        title="Su'aalaha Badan La Iska Weydiiyo"
        subtitle="Jawaabaha su'aalaha ugu caansan ee ku saabsan adeegyadayada"
        image="/FAQ page.jpg"
        alt="SABCAH frequently asked questions"
      />

      {/* Search + Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl mb-10">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveCategory(null);
                }}
                placeholder="Raadi su'aasha..."
                className="w-full rounded-2xl border border-navy-200 bg-navy-50/50 py-4 pl-12 pr-4 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => { setActiveCategory(null); setSearchQuery(''); }}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                !activeCategory && !searchQuery
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-navy-100 text-navy-600 hover:bg-navy-200'
              }`}
            >
              Dhammaan
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setActiveCategory(cat.category); setSearchQuery(''); }}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.category
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-navy-100 text-navy-600 hover:bg-navy-200'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            {filteredQuestions.length > 0 ? (
              <FaqAccordion items={filteredQuestions} />
            ) : (
              <div className="text-center py-12">
                <HelpCircle size={48} className="mx-auto text-navy-300" />
                <p className="mt-4 text-navy-500">Ma jiraan su'aalo la xiriira raadintaada.</p>
                <a href="https://wa.me/252672338937" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600">
                  Noo soo dir su'aasha <MessageCircle size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display text-navy-900">Wali Ma La <span className="text-accent-500">Jawaabin?</span></h2>
            <p className="mt-4 text-navy-500">
              Noo soo dir fariin WhatsApp ah. Waxaan kuu jawaabi doonaa sida ugu dhakhsiyaha badan.
            </p>
            <div className="mt-10 mb-10 overflow-hidden rounded-[2rem] shadow-xl text-left">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-accent-500/10 blur-2xl" />
                <img
                  src="/ShIpping Truck.jpeg"
                  alt="SABCAH support and delivery team"
                  className="relative h-52 w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a href="https://wa.me/252672338937" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <p className="mt-3 font-semibold text-navy-900">WhatsApp</p>
                <p className="mt-1 text-sm text-navy-500">+252 672 338 937</p>
              </a>
              <a href="tel:+252638587502" className="group flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <p className="mt-3 font-semibold text-navy-900">Call</p>
                <p className="mt-1 text-sm text-navy-500">063 858 7502</p>
              </a>
              <a href="mailto:onlinesabcah@gmail.com" className="group flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-navy-100/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-600 text-white group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <p className="mt-3 font-semibold text-navy-900">Email</p>
                <p className="mt-1 text-sm text-navy-500">onlinesabcah@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
