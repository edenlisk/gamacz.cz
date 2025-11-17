import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "SWISSTEN MAGNETICKÝ KABEL PRO SAMSUNG GALAXY WATCH, USB-C 1.2 M ČERNÝ",
    code: "22065511",
    description: "SWISSTEN Wireless Magnetic Charger pro Samsung Galaxy Watch, Kompatibilita: Active 1-Ultra, Vstup 5V DC 1A, Vstup 5V DC 0.5A / 2,5W, Délka kabelu 1,2 m, Váha 29 g. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/3819044957.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN MAGNETICKÝ KABEL 2v1 PRO SAMSUNG GALAXY WATCH A USB-C, USB-C (USB-A) 1.2 M ČERNÝ",
    code: "22065512",
    description: "Magnetický kabel Swissten 2v1, Pro Samsung Galaxy Watch 1-7 + Ultra, Výkon USB-C: až 60 W, Výkon pro hodinky: 2,5 W, Délka: 1,2 m, Váha: 42 g, Silikonové provedení. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2534178115.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN POWER BANK MagSafe Qi2 10000 mAh 15W S INTEGROVANÝM KABELEM USB-C ČERNÁ",
    code: "22013979",
    description: "Powerbanka SWISSTEN Qi2 10000 mAh, integrovaný USB-C kabel, 15W bezdrátové nabíjení Qi2 s MagSafe, Max. výkon 35W, Váha: 225 g, Typ baterie: Li-polymer, Rozměry: (75 × 72 × 30 mm). Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/3700732775.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN POWER BANK ALL-IN-ONE PRO S VÝMĚNNÝMI VIDLICEMI (USA, EU, UK) 10000 mAh 20W ČERNÁ",
    code: "22013978",
    description: "Powerbanka Swissten All-in-One Pro 10 000 mAh, Vyměnitelné vidlice C&E, G, A&B, USB-C PD 20 W, USB-A QC 18 W, MagSafe bezdrátové 15 W, Apple Watch 2,5 W, TWS 5 W, Vestavný USB-C kabel 12 cm, Pass through charging. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/1215611447.jpeg",
    isNew: true,
  },
  {
    title: "BLUETOOTH SLUCHÁTKA SWISSTEN NA PLAVÁNÍ BONE CONDUCTION",
    code: "51107092",
    description: "SWISSTEN Bone Conduction, IP68 vodotěsné, Paměť 32 GB, Výdrž hudby: 7 h, Váha: 34 g, Bluetooth 5.3, 2× magnetický kabel, Špunty do uší, Redukce USB-C/USB-A. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/1566001279.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN MAGNETICKÝ DRŽÁK DO VENTILACE AUTA AIRHOLD S BEZDRÁTOVÝM NABÍJENÍM 15W / 7,5W (kompatibilní s MagSafe)",
    code: "65010801",
    description: "SWISSTEN AIRHOLD je magnetický držák do ventilace s bezdrátovým nabíjením 15W (7,5W pro iPhone). Silné magnety, snadná instalace a moderní design zajistí bezpečné a pohodlné používání telefonu v autě. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2598141204.jpeg",
    isNew: true,
  },
];

export default function PripravujemePage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.preparing}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://ext.same-assets.com/1625354228/2261583024.jpeg"
            alt={t.preparing}
            className="w-24 h-24 object-contain bg-white p-2 border rounded"
          />
          <h1 className="text-2xl font-bold text-[#00305e]">{t.preparing.toUpperCase()}</h1>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border rounded p-4 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-semibold">{t.manufacturer}:</span>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>{t.all}</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>SWISSTEN</span>
          </label>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">{t.search}:</span>
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

      {/* Product count */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{products.length} {t.items}</span>
        </div>
        <div className="text-sm">
          {t.itemsPerPage}: <span className="font-semibold">15 {t.items}</span>
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
