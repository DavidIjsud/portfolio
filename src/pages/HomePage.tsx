import Header from '../components/Header';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Trusted from '../sections/Trusted';
import Work from '../sections/Work';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink">
      <Header />
      <Hero />
      <Trusted />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
