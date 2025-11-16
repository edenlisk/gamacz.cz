import ProductCard from "@/components/ProductCard";

const featuredProducts = [
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
  {
    title: "MAGNETICKÝ DRŽÁK DO VENTILACE AUTA AIRHOLD S BEZDRÁTOVÝM NABÍJENÍM 15W / 7,5W (kompatibilní s MagSafe)",
    code: "65010801",
    description: "SWISSTEN AIRHOLD je magnetický držák do ventilace s bezdrátovým nabíjením 15W (7,5W pro iPhone). Silné magnety, snadná instalace a moderní design zajistí bezpečné a pohodlné používání telefonu v autě. Baleno v blistru SWISSTEN.",
    image: "https://ext.same-assets.com/1625354228/734569200.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN MAGNETICKÝ KABEL 2v1 PRO SAMSUNG GALAXY WATCH A USB-C, USB-C (USB-A) 1.2 M ČERNÝ",
    code: "22065512",
    description: "Magnetický kabel Swissten 2v1, Pro Samsung Galaxy Watch 1-7 + Ultra, Výkon USB-C: až 60 W, Výkon pro hodinky: 2,5 W, Délka: 1,2 m, Váha: 42 g, Silikonové provedení. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/1689056828.jpeg",
    isNew: true,
  },
  {
    title: "SWISSTEN MAGNETICKÝ KABEL PRO SAMSUNG GALAXY WATCH, USB-C 1.2 M ČERNÝ",
    code: "22065511",
    description: "SWISSTEN Wireless Magnetic Charger pro Samsung Galaxy Watch, Kompatibilita: Active 1-Ultra, Vstup 5V DC 1A, Vstup 5V DC 0.5A / 2,5W, Délka kabelu 1,2 m, Váha 29 g. Baleno v blistru Swissten.",
    image: "https://ext.same-assets.com/1625354228/2548460716.jpeg",
    isNew: true,
  },
];

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Banner */}
      <div className="mb-8">
        <img
          src="https://ext.same-assets.com/1625354228/2341417022.jpeg"
          alt="SWISSTEN LCD Cables"
          className="w-full h-auto"
        />
      </div>

      {/* Tabs for Produktové novinky / Naposledy naskladněno */}
      <div className="mb-6">
        <div className="flex gap-4 border-b">
          <button className="px-4 py-2 font-semibold border-b-2 border-[#d7266b] text-[#d7266b]">
            Produktové novinky
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-[#d7266b]">
            Naposledy naskladněno
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>
    </div>
  );
}
