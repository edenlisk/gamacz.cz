import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b">
      {/* Top bar with language flags */}
      <div className="bg-[#6780a8] text-white px-4 py-1 flex justify-end gap-2">
        <img src="https://ext.same-assets.com/1625354228/245491140.gif" alt="CZ" className="h-4" />
        <img src="https://ext.same-assets.com/1625354228/2941860903.gif" alt="SK" className="h-4" />
        <img src="https://ext.same-assets.com/1625354228/3995751842.gif" alt="PL" className="h-4" />
        <img src="https://ext.same-assets.com/1625354228/607630629.gif" alt="GB" className="h-4" />
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://ext.same-assets.com/1625354228/1701215901.png"
            alt="GAMACZ"
            className="h-12"
          />
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="flex gap-2">
            <Input
              placeholder="Hledaný výraz..."
              className="flex-1"
            />
            <Button className="bg-[#d7266b] hover:bg-[#ce2867] text-white px-6">
              HLEDAT
            </Button>
          </div>
        </div>

        {/* Login and Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4" />
            <span>Přihlášení</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <div className="text-sm">
              <div>0 položek</div>
              <div className="font-bold">0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="bg-[#00305e] text-white px-6 py-2">
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-[#d7266b] cursor-pointer">O NÁS</li>
          <li className="hover:text-[#d7266b] cursor-pointer">PRODUKTY</li>
          <li className="hover:text-[#d7266b] cursor-pointer">DOKUMENTY</li>
          <li className="hover:text-[#d7266b] cursor-pointer">VAŠE FIRMA</li>
          <li className="hover:text-[#d7266b] cursor-pointer">KOŠÍK</li>
          <li className="hover:text-[#d7266b] cursor-pointer">PŘIHLÁŠENÍ</li>
        </ul>
      </nav>
    </header>
  );
}
