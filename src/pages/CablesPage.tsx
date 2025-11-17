import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "Adaptateur audio textile USB-C/jack (femelle) 0,15 m",
    code: "SC-ADAPT-002",
    description: "Adaptateur audio textile USB-C vers jack 3,5 mm (femelle) de 0,15 m, idéal pour connecter vos écouteurs filaires à un appareil USB-C.",
    image: "https://suitecross.com/web/image/product.template/2/image_512/Adaptateur%20audio%20textile%20USB-C-jack%20(femelle)%200,15%20m?unique=a937089",
    isNew: false,
    price: "6,87 €",
  },
  {
    title: "CÂBLE AUDIO SWISSTEN TEXTILE JACK - JACK NOIR 1,5 M",
    code: "SC-CABLE-003",
    description: "Câble audio textile Swissten jack 3,5 mm vers jack 3,5 mm, longueur 1,5 m, finition noire résistante.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: false,
    price: "4,75 €",
  },
  {
    title: "DATA CABLE SWISSTEN KEVLAR USB / LIGHTNING 1.5 M ANTHRACITE",
    code: "SC-KEVLAR-USB-LIGHT",
    description: "Câble de données Swissten en Kevlar ultra-résistant, USB vers Lightning, 1,5 m, couleur anthracite.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
    price: "9,23 €",
  },
  {
    title: "DATA CABLE SWISSTEN KEVLAR USB / USB-C 1.5 M ANTHRACITE",
    code: "SC-KEVLAR-USB-USBC",
    description: "Câble de données Swissten en Kevlar ultra-résistant, USB vers USB-C, 1,5 m, couleur anthracite.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: false,
    price: "9,23 €",
  },
  {
    title: "DATA CABLE SWISSTEN KEVLAR USB-C / LIGHTNING 1.5 M ANTHRACITE",
    code: "SC-KEVLAR-USBC-LIGHT",
    description: "Câble de données Swissten en Kevlar, USB-C vers Lightning, 1,5 m, anthracite.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: true,
    price: "9,27 €",
  },
  {
    title: "DATA CABLE SWISSTEN KEVLAR USB-C / USB-C 1.5 M ANTHRACITE",
    code: "SC-KEVLAR-USBC-USBC",
    description: "Câble de données Swissten en Kevlar, USB-C vers USB-C, 1,5 m, anthracite.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: true,
    price: "9,27 €",
  },
  {
    title: "CÂBLE AUDIO SWISSTEN TEXTILE JACK 3,5 mm (mâle) - JACK 3,5 mm (mâle) 1,5 M NOIR",
    code: "SC-JACK-JACK-BLACK",
    description: "Câble audio textile jack mâle vers jack mâle 3,5 mm, 1,5 m, noir.",
    image: "https://ext.same-assets.com/1625354228/2548460716.jpeg",
    isNew: false,
    price: "4,75 €",
  },
  {
    title: "DATA CABLE SWISSTEN USB/LIGHTNING BLACK 1,2M (ECO PACK)",
    code: "SC-USB-LIGHT-ECO",
    description: "Câble de données Swissten USB vers Lightning, 1,2 m, noir, emballage écologique.",
    image: "https://ext.same-assets.com/1625354228/1215611447.jpeg",
    isNew: false,
    price: "7,91 €",
  },
];

const cableTypeCards = [
  {
    key: "usb-micro",
    labelCs: "USB/MICRO USB",
    labelEn: "USB/MICRO USB",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
  {
    key: "usb-usb-c",
    labelCs: "USB/USB-C",
    labelEn: "USB/USB-C",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
  },
  {
    key: "usb-lightning",
    labelCs: "USB/LIGHTNING",
    labelEn: "USB/LIGHTNING",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
  },
  {
    key: "usb-lightning-mfi",
    labelCs: "USB/LIGHTNING MFI",
    labelEn: "USB/LIGHTNING MFI",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
  },
  {
    key: "usb-c-usb-c",
    labelCs: "USB-C/USB-C",
    labelEn: "USB-C/USB-C",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
  },
  {
    key: "usb-c-lightning",
    labelCs: "USB-C/LIGHTNING",
    labelEn: "USB-C/LIGHTNING",
    image: "https://ext.same-assets.com/1625354228/2548460716.jpeg",
  },
  {
    key: "usb-c-lightning-mfi",
    labelCs: "USB-C/LIGHTNING MFI",
    labelEn: "USB-C/LIGHTNING MFI",
    image: "https://ext.same-assets.com/1625354228/1215611447.jpeg",
  },
  {
    key: "usb-c-micro",
    labelCs: "USB-C/MICRO USB",
    labelEn: "USB-C/MICRO USB",
    image: "https://ext.same-assets.com/1625354228/3778853354.jpeg",
  },
  {
    key: "2in1",
    labelCs: "2IN1",
    labelEn: "2IN1",
    image: "https://ext.same-assets.com/1625354228/2657033933.jpeg",
  },
  {
    key: "3in1",
    labelCs: "3IN1",
    labelEn: "3IN1",
    image: "https://ext.same-assets.com/1625354228/3700732775.jpeg",
  },
];

export default function CablesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.cables}</span>
      </div>

      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#00305e] mb-3">{t.cables.toUpperCase()}</h1>
      </div>

      {/* Type cards */}
      <div className="mb-6">
        <div className="bg-white border rounded p-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cableTypeCards.map((card) => (
              <button
                key={card.key}
                className="border rounded flex flex-col items-center justify-center p-3 hover:shadow-sm transition-shadow bg-white"
              >
                <img
                  src={card.image}
                  alt={card.labelEn}
                  className="h-16 object-contain mb-2"
                />
                <span className="text-[11px] text-gray-700 text-center leading-tight">
                  {language === 'cs' ? card.labelCs : card.labelEn}
                </span>
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
        <Button variant="outline" size="sm">
          3
        </Button>
      </div>
    </div>
  );
}
