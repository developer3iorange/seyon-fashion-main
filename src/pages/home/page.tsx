import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import TickerSection from './components/TickerSection';
import StatsSection from './components/StatsSection';
import BentoGrid from './components/BentoGrid';
import ManufacturingExpertise from './components/ManufacturingExpertise';
import ProcessFlow from './components/ProcessFlow';
import WorldMap from './components/WorldMap';
import ClientsSection from './components/ClientsSection';
import FooterCTA from './components/FooterCTA';

const HomePage = () => (
  <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
    <Navbar />
    <main>
      <HeroSection />
      <TickerSection />
      <StatsSection />
      <BentoGrid />
      <ManufacturingExpertise />
      <ProcessFlow />
      <WorldMap />
      <ClientsSection />
      <FooterCTA />
    </main>
    <Footer />
  </div>
);

export default HomePage;
