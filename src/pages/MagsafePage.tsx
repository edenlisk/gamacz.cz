import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "POUZDRO SWISSTEN MagStick SHELL PRO APPLE IPHONE 17 PRO MAX ČERNÉ",
    code: "35503221",
    description: "Pouzdro SWISSTEN MagStick Shell je ideálním doplňkem, který skvěle ochrání Vaše zařízení a zároveň vynikne designem uhlíkových vláken. Pouzdro podporuje bezdrátové dobíjení MagSafe. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: true,
  },
  {
    title: "POUZDRO SWISSTEN CLEAR JELLY MagStick PRO APPLE IPHONE 15 PRO MAX TRANSPARENTNÍ",
    code: "33001721",
    description: "Elegantní čiré pouzdro SWISSTEN MagStick vhodné pro dobíjení MagSafe. Baleno v blistru SWISSTEN",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN POWER BANK 20000 mAh PD 22,5W S INTEGROVANÝMI KABELY USB-C A LIGHTNING (kompatibilní s MagSafe)",
    code: "22013934",
    description: "Powerbanka Swissten MagSafe 20.000 mAh, Max. výkon 22,5 Wattů, 1x USB-C / 1x USB-A / 1x kabel USB-C / 1x kabel Lightning / 1x Qi 15W Bezdrátové nabíjení, Typ baterie: Li-polymer, Rozměry: (129 x 73 x 30 mm). Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/3700732775.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN POWER BANK 10000 mAh PD 22,5W S INTEGROVANÝMI KABELY USB-C A LIGHTNING (kompatibilní s MagSafe)",
    code: "22013933",
    description: "Powerbanka Swissten MagSafe 10.000 mAh, Max. výkon 22,5 Wattů, 1x USB-C / 1x USB-A / 1x kabel USB-C / 1x kabel Lightning / 1x Qi 15W Bezdrátové nabíjení, Typ baterie: Li-polymer, Malé rozměry: (113 x 72 x 22 mm). Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/1215611447.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN MAGNETICKÝ DRŽÁK DO VENTILACE AUTA MagStick COMPACT (kompatibilní s MagSafe)",
    code: "65010800",
    description: "Swissten magnetický držák na mobilní telefon disponuje přichycením MagSafe, což způsobí, že Váš iPhone bude vždy perfektně držet. Zároveň díky kloubu, který drží magnet si pohodlně nastavíte a zafixujete úhel telefonu. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
  {
    title: "MAGNETICKÝ DRŽÁK DO VENTILACE AUTA SWISSTEN MagRide S BEZDRÁTOVÝM NABÍJENÍM Qi2 15W (kompatibilní s MagSafe)",
    code: "65010612",
    description: "Swissten MagRide držák do auta, Qi2 bezdrátové nabíjení až 15W, Pro iPhone a Android, MagSafe kompatibilní, Silné magnety, USB-C vstup 36W, Kompaktní rozměry 94 × 60 × 40 mm, Váha 98 g. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN BEZDRÁTOVÁ NABÍJEČKA MagPuck Qi2 1.5 M (kompatibilní s MagSafe)",
    code: "22055560",
    description: "SWISSTEN MagPuck Qi2 bezdrátová nabíječka, Výkon až 15 W, MagSafe kompatibilní, Podpora iPhone 12+, Samsung S23-S25, AirPods, Konektor USB-C 1,5 m, Hmotnost 62 g, Rozměry 59 × 7 mm. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN BLUETOOTH SELFIE STICK TRIPOD (kompatibilní s MagSafe)",
    code: "32000500",
    description: "SWISSTEN Bluetooth Selfie Stick Tripod, MagSafe držák, Bluetooth 5.2, Dálkové ovládání 10 m, Délka 21-105 cm, 7 sekcí, Váha 180 g, Stativ s protiskluzovými nožkami. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2657033933.jpeg",
    isNew: true,
  },
];

export default function MagsafePage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.magsafe}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e]">{t.magsafe.toUpperCase()}</h1>
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

        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-4">
          <span className="text-sm">{language === 'cs' ? 'Zobrazení' : 'View'}:</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-[#d7266b] text-white">
              {language === 'cs' ? 'Galerie' : 'Gallery'}
            </Button>
            <Button variant="outline" size="sm">
              {language === 'cs' ? 'Řádkové' : 'List'}
            </Button>
          </div>
        </div>
        <div className="text-sm">
          {t.itemsPerPage}: <span className="font-semibold">{products.length} {t.items}</span>
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
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          5
        </Button>
        <Button variant="outline" size="sm">
          6
        </Button>
      </div>
    </div>
  );
}
