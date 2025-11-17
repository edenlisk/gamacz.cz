import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "DATOVÝ KABEL SWISSTEN USB/USB-C BÍLÝ 1,2M (SAMOPRODAVAČ)",
    code: "71506020BOX",
    description: "Datový kabel SWISSTEN USB/USB-C o délce 1,2m v balení pro doplnění samoprodavačů. Baleno v blistru SWISSTEN",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: false,
  },
  {
    title: "DATOVÝ KABEL SWISSTEN USB/MICRO USB BÍLÝ 1,2M (SAMOPRODAVAČ)",
    code: "71506010BOX",
    description: "Datový kabel SWISSTEN USB/microUSB o délce 1,2m v balení pro doplnění samoprodavačů. Baleno v blistru SWISSTEN",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
  {
    title: "DATOVÝ KABEL SWISSTEN USB/LIGHTNING BÍLÝ 1,2M (SAMOPRODAVAČ)",
    code: "71506030BOX",
    description: "Datový kabel SWISSTEN USB/lightning o délce 1,2m v balení pro doplnění samoprodavačů. Baleno v blistru SWISSTEN",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR SMART IC 2x USB 2,1A POWER BÍLÝ (SAMOPRODAVAČ)",
    code: "22034000BOX",
    description: "Kvalitní nabíječka s výstupním proudem 2,1A , technologií Smart IC a dvěma výstupy USB. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
  },
  {
    title: "DRŽÁK DO VENTILACE AUTA SWISSTEN S-GRIP AV-1 (SAMOPRODAVAČ)",
    code: "65010401BOX",
    description: "Držák do ventilace auta SWISSTEN S-GRIP AV-1 vyniká výborným poměrem cena/výkon. Na rozdíl od klasických držáků zabere minimum místa.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
];

const subcategories = [
  {
    name: "Samoprodavač",
    nameEn: "Vending machine",
    count: 9,
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
  },
];

export default function VendingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.vending}</span>
      </div>

      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#00305e] mb-4">{t.vending.toUpperCase()}</h1>
        
        {/* Subcategories */}
        <div className="bg-white border rounded p-4 mb-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {subcategories.map((sub) => (
              <button
                key={sub.name}
                className="border rounded flex flex-col items-center justify-center p-3 hover:shadow-sm transition-shadow bg-white"
              >
                <img
                  src={sub.image}
                  alt={sub.nameEn}
                  className="h-16 object-contain mb-2"
                />
                <span className="text-[11px] text-gray-700 text-center leading-tight">
                  {language === 'cs' ? sub.name : sub.nameEn}
                </span>
                <span className="text-[10px] text-gray-500 mt-1">{sub.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border rounded p-4 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-semibold">{t.manufacturer}:</span>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />
            <span>{t.all}</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>SWISSTEN</span>
          </label>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-semibold">{language === 'cs' ? 'Status produktu' : 'Product status'}:</span>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />
            <span>{language === 'cs' ? 'vše' : 'all'}</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>{t.newProduct}</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>{language === 'cs' ? 'Výprodej' : 'Sale'}</span>
          </label>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">{t.search}:</span>
          <Input placeholder={language === 'cs' ? 'Text' : 'Text'} className="max-w-xs" />
          <Button className="bg-[#d7266b] hover:bg-[#ce2867]">{t.searchButton}</Button>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <span className="text-sm">{t.sortBy}:</span>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={t.defaultSort} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">{t.defaultSort}</SelectItem>
              <SelectItem value="price-asc">{t.priceAsc}</SelectItem>
              <SelectItem value="price-desc">{t.priceDesc}</SelectItem>
            </SelectContent>
          </Select>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>{t.inStockOnly}</span>
          </label>
        </div>
      </div>

      {/* Product count */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">9 {t.items}</span>
        </div>
        <div className="text-sm">
          {language === 'cs' ? '1 stránka' : '1 page'}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {products.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm" disabled>
          1
        </Button>
      </div>
    </div>
  );
}
