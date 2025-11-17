import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const products = [
  {
    title: "SWISSTEN CL ADAPTÉR 2,4A POWER 2x USB + KABEL USB-C",
    code: "20110908",
    description: "Kvalitní adaptér do zapalovače z modelové řady SWISSTEN. Díky výstupnímu proudu až 2,4A a dvěma výstupním USB portům nebude problém dobíjet jak smartphone, tak i tablet. Součástí balení je také 1,2 m dlouhý kabel USB / USB-C. Baleno v blistru Swissten",
    image: "https://ext.same-assets.com/1625354228/362405804.jpeg",
    isNew: false,
  },
  {
    title: "SWISSTEN CL ADAPTÉR POWER DELIVERY USB-C + QUICK CHARGE 3.0 36W METAL STŘÍBRNÝ",
    code: "20111740",
    description: "Elegantní metalická autonabíječka s výkonem 36W. VýstupUSB-C je vybaven technologií POWER DELIVERY pro rychlé nabíjení iPhone 8 a novějších.VýstupUSB je vybaven technologií Qualcomm 3.0 pro rychlé nabíjení smartphonů s OS Android.Baleno v blistru SWISSTEN",
    image: "https://ext.same-assets.com/1625354228/2554322615.jpeg",
    isNew: false,
  },
  {
    title: "MAGNETICKÝ DRŽÁK DO VENTILACE AUTA SWISSTEN S BEZDRÁTOVÝM NABÍJENÍM 15W (kompatibilní s MagSafe)",
    code: "65010609",
    description: "Magnetický držák Swissten do větrací mřížky s bezdrátovým dobíjením kompatibilním s MagSafe a vysokým výkonem 15W. Baleno v blistru SWISSTEN.",
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
    title: "SWISSTEN FM TRANSMITTER RGB",
    code: "20114031",
    description: "SWISSTEN FM TRANSMITTER RGB nabízí Bluetooth 5.3 připojení, RGB podsvícení, Rychlé nabíjení přes USB-C a USB-A (až 15,5 W), Přehrávání MP3/WAV z USB, Hands-free volání, Podpora Siri, Alexy a Google Assistant. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN CL ADAPTÉR 2x USB-C PD + USB-A, 95W ČERNÝ + KABEL USB-C / USB-C, 1 M",
    code: "20111912",
    description: "Autonabíječka Swissten 95W s USB-C kabelem, Porty: 2× USB-C + USB-A, Max. výkon USB-C1: 65W, Max. výkon USB-C2: 30W, Max. výkon USB-A: 30W, Vhodná pro notebooky, Modré LED světlo, Váha: 30 g, Rozměry: Průměr 3,25 × 7,39 cm. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2076353766.jpeg",
    isNew: false,
  },
];

export default function CarChargingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex-1 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-[#d7266b] cursor-pointer">{t.homePage}</span>
        {" > "}
        <span className="font-semibold">{t.carCharging}</span>
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#00305e]">{t.carCharging.toUpperCase()}</h1>
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
          <span className="font-semibold">45 {t.items}</span>
        </div>
        <div className="text-sm">
          {t.itemsPerPage}: <span className="font-semibold">45 {t.items}</span>
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
