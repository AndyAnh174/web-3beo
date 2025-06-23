import { useEffect, useState } from 'react';
import Cover from './components/cover';
import Logo from './components/logo';
import VideoSection from './components/VideoSection';
import ImageCarousel from './components/ImageCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-sans">
      <Cover />
      <Logo isSticky={scrolled} />
      <VideoSection />
      <ImageCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
}