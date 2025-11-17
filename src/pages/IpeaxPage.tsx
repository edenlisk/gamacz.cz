import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "iPEAX DATOVÝ KABEL USB-C/LIGHTNING 1,2 M BÍLÝ",
    code: "71519100",
    description: "Kabel iPeax USB-C na Lightning, Délka: 1,2 m, Barva: bílá, Podpora rychlonabíjení, Certifikace MFi, Kompatibilní s iPhone a iPad. Baleno v blistru iPeax.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
  },
  {
    title: "iPEAX DATOVÝ KABEL USB-C/LIGHTNING 1,2 M ČERNÝ",
    code: "71519110",
    description: "Kabel iPeax USB-C na Lightning, Délka: 1,2 m, Barva: černá, Podpora rychlonabíjení, Certifikace MFi, Kompatibilní s iPhone a iPad. Baleno v blistru iPeax.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: false,
  },
  {
    title: "iPEAX SÍŤOVÝ ADAPTÉR 1x USB-C 20W PD BÍLÝ",
    code: "72071100",
    description: "Nabíječka iPeax, max. výkon 20 Wattů, 1x USB-C PD 3.0, Ochrana proti zkratování a přepětí, Kompaktní rozměry. Baleno v blistru iPeax.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
  {
    title: "iPEAX AUTONABÍJEČKA 1x USB-C 20W PD + 1x USB-A 18W QC",
    code: "73071100",
    description: "Autonabíječka iPeax, max. výkon 20 Wattů, 1x USB-C PD + 1x USB-A QC 3.0, Ochrana proti zkratování, Kompaktní design. Baleno v blistru iPeax.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: false,
  },
  {
    title: "iPEAX MAGNETICKÝ DRŽÁK DO VENTILACE AUTA",
    code: "75010100",
    description: "Držák iPeax do ventilace auta, magnetický, Silné magnety, Snadná instalace, 360° rotace, Univerzální použití. Baleno v blistru iPeax.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
  {
    title: "iPEAX BLUETOOTH SLUCHÁTKA TWS",
    code: "76107100",
    description: "Sluchátka iPeax TWS, Bluetooth 5.0, Výdrž baterie až 6 hodin, Nabíjecí pouzdro, Ovládací tlačítka, Mikrofon pro hovory. Baleno v blistru iPeax.",
    image: "https://ext.same-assets.com/1625354228/1566001279.jpeg",
    isNew: false,
  },
];

const subcategories = [
  {
    name: "iPeax kabely",
    nameEn: "iPeax cables",
    count: 17,
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
  },
  {
    name: "iPeax nabíječky",
    nameEn: "iPeax chargers",
    count: 8,
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
  {
    name: "iPeax autonabíječky",
    nameEn: "iPeax car chargers",
    count: 4,
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
  },
  {
    name: "iPeax držáky",
    nameEn: "iPeax holders",
    count: 5,
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
  },
  {
    name: "iPeax sluchátka",
    nameEn: "iPeax headphones",
    count: 5,
    image: "https://ext.same-assets.com/1625354228/1566001279.jpeg",
  },
  {
    name: "iPeax transmitter",
    nameEn: "iPeax transmitter",
    count: 1,
    image: "https://ext.same-assets.com/1625354228/2657033933.jpeg",
  },
  {
    name: "iPeax pouzdra",
    nameEn: "iPeax cases",
    count: 1,
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
  {
    name: "iPeax powerbanky",
    nameEn: "iPeax power banks",
    count: 3,
    image: "https://ext.same-assets.com/1625354228/3700732775.jpeg",
  },
  {
    name: "iPeax adaptéry",
    nameEn: "iPeax adapters",
    count: 5,
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
];

export default function IpeaxPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">iPEAX</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e] mb-4">iPEAX</h1>
        
        {/* Subcategories */}
        <div className="bg-white border rounded p-4 mb-4">
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
            <span>iPEAX</span>
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
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>{language === 'cs' ? 'Speciální nabídka' : 'Special offer'}</span>
          </label>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">{t.search}:</span>
          <Select defaultValue="branch">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="branch">{language === 'cs' ? 'v této větvi' : 'in this branch'}</SelectItem>
              <SelectItem value="all">{language === 'cs' ? 've všech' : 'in all'}</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder={language === 'cs' ? 'Text' : 'Text'} className="max-w-xs" />
          <Button className="bg-[#d7266b] hover:bg-[#ce2867]">{t.searchButton}</Button>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <span className="text-sm">{t.sortBy}:</span>
          <Select defaultValue="name">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">{t.defaultSort}</SelectItem>
              <SelectItem value="date">{language === 'cs' ? 'data' : 'date'}</SelectItem>
              <SelectItem value="code">{language === 'cs' ? 'kódu' : 'code'}</SelectItem>
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {products.map((product) => (
          <ProductCard key={product.code} {...product} manufacturer="iPEAX" />
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
