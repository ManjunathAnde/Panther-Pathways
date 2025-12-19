import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ContentGrid } from './components/ContentGrid';
import { Footer } from './components/Footer';
import { Week1Guide } from './components/Week1Guide';
import { CommunicationTemplates } from './components/CommunicationTemplates';
import { HousingOverview } from './components/HousingOverview';
import { EmergencyContacts } from './components/EmergencyContacts';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ContentGrid />
      <Week1Guide />
      <EmergencyContacts />
      <CommunicationTemplates />
      <HousingOverview />
      <Footer />
      <ScrollToTop />
    </div>
  );
}