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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "stationen":
        return <StationenPage />;
      case "fuhrpark":
        return <FuhrparkPage />;
      case "legales":
        return <LegalesPage onNavigate={setCurrentPage} />;
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
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter',sans-serif]">
      <TopBar />
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <div className="continer">{renderPage()}</div>
      <BottomNav
        currentPage={currentPage}
        onNavigate={setCurrentPage}
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