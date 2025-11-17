import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext";
import { Menu } from "lucide-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PripravujemePage from "./pages/PripravujemePage";
import NabijeniPage from "./pages/NabijeniPage";
import IpeaxPage from "./pages/IpeaxPage";
import MagsafePage from "./pages/MagsafePage";
import WirelessChargingPage from "./pages/WirelessChargingPage";
import CarChargingPage from "./pages/CarChargingPage";
import SolarChargingPage from "./pages/SolarChargingPage";
import CablesPage from "./pages/CablesPage";
import CasesPage from "./pages/CasesPage";
import ScreenProtectionPage from "./pages/ScreenProtectionPage";
import RegistrationPage from "./pages/RegistrationPage";
import HoldersPage from "./pages/HoldersPage";
import BikeHoldersPage from "./pages/BikeHoldersPage";
import VendingPage from "./pages/VendingPage";
import EasyLockPage from "./pages/EasyLockPage";

function AppContent() {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed bottom-6 right-6 z-30 bg-[#d7266b] text-white p-4 rounded-full shadow-lg hover:bg-[#ce2867] transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <main className="flex-1 w-full lg:w-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pripravujeme" element={<PripravujemePage />} />
            <Route path="/nabijeni-do-site" element={<NabijeniPage />} />
            <Route path="/ipeax" element={<IpeaxPage />} />
            <Route path="/magsafe" element={<MagsafePage />} />
            <Route path="/wireless-charging" element={<WirelessChargingPage />} />
            <Route path="/car-charging" element={<CarChargingPage />} />
            <Route path="/solar-charging" element={<SolarChargingPage />} />
            <Route path="/cables" element={<CablesPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/screen-protection" element={<ScreenProtectionPage />} />
            <Route path="/holders" element={<HoldersPage />} />
            <Route path="/bike-holders" element={<BikeHoldersPage />} />
            <Route path="/vending" element={<VendingPage />} />
            <Route path="/easy-lock" element={<EasyLockPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <SidebarProvider>
        <Router>
          <AppContent />
        </Router>
      </SidebarProvider>
    </LanguageProvider>
  );
}

export default App;
