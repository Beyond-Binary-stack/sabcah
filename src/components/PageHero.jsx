import { useInView } from '../hooks/useInView';

export default function PageHero({ label, title, subtitle, image, alt, badge, children }) {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden gradient-navy py-28 lg:py-40"
    >
      {/* Background Image */}
      {image && (
        <>
          <div className="absolute inset-0">
            <img
              src={image}
              alt={alt || ''}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-navy-900/40" />
        </>
      )}

      {/* Ambient Orbs */}
      {!image && (
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
      )}
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div
          className={`max-w-3xl transition-all duration-700 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {badge && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">
              {badge.icon && <badge.icon size={14} className="text-accent-400" />}
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                {badge.text}
              </span>
            </div>
          )}
          {label && (
            <p className="section-label !text-accent-400 before:!bg-accent-400">{label}</p>
          )}
          <h1 className="text-hero text-white">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
