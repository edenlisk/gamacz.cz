import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "MAGNETIC CAR HOLDER FOR TABLET SWISSTEN S-GRIP M5-OP",
    code: "8595217454606",
    description: "Support magnétique de voiture pour tablette Swissten S-GRIP M5-OP, fixation robuste et ajustable.",
    image: "https://suitecross.com/web/image/product.template/1506/image_512/%5B8595217454606%5D%20MAGNETIC%20CAR%20HOLDER%20FOR%20TABLET%20SWISSTEN%20S-GRIP%20M5-OP?unique=e538c05",
    isNew: false,
    price: "10,10 €",
  },
  {
    title: "CAR HOLDER FOR TABLET SWISSTEN S-GRIP T1-CD1",
    code: "8595217454613",
    description: "Support de voiture pour tablette Swissten S-GRIP T1-CD1, installation facile sur lecteur CD.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
    price: "10,14 €",
  },
  {
    title: "CAR HOLDER FOR TABLET SWISSTEN S-GRIP T1-HK",
    code: "8595217454620",
    description: "Support de voiture pour tablette Swissten S-GRIP T1-HK, fixation sur appui-tête.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
    price: "13,58 €",
  },
  {
    title: "CAR HOLDER FOR TABLET SWISSTEN S-GRIP T1-OP",
    code: "8595217454637",
    description: "Support de voiture pour tablette Swissten S-GRIP T1-OP, universel et ajustable.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: false,
    price: "11,68 €",
  },
  {
    title: "CAR HOLDER SWISSTEN S-GRIP S3-CD1",
    code: "8595217454644",
    description: "Support de voiture Swissten S-GRIP S3-CD1, montage sur lecteur CD.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
    price: "6,90 €",
  },
  {
    title: "SWISSTEN REARVIEW MIRROR CAR MAGNETIC HOLDER",
    code: "8595217480476",
    description: "Support magnétique de voiture Swissten pour rétroviseur, installation rapide.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: true,
    price: "18,59 €",
  },
  {
    title: "CAR HOLDER SWISSTEN S-GRIP S3-HK",
    code: "8595217454651",
    description: "Support de voiture Swissten S-GRIP S3-HK, montage sur appui-tête.",
    image: "https://ext.same-assets.com/1625354228/2548460716.jpeg",
    isNew: false,
    price: "10,62 €",
  },
  {
    title: "SWISSTEN METAL PLATES FOR MAGNETIC HOLDER",
    code: "8595217466135",
    description: "Plaques métalliques Swissten pour supports magnétiques, lot de 2 pièces.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
    price: "3,50 €",
  },
];

export default function HoldersPage() {
  const { t, language } = useLanguage();

  const holderTypeCards = [
    {
      key: "car",
      labelCs: "Držáky do auta",
      labelEn: "Car holders",
      image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    },
    {
      key: "vent",
      labelCs: "Do ventilace",
      labelEn: "Vent holders",
      image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    },
    {
      key: "dashboard",
      labelCs: "Na palubní desku",
      labelEn: "Dashboard",
      image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    },
    {
      key: "magnetic",
      labelCs: "Magnetické",
      labelEn: "Magnetic",
      image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    },
  ];

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.holders}</span>
      </div>

      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#00305e]">{t.holders.toUpperCase()}</h1>
      </div>

      {/* Type cards */}
      <div className="mb-6">
        <div className="bg-white border rounded p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {holderTypeCards.map((card) => (
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
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>{language === 'cs' ? 'Speciální nabídka' : 'Special offer'}</span>
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
