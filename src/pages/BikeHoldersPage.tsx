import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "DRŽÁK NA KOLO SWISSTEN S-GRIP BCCL1",
    code: "65010404",
    description: "Držák na kolo SWISSTEN S-GRIP BCCL1 slouží k uchycení na řidítka. Disponuje také fixační gumou, která zabezpečuje, aby Váš telefon nevypadl z čelistí. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
  {
    title: "DRŽÁK NA MOTORKU NEBO KOLO SWISSTEN BM1",
    code: "65010405",
    description: "Kovový držák smartphonu 4-7\", který se dá využít jak na kolo, tak i na motorku, čtyřkolku, elektrokolo atd. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
  },
  {
    title: "DRŽÁK NA KOLO SWISSTEN BC2",
    code: "65010406",
    description: "Kovový držák na kolo SWISSTEN BC2 s univerzálním uchycením na řidítka. Vhodný pro smartphony 4-7\". Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: false,
  },
  {
    title: "DRŽÁK NA KOLO NEBO MOTORKU SWISSTEN S-GRIP BCCL2",
    code: "65010407",
    description: "Max. tloušťka uchycení: 35 mm, Max. rozpětí čelisti: 105 mm, Pro telefony 4,7-8,5 palců, Váha: 100 g, Rozměry: 10 x 6,7 x 6,5 cm, Měkké silikonové vložky. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN EASY LOCK BIKE",
    code: "61002000",
    description: "Díky držáku SWISSTEN EASY LOCK BIKE připevníte smartphone na řidítka kola a získáte dokonalý přehled v navigaci a dalších aplikacích ve smartphonu. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: false,
  },
];

export default function BikeHoldersPage() {
  const { t, language } = useLanguage();

  const bikeTypeCards = [
    {
      key: "handlebar",
      labelCs: "Na řidítka",
      labelEn: "Handlebar mounts",
      image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    },
    {
      key: "motorbike",
      labelCs: "Na motorku",
      labelEn: "Motorbike",
      image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    },
    {
      key: "universal",
      labelCs: "Univerzální",
      labelEn: "Universal",
      image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    },
    {
      key: "easy-lock",
      labelCs: "Easy Lock Bike",
      labelEn: "Easy Lock Bike",
      image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    },
  ];

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.bikeHolders}</span>
      </div>

      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#00305e]">{t.bikeHolders.toUpperCase()}</h1>
      </div>

      {/* Type cards */}
      <div className="mb-6">
        <div className="bg-white border rounded p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bikeTypeCards.map((card) => (
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
          <span className="font-semibold">12 {t.items}</span>
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
