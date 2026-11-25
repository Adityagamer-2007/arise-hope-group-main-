import React from 'react';
import { useNavigation } from './context/NavigationContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { GovernancePage } from './pages/GovernancePage';
import { FutureOutlookPage } from './pages/FutureOutlookPage';
import { ContactPage } from './pages/ContactPage';
import { MottoPage } from './pages/MottoPage';
import { CorporateProfilePage } from './pages/CorporateProfilePage';

export const App: React.FC = () => {
  const { currentPath } = useNavigation();

  // Route Dispatcher
  const renderCurrentPage = () => {
    const path = currentPath.split('?')[0].replace(/\/$/, '') || '/';

    if (path === '' || path === '/') {
      return <HomePage />;
    }
    if (path === '/about') {
      return <AboutPage />;
    }
    if (path === '/businesses') {
      return <BusinessesPage />;
    }
    if (path.startsWith('/businesses/')) {
      const sectorId = path.replace('/businesses/', '');
      return <SectorDetailPage sectorId={sectorId} />;
    }
    if (path === '/sustainability') {
      return <SustainabilityPage />;
    }
    if (path === '/governance') {
      return <GovernancePage />;
    }
    if (path === '/future-outlook') {
      return <FutureOutlookPage />;
    }
    if (path === '/corporate-profile') {
      return <CorporateProfilePage />;
    }
    if (path === '/motto') {
      return <MottoPage />;
    }
    if (path === '/contact') {
      return <ContactPage />;
    }

    return <HomePage />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F3] text-[#252A34] selection:bg-[#FF8A00] selection:text-white font-sans">
      <Navbar />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};
