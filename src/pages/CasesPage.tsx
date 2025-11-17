import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "WATERPROOF CASE SWISSTEN BLACK",
    code: "8595217465213",
    description: "Étui étanche Swissten noir pour protéger votre téléphone contre l'eau et les éclaboussures. Design robuste et durable.",
    image: "https://suitecross.com/web/image/product.template/1455/image_512/%5B8595217465213%5D%20WATERPROOF%20CASE%20SWISSTEN%20BLACK?unique=0afea4e",
    isNew: false,
    price: "8,10 €",
  },
  {
    title: "SWISSTEN CASE BLACK-ROCK 6,4\"",
    code: "8595217477056",
    description: "Étui Swissten Black-Rock 6,4\" pour smartphone, protection élégante avec design moderne.",
    image: "https://suitecross.com/web/image/product.template/1706/image_512/%5B8595217477056%5D%20SWISSTEN%20CASE%20BLACK-ROCK%206,4%22?unique=a6d4068",
    isNew: false,
    price: "7,51 €",
  },
];

const subcategories = [
  {
    name: "Zadní kryty",
    nameEn: "Back covers",
    count: 0,
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
  {
    name: "Knížková pouzdra",
    nameEn: "Book cases",
    count: 0,
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
  },
  {
    name: "Apple iPad",
    nameEn: "Apple iPad",
    count: 5,
    image: "https://ext.same-assets.com/1625354228/1701215901.png",
  },
  {
    name: "Sportovní",
    nameEn: "Sport",
    count: 0,
    image: "https://ext.same-assets.com/1625354228/2657033933.jpeg",
  },
  {
    name: "Vsuvky",
    nameEn: "Sleeves",
    count: 0,
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
  },
];

export default function CasesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.cases}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e] mb-4">{t.cases.toUpperCase()}</h1>
        
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
            <span>DUX DUCIS</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>GAMACZ PARTNER</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>SOX</span>
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

      {/* Product count */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">959 {t.items}</span>
        </div>
        <div className="text-sm">
          {t.itemsPerPage}: <span className="font-semibold">60 {t.items}</span>
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
