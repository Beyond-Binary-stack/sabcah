import { useInView } from '../hooks/useInView';

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

export default function Platforms() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container-custom relative z-10">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label !text-accent-400 before:!bg-accent-400">Suuqyada</p>
          <h2 className="text-display text-white">
             8 Suuqyo: <span className="text-accent-400">Midkasta.</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/50">
            Waxaan ka dalbannaa alaabooyin suuqyada ugu waaweyn ee caalamiga ah.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`group flex items-center gap-4 rounded-2xl bg-white/5 backdrop-blur-sm p-5 ring-1 ring-white/10 transition-all duration-500 hover:bg-white/10 hover:ring-white/20 hover:-translate-y-1 ${
                gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-lg">
                <img
                  src={platform.img}
                  alt={`${platform.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-white">{platform.name}</p>
                <p className="text-[11px] text-white/40">Marketplace</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/40">
          Iyo platforms kale oo badan. Noo soo dir alaabta aad rabto.
        </p>
      </div>
    </section>
  );
}
