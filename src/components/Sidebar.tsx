import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryItem {
  key: string;
  path?: string;
  children?: CategoryItem[];
}

export default function Sidebar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

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
    <aside className="w-64 bg-[#e8ecf1] border-r">
      <div className="p-4">
        {categories.map((category) => {
          const isActive = category.path && location.pathname === category.path;

          return (
            <div key={category.key} className="mb-1">
              {category.path ? (
                <Link
                  to={category.path}
                  className={`block px-3 py-2 text-sm rounded transition-colors ${
                    isActive
                      ? "bg-white font-semibold text-[#d7266b]"
                      : "text-gray-800 hover:bg-white"
                  }`}
                >
                  {getCategoryName(category.key)}
                </Link>
              ) : (
                <button
                  onClick={() => toggleCategory(category.key)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-white rounded transition-colors text-left"
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
  );
}
