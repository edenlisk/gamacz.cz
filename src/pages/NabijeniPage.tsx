import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 20W PD A 1x USB-A 18W QC BÍLÝ",
    code: "22071100",
    description: "Nabíječka Swissten, max. výkon 20 Watt, 1x USB-C / 1x USB-A QC 3.0, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 35W PD + 1x USB-A 27W QC BÍLÝ",
    code: "22071200",
    description: "Nabíječka Swissten, Max. výkon 35 Watt, 1x USB-C / 1x USB-A QC 4.0, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/3187608300.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 35W POWER DELIVERY ČERNÝ + DATOVÝ KABEL USB-C/LIGHTNING 1,2 M ČERNÝ",
    code: "22070250",
    description: "Nabíječka Swissten, Max. výkon 35 Watt, 1x USB-C, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Součást balení USB-C/Lightning kabel. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2736283488.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 45W PD + 1x USB-A 18W QC BÍLÝ",
    code: "22071300",
    description: "Nabíječka Swissten, Max. výkon 45 Watt, 1x USB-C + 1x USB-A, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Menší rozměry. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 20W PD + 1x USB-A 18W QC ČERNÝ",
    code: "22071110",
    description: "Nabíječka Swissten, max. výkon 20 Watt, 1x USB-C / 1x USB-A QC 3.0, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2565590959.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 20W POWER DELIVERY BÍLÝ + DATOVÝ KABEL USB-C/USB-C 1,2 M BÍLÝ",
    code: "22070120",
    description: "Nabíječka Swissten, max. výkon 20 Watt, 1x USB-C, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Součást balení USB-C/USB-C kabel. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/3778853354.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 1x USB-C 35W PD + 1x USB-A 27W QC ČERNÝ",
    code: "22071210",
    description: "Nabíječka Swissten, Max. výkon 35 Watt, 1x USB-C / 1x USB-A QC 4.0, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/1137553383.jpeg",
  },
  {
    title: "SWISSTEN SÍŤOVÝ ADAPTÉR GaN 2x USB-C 65W PD + 1x USB-A 18W QC BÍLÝ",
    code: "22071400",
    description: "Nabíječka Swissten, Max. výkon 65 Watt, 2x USB-C + 1x USB-A, GaN technologie - efektivní nabíjení bez přehřátí, Ochrana proti zkratování, přepětí, přetížení a vysoké teplotě, Malé rozměry. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/3527746498.jpeg",
  },
];

export default function NabijeniPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.charging}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e] mb-2">{t.charging.toUpperCase()}</h1>
        <div className="flex gap-4 text-sm text-gray-600">
          <span className="hover:text-[#d7266b] cursor-pointer">
            {language === 'cs' ? 'Adaptéry s kabelem' : 'Adapters with cable'}
          </span>
          <span className="hover:text-[#d7266b] cursor-pointer">
            {language === 'cs' ? 'Adaptéry' : 'Adapters'}
          </span>
          <span className="hover:text-[#d7266b] cursor-pointer font-semibold">
            {language === 'cs' ? 'GaN + rychlé nabíjení' : 'GaN + fast charging'}
          </span>
          <span className="hover:text-[#d7266b] cursor-pointer">
            {language === 'cs' ? 'SN pro UK' : 'Adapters for UK'}
          </span>
          <span className="hover:text-[#d7266b] cursor-pointer">
            {language === 'cs' ? 'SN pro notebooky' : 'Adapters for laptops'}
          </span>
          <span className="hover:text-[#d7266b] cursor-pointer">
            {language === 'cs' ? 'SN samoprodavač' : 'Vending machine'}
          </span>
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
          <span className="font-semibold">71 {language === 'cs' ? 'Kč' : 'CZK'}</span> - <span className="font-semibold">900 {language === 'cs' ? 'Kč' : 'CZK'}</span>
        </div>
        <div className="text-sm">
          {t.itemsPerPage}: <span className="font-semibold">69 {t.items}</span>
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
