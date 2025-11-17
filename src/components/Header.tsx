import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === "/";
  const isRegistration = path === "/registration";
  const isProducts = !isHome && !isRegistration;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Top bar with language flags */}
      <div className="bg-[#A83141] text-white px-3 md:px-6 py-1.5 flex justify-end gap-2 md:gap-3">
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
      <div className="flex items-center justify-between gap-2 px-2 md:px-6 py-2 md:py-4 bg-white border-b">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-1.5 hover:bg-gray-100 rounded flex-shrink-0"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex flex-col flex-shrink-0">
          <img
            src="https://suitecross.com/web/image/website/1/logo/suite%20cross?unique=f40a6d3"
            alt="SuiteCross"
            className="h-7 md:h-10"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='10' y='40' font-family='Arial' font-size='24' fill='%23333'%3ESuiteCross%3C/text%3E%3C/svg%3E";
            }}
          />
          <span className="text-xs text-gray-600 mt-0.5 hidden md:block">gsm accessories</span>
        </Link>

        {/* Desktop Search bar */}
        <div className="flex-1 max-w-xl mx-8 hidden lg:block">
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

        {/* Mobile: Search Toggle and Cart in flex container */}
        <div className="lg:hidden flex items-center gap-1.5 flex-shrink-0">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1.5 hover:bg-gray-100 rounded"
          >
            <Search className="w-4 h-4" />
          </button>
          
          {/* Mobile Cart Icon */}
          <div className="flex items-center gap-1.5 bg-[#f0f0f0] px-2 py-1.5 rounded">
            <ShoppingCart className="w-4 h-4 text-[#d7266b]" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold text-[#00305e]">0</span>
              <span className="text-[8px] text-gray-600">{language === 'cs' ? 'Kč' : 'CZK'}</span>
            </div>
          </div>
        </div>

        {/* Desktop Login and Cart Section */}
        <div className="hidden lg:flex items-center gap-6">
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
          <div className="flex items-center gap-3 border-l pl-6">
            <div className="bg-[#f0f0f0] p-3 rounded">
              <ShoppingCart className="w-8 h-8 text-[#d7266b]" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-gray-700">{language === 'cs' ? '0 položek' : '0 items'}</div>
              <div className="text-2xl font-bold text-[#00305e]">0 {language === 'cs' ? 'Kč' : 'CZK'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="lg:hidden px-3 py-3 border-b bg-gray-50">
          <div className="flex gap-2">
            <Input
              placeholder={language === 'cs' ? 'Search term...' : 'Search term...'}
              className="flex-1"
            />
            <Button className="bg-[#d7266b] hover:bg-[#ce2867] text-white px-4">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Navigation menu */}
      <nav className="hidden lg:block bg-[#580D17] text-white px-6 py-2.5">
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-[#00305e] text-white">
          <ul className="flex flex-col">
            <li className={`border-b border-white/10 ${
              isHome ? "bg-[#d7266b]/20" : ""
            }`}>
              <a href="#" className="block px-4 py-3 hover:bg-white/10">{t.aboutUs}</a>
            </li>
            <li className={`border-b border-white/10 ${
              isProducts ? "bg-[#d7266b]/20" : ""
            }`}>
              <a href="#" className="block px-4 py-3 hover:bg-white/10">{t.products}</a>
            </li>
            <li className="border-b border-white/10">
              <a href="#" className="block px-4 py-3 hover:bg-white/10">{t.documents}</a>
            </li>
            <li className={`border-b border-white/10 ${
              isRegistration ? "bg-[#d7266b]/20" : ""
            }`}>
              <Link to="/registration" className="block px-4 py-3 hover:bg-white/10">{t.yourCompany}</Link>
            </li>
            <li className="border-b border-white/10">
              <a href="#" className="block px-4 py-3 hover:bg-white/10">{language === 'cs' ? 'KOŠÍK' : 'BASKET'}</a>
            </li>
            <li>
              <Link to="/registration" className="block px-4 py-3 hover:bg-white/10">{t.login.toUpperCase()}</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Sub-navigation links */}
      <div className="hidden md:block bg-gray-50 px-3 md:px-6 py-1.5 text-xs text-gray-600 border-b">
        <div className="flex flex-wrap gap-2 md:gap-3">
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Company profile' : 'Company profile'}</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Terms and conditions' : 'Terms and conditions'}</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Privacy Policy' : 'Privacy Policy'}</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-[#d7266b]">{language === 'cs' ? 'Contacts' : 'Contacts'}</a>
        </div>
      </div>
    </header>
  );
}
