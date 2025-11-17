import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === "/";
  const isRegistration = path === "/registration";
  const isProducts = !isHome && !isRegistration;

  return (
    <header className="bg-white">
      {/* Top bar with language flags */}
      <div className="bg-[#6780a8] text-white px-6 py-1.5 flex justify-end gap-3">
        <button 
          onClick={() => setLanguage('cs')} 
          className={`hover:opacity-80 transition-opacity ${language === 'cs' ? 'opacity-100' : 'opacity-70'}`}
          title="Czech"
        >
          <img src="https://ext.same-assets.com/1625354228/245491140.gif" alt="CZ" className="h-4" />
        </button>
        <button 
          className="hover:opacity-80 transition-opacity opacity-70"
          title="Slovak"
        >
          <img src="https://ext.same-assets.com/1625354228/2941860903.gif" alt="SK" className="h-4" />
        </button>
        <button 
          className="hover:opacity-80 transition-opacity opacity-70"
          title="Polish"
        >
          <img src="https://ext.same-assets.com/1625354228/3995751842.gif" alt="PL" className="h-4" />
        </button>
        <button 
          onClick={() => setLanguage('en')} 
          className={`hover:opacity-80 transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-70'}`}
          title="English"
        >
          <img src="https://ext.same-assets.com/1625354228/607630629.gif" alt="GB" className="h-4" />
        </button>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <img
            src="https://ext.same-assets.com/1625354228/1701215901.png"
            alt="GAMACZ"
            className="h-10"
          />
          <span className="text-xs text-gray-600 mt-0.5">gsm accessories</span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="flex">
            <Input
              placeholder={language === 'cs' ? 'Search term...' : 'Search term...'}
              className="rounded-r-none border-r-0 focus-visible:ring-0"
            />
            <Button className="bg-[#d7266b] hover:bg-[#ce2867] text-white px-6 rounded-l-none">
              SEARCH
            </Button>
          </div>
        </div>

        {/* Login and Cart Section */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold text-[#d7266b]">{t.login}</div>
            <div className="flex gap-2">
              <Input 
                placeholder="Login name" 
                className="h-7 text-xs w-32 px-2"
              />
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="h-7 text-xs w-32 px-2"
              />
              <Button className="h-7 px-3 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700">
                →
              </Button>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="w-3 h-3" />
                <span className="text-gray-600">{language === 'cs' ? 'Permanently logged in' : 'Permanently logged in'}</span>
              </label>
            </div>
            <div className="flex gap-2 text-xs">
              <Link to="/registration" className="text-[#d7266b] hover:underline">
                {language === 'cs' ? 'Registration' : 'Registration'}
              </Link>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-[#d7266b] hover:underline">
                {language === 'cs' ? 'New password' : 'New password'}
              </a>
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center gap-2 border-l pl-6">
            <ShoppingCart className="w-10 h-10 text-[#d7266b]" />
            <div className="text-sm">
              <div className="font-semibold">{language === 'cs' ? '0 položek' : '0 items'}</div>
              <div className="text-2xl font-bold text-[#00305e]">0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="bg-[#00305e] text-white px-6 py-2.5">
        <ul className="flex gap-8 text-sm font-semibold">
          <li
            className={`cursor-pointer transition-colors ${
              isHome ? "text-[#d7266b]" : "hover:text-[#d7266b]"
            }`}
          >
            <a href="#">{t.aboutUs}</a>
          </li>
          <li
            className={`cursor-pointer transition-colors ${
              isProducts ? "text-[#d7266b]" : "hover:text-[#d7266b]"
            }`}
          >
            <a href="#">{t.products}</a>
          </li>
          <li className="hover:text-[#d7266b] cursor-pointer transition-colors">
            <a href="#">{t.documents}</a>
          </li>
          <li
            className={`cursor-pointer transition-colors ${
              isRegistration ? "text-[#d7266b]" : "hover:text-[#d7266b]"
            }`}
          >
            <Link to="/registration">{t.yourCompany}</Link>
          </li>
          <li className="hover:text-[#d7266b] cursor-pointer transition-colors">
            <a href="#">{language === 'cs' ? 'KOŠÍK' : 'BASKET'}</a>
          </li>
          <li className="hover:text-[#d7266b] cursor-pointer transition-colors">
            <a href="#">{t.login.toUpperCase()}</a>
          </li>
        </ul>
      </nav>

      {/* Sub-navigation links */}
      <div className="bg-gray-50 px-6 py-1.5 text-xs text-gray-600 border-b">
        <div className="flex gap-3">
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Company profile' : 'Company profile'}</a>
          <span>|</span>
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Terms and conditions' : 'Terms and conditions'}</a>
          <span>|</span>
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Privacy Policy' : 'Privacy Policy'}</a>
          <span>|</span>
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Contacts' : 'Contacts'}</a>
        </div>
      </div>
    </header>
  );
}
