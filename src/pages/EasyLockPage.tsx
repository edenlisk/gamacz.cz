import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "SWISSTEN EASY LOCK ARMBAND",
    code: "61001000",
    description: "SWISSTEN QUICK EASY LOCK je další z rodiny produktů se systémem uchycení smartphonu SWISSTEN EASY LOCK. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN EASY LOCK BIKE",
    code: "61002000",
    description: "Díky držáku SWISSTEN EASY LOCK BIKE připevníte smartphone na řidítka kola a získáte dokonalý přehled v navigaci a dalších aplikacích ve smartphonu. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN ADAPTER PRO EASY LOCK",
    code: "88801407",
    description: "Adaptér je univerzální lepící destička pro uchycení smartphonu k produktům SWISSTEN EASY LOCK. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN EASY LOCK CAR/HOME/OFFICE",
    code: "61003000",
    description: "Držák SWISSTEN EASY LOCK CAR/HOME/OFFICE je další z rodiny produktů se systémem uchycení smartphonu SWISSTEN EASY LOCK. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
];

const subcategories = [
  {
    name: "Easy Lock Sport Armband",
    nameEn: "Easy Lock Sport Armband",
    count: 2,
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
  },
  {
    name: "Easy Lock Bike",
    nameEn: "Easy Lock Bike",
    count: 2,
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
  },
  {
    name: "Easy Lock Home/Office",
    nameEn: "Easy Lock Home/Office",
    count: 2,
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
];

export default function EasyLockPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.easyLock}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e] mb-4">{t.easyLock.toUpperCase()}</h1>
        
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
          <span className="text-sm font-semibold">{language === 'cs' ? 'Podrobné vyhledávání' : 'Detailed search'}:</span>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={language === 'cs' ? 'v této větvi' : 'in this branch'} />
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
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={t.defaultSort} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">{t.defaultSort}</SelectItem>
              <SelectItem value="date">{language === 'cs' ? 'data' : 'date'}</SelectItem>
              <SelectItem value="code">{language === 'cs' ? 'kódu' : 'code'}</SelectItem>
              <SelectItem value="title">{language === 'cs' ? 'názvu' : 'title'}</SelectItem>
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
          <span className="font-semibold">4 {t.items}</span>
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
