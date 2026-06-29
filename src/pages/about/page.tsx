import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AboutHero from './components/AboutHero';
import FounderStory from './components/FounderStory';
import MissionVision from './components/MissionVision';
import TimelineSection from './components/TimelineSection';
import ValuesSection from './components/ValuesSection';
import WorkforceSection from './components/WorkforceSection';
import FooterCTA from '../home/components/FooterCTA';

const AboutPage = () => (
  <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
    <Navbar />
    <main>
      <AboutHero />
      <FounderStory />
      <MissionVision />
      <TimelineSection />
      <ValuesSection />
      <WorkforceSection />
      <FooterCTA />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
