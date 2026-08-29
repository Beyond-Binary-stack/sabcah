import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Platforms from '../components/Platforms';
import Categories from '../components/Categories';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatsAppCta from '../components/WhatsAppCta';
import Testimonials from '../components/Testimonials';
import FinalCta from '../components/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Platforms />
      <Categories />
      <WhyChooseUs />
      <WhatsAppCta />
      <Testimonials />
      <FinalCta />
    </>
  );
}
