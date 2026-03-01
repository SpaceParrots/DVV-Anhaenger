import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { HomePage } from "./components/HomePage";
import { StationenPage } from "./components/StationenPage";
import { FuhrparkPage } from "./components/FuhrparkPage";
import { LegalesPage } from "./components/LegalesPage";
import { KontaktPage } from "./components/KontaktPage";
import { DatenschutzPage } from "./components/DatenschutzPage";
import { AGBPage } from "./components/AGBPage";
import { WiderrufsrechtPage } from "./components/WiderrufsrechtPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [navigationState, setNavigationState] = useState<any>(null);

  const handleNavigate = (page: string, state?: any) => {
    setCurrentPage(page);
    setNavigationState(state);

    // Scroll to top unless we're navigating to a specific product/station highlight
    if (!state?.vehicle) {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Use 'auto' for an immediate jump when switching pages
      });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "stationen":
        return <StationenPage highlightedVehicle={navigationState?.vehicle} />;
      case "fuhrpark":
        return <FuhrparkPage onNavigate={handleNavigate} />;
      case "legales":
        return <LegalesPage onNavigate={handleNavigate} />;
      case "datenschutz":
        return (
          <DatenschutzPage
            onBack={() => setCurrentPage("legales")}
          />
        );
      case "agb":
        return (
          <AGBPage onBack={() => setCurrentPage("legales")} />
        );
      case "widerrufsrecht":
        return (
          <WiderrufsrechtPage
            onBack={() => setCurrentPage("legales")}
          />
        );
      case "kontakt":
        return <KontaktPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter',sans-serif]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2"
      >
        Zum Hauptinhalt springen
      </a>
      <TopBar />
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main id="main-content" className="container mx-auto">
        {renderPage()}
        <Footer onNavigate={handleNavigate} />
      </main>
      <BottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Hide scrollbar globally */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Safe area support for iOS */
        .safe-area-inset-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}