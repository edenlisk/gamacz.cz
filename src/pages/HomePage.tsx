import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const featuredProducts = [
  {
    title: "Adaptateur audio textile USB-C/jack (femelle) 0,15 m",
    code: "SC-ADAPT-USB-C-JACK-015",
    description:
      "Adaptateur audio textile USB-C vers jack 3,5 mm (femelle) de 0,15 m, idéal pour connecter vos écouteurs filaires à un appareil USB-C.",
    image:
      "https://suitecross.com/web/image/product.template/2/image_512/Adaptateur%20audio%20textile%20USB-C-jack%20(femelle)%200,15%20m?unique=a937089",
    isNew: true,
  },
  {
    title: "CÂBLE AUDIO SWISSTEN TEXTILE JACK - JACK NOIR 1,5 M",
    code: "SC-CABLE-AUDIO-JACK-1-5-BLACK",
    description:
      "Câble audio textile Swissten jack 3,5 mm vers jack 3,5 mm, longueur 1,5 m, finition noire résistante.",
    image: "https://ext.same-assets.com/1625354228/1573545499.jpeg",
    isNew: true,
  },
  {
    title: "ENCEINTE BLUETOOTH i METAL NOIR / ARGENT",
    code: "SC-BT-SPEAKER-METAL-BLACK-SILVER",
    description:
      "Enceinte Bluetooth compacte au design métal noir/argent, parfaite pour l'écoute mobile.",
    image: "https://ext.same-assets.com/1625354228/2341417022.jpeg",
    isNew: true,
  },
  {
    title: "CASQUE STÉRÉO SANS FIL SWISSTEN JUMBO ANC NOIR",
    code: "SC-HEADPHONES-JUMBO-ANC-BLACK",
    description:
      "Casque stéréo sans fil Swissten Jumbo avec réduction active du bruit (ANC), coloris noir.",
    image: "https://ext.same-assets.com/1625354228/2657033933.jpeg",
    isNew: true,
  },
  {
    title: "CASQUE STÉRÉO SANS FIL SWISSTEN JUMBO ARGENT/MARRON",
    code: "SC-HEADPHONES-JUMBO-SILVER-BROWN",
    description:
      "Casque stéréo sans fil Swissten Jumbo coloris argent/marron, pour une écoute confortable au quotidien.",
    image: "https://ext.same-assets.com/1625354228/1689056828.jpeg",
    isNew: true,
  },
];

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="flex-1 px-6 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Banner */}
        <div className="mb-6 bg-white border shadow-sm">
          <img
            src="https://ext.same-assets.com/1625354228/2341417022.jpeg"
            alt="SWISSTEN LCD Cables"
            className="w-full h-auto"
          />
        </div>

        {/* Tabs and product list box */}
        <div className="bg-white border shadow-sm">
          {/* Tabs for Produktové novinky / Naposledy naskladněno */}
          <div className="border-b px-4 pt-3">
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-semibold border-b-2 border-[#d7266b] text-[#d7266b]">
                {language === 'cs' ? 'Produktové novinky' : 'New Products'}
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-[#d7266b]">
                {language === 'cs' ? 'Naposledy naskladněno' : 'Recently Stocked'}
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.code} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
