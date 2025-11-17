import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "SWISSTEN BEZDRÁTOVÁ NABÍJEČKA MagPuck Qi2 1.5 M (kompatibilní s MagSafe)",
    code: "22055560",
    description: "SWISSTEN MagPuck Qi2 bezdrátová nabíječka, Výkon až 15 W, MagSafe kompatibilní, Podpora iPhone 12+, Samsung S23-S25, AirPods, Konektor USB-C 1,5 m, Hmotnost 62 g, Rozměry 59 × 7 mm. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN BEZDRÁTOVÁ NABÍJEČKA EXACT 3v1 PRO iPHONE, APPLE WATCH A AIRPODS",
    code: "22055100",
    description: "Bezdrátová nabíjecí stanice SWISSTEN Exact 3v1 je ideální pro současné nabíjení iPhone, Apple Watch a AirPods. Kompaktní design, rychlé nabíjení 15W, LED indikace. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN BEZDRÁTOVÁ NABÍJEČKA METAL 15W",
    code: "22055400",
    description: "Elegantní bezdrátová nabíječka SWISSTEN Metal s výkonem až 15W. Podpora rychlého nabíjení pro iPhone a Android. Tenký hliníkový design. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN BEZDRÁTOVÁ NABÍJEČKA HALO 15W",
    code: "22055300",
    description: "Bezdrátová nabíječka SWISSTEN Halo s RGB podsvícením a výkonem 15W. Moderní design s LED efekty, ochrana proti přehřátí. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN BEZDRÁTOVÁ NABÍJEČKA 2v1 PRO iPHONE A APPLE WATCH",
    code: "22055200",
    description: "Dvojitá bezdrátová nabíječka pro iPhone a Apple Watch. Výkon 15W + 2,5W, skládací konstrukce, cestovní pouzdro v balení. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
];

const subcategories = [
  {
    name: "Stolní",
    nameEn: "Desktop",
    count: 9,
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
  {
    name: "Do auta",
    nameEn: "For car",
    count: 5,
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
  },
  {
    name: "Bezdrátové power banky",
    nameEn: "Wireless power banks",
    count: 6,
    image: "https://ext.same-assets.com/1625354228/3700732775.jpeg",
  },
  {
    name: "Pro Apple Watch",
    nameEn: "For Apple Watch",
    count: 14,
    image: "https://ext.same-assets.com/1625354228/2261583024.jpeg",
  },
  {
    name: "Magsafe kompatibilní",
    nameEn: "MagSafe compatible",
    count: 14,
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
  },
  {
    name: "Qi2",
    nameEn: "Qi2",
    count: 4,
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
  },
];

export default function WirelessChargingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.wirelessCharging}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e] mb-4">{t.wirelessCharging.toUpperCase()}</h1>
        
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
          <ProductCard key={product.code} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm" disabled>
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
      </div>
    </div>
  );
}
