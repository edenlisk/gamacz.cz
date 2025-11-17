import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "SWISSTEN ULTRA DURABLE 3D JAPANESE TEMPERED GLASS PRO APPLE IPHONE 16 PRO MAX ČERNÉ",
    code: "86011001",
    description: "3D ochranné sklo SWISSTEN pro iPhone 16 Pro Max s japonským temperováním, ultra odolné, přesné vystřižení pro kameru a reproduktor, snadná aplikace. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN ULTRA DURABLE 3D JAPANESE TEMPERED GLASS PRO APPLE IPHONE 16 ČERNÉ",
    code: "86011002",
    description: "3D ochranné sklo SWISSTEN pro iPhone 16 s japonským temperováním, ultra odolné, přesné vystřižení, snadná aplikace. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN ULTRA DURABLE 3D JAPANESE TEMPERED GLASS PRO SAMSUNG GALAXY S24 ČERNÉ",
    code: "86012001",
    description: "3D ochranné sklo SWISSTEN pro Samsung Galaxy S24 s japonským temperováním, ultra odolné, přesné vystřižení, snadná aplikace. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN CAMERA LENS PROTECTOR PRO APPLE IPHONE 16 PRO MAX",
    code: "86013001",
    description: "Ochrana čočky kamery SWISSTEN pro iPhone 16 Pro Max, temperované sklo, transparentní, snadná instalace. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN ANTI-BLUE LIGHT TEMPERED GLASS PRO APPLE IPHONE 15 PRO",
    code: "86014001",
    description: "Ochranné sklo SWISSTEN s filtrem modrého světla pro iPhone 15 Pro, temperované, chrání oči při dlouhém používání. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: false,
  },
];

export default function ScreenProtectionPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.screenProtection}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e]">{t.screenProtection.toUpperCase()}</h1>
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
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>SCREENSHIELD</span>
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
