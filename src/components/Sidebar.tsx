import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryItem {
  key: string;
  path?: string;
  children?: CategoryItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { t } = useLanguage();
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Close sidebar on route change (mobile)
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const categories: CategoryItem[] = [
    { key: "preparing", path: "/pripravujeme" },
    { key: "ipeax", path: "/ipeax" },
    { key: "ecoPackaging", path: "/cases" }, // Map to cases page
    { key: "charging", path: "/nabijeni-do-site" },
    { key: "magsafe", path: "/magsafe" },
    { key: "wirelessCharging", path: "/wireless-charging" },
    { key: "carCharging", path: "/car-charging" },
    { key: "solarCharging", path: "/solar-charging" },
    { key: "cables", path: "/cables" },
    { key: "cases", path: "/cases" },
    { key: "screenProtection", path: "/screen-protection" },
    { key: "holders", path: "/holders" },
    { key: "bikeHolders", path: "/bike-holders" },
    { key: "vending", path: "/vending" },
    { key: "easyLock", path: "/easy-lock" },
    { key: "powerBanks", path: "/wireless-charging" }, // Map to wireless charging (has power banks)
    { key: "headphones", path: "/wireless-charging" }, // Map to wireless charging for now
    { key: "backpacks", path: "/cases" }, // Map to cases page
    { key: "speakers", path: "/wireless-charging" }, // Reproduktory
    { key: "fmTransmitters", path: "/car-charging" }, // FM Transmitery
    { key: "carPlay", path: "/car-charging" }, // CarPlay
    { key: "locators", path: "/cases" }, // Lokátory
    { key: "adapters", path: "/cables" }, // Adaptéry
    { key: "usbHub", path: "/cables" }, // USB-C HUB
    { key: "webCameras", path: "/cases" }, // Web kamery
    { key: "watchAccessories", path: "/cases" }, // Příslušenství pro Apple/Samsung Watch
    { key: "batteries", path: "/wireless-charging" }, // Baterie
    { key: "selfieSticks", path: "/cases" }, // Selfie tyče
    { key: "simCards", path: "/cases" }, // SIM karty
    { key: "touchGloves", path: "/cases" }, // Rukavice s dotykem
    { key: "displays", path: "/screen-protection" }, // Displeje
    { key: "perfumes", path: "/car-charging" }, // Vůně
    { key: "smallElectro", path: "/wireless-charging" }, // Drobné elektro
    { key: "gamingAccessories", path: "/cases" }, // Herní příslušenství
    { key: "pcAccessories", path: "/cables" }, // PC příslušenství
    { key: "sale", path: "/cases" }, // Výprodej
    { key: "marketing", path: "/vending" }, // Marketing
  ];

  const toggleCategory = (categoryKey: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryKey)) {
      newExpanded.delete(categoryKey);
    } else {
      newExpanded.add(categoryKey);
    }
    setExpandedCategories(newExpanded);
  };

  const getCategoryName = (key: string): string => {
    // Direct label mappings (not using translations)
    const directLabels: Record<string, string> = {
      ipeax: 'iPEAX',
      ecoPackaging: 'ECO BALENÍ',
      speakers: 'REPRODUKTORY',
      fmTransmitters: 'FM TRANSMITERY',
      carPlay: 'CARPLAY',
      locators: 'LOKÁTORY',
      adapters: 'ADAPTÉRY',
      usbHub: 'USB-C HUB',
      webCameras: 'WEB KAMERY',
      watchAccessories: 'PŘÍSLUŠENSTVÍ PRO APPLE/SAMSUNG WATCH',
      batteries: 'BATERIE',
      selfieSticks: 'SELFIE TYČE',
      simCards: 'SIM KARTY',
      touchGloves: 'RUKAVICE S DOTYKEM',
      displays: 'DISPLEJE',
      perfumes: 'VŮNĚ',
      smallElectro: 'DROBNÉ ELEKTRO',
      gamingAccessories: 'HERNÍ PŘÍSLUŠENSTVÍ',
      pcAccessories: 'PC PŘÍSLUŠENSTVÍ',
      sale: 'VÝPRODEJ',
      marketing: 'MARKETING',
    };

    if (directLabels[key]) {
      return directLabels[key];
    }

    const mapping: Record<string, keyof typeof t> = {
      preparing: 'preparing',
      charging: 'charging',
      magsafe: 'magsafe',
      wirelessCharging: 'wirelessCharging',
      carCharging: 'carCharging',
      solarCharging: 'solarCharging',
      cables: 'cables',
      cases: 'cases',
      screenProtection: 'screenProtection',
      holders: 'holders',
      bikeHolders: 'bikeHolders',
      vending: 'vending',
      easyLock: 'easyLock',
      powerBanks: 'powerBanks',
      headphones: 'headphones',
      backpacks: 'backpacks',
    };
    return t[mapping[key] || 'preparing'] as string;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r shadow-sm
        transform transition-transform duration-300 ease-in-out
        lg:transform-none
        ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }
      `}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-2 border-b">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
            Catégories
          </h3>
          {categories.map((category) => {
            const isActive = category.path && location.pathname === category.path;

          return (
            <div key={category.key} className="mb-1">
              {category.path ? (
                <Link
                  to={category.path}
                  className={`block px-3 py-2 text-sm rounded transition-colors ${
                    isActive
                      ? "bg-blue-50 font-medium text-[#d7266b]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#d7266b]"
                  }`}
                >
                  {getCategoryName(category.key)}
                </Link>
              ) : (
                <button
                  onClick={() => toggleCategory(category.key)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#007bff] rounded transition-colors text-left"
                >
                  <span>{getCategoryName(category.key)}</span>
                  {category.children && (
                    expandedCategories.has(category.key) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )
                  )}
                </button>
              )}
            </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
