import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  code: string;
  description: string;
  image: string;
  isNew?: boolean;
  manufacturer?: string;
}

export default function ProductCard({
  title,
  code,
  description,
  image,
  isNew = false,
  manufacturer = "SWISSTEN",
}: ProductCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        {/* Header with title */}
        <div className="bg-[#d1ddec] px-3 py-2 mb-3 rounded">
          <h3 className="text-sm font-semibold text-[#00305e] leading-tight">
            {title}
          </h3>
        </div>

        {/* New badge */}
        {isNew && (
          <Badge className="bg-[#d7266b] hover:bg-[#ce2867] mb-2">
            Novinka
          </Badge>
        )}

        {/* Product image */}
        <div className="flex justify-center mb-3 h-40">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product code */}
        <p className="text-xs text-gray-500 mb-2">Kód: {code}</p>

        {/* Description */}
        <p className="text-xs text-gray-700 mb-3 line-clamp-3">
          {description}
        </p>

        {/* Watch product button */}
        <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-[#d7266b] mb-3">
          <Star className="w-3 h-3" />
          Hlídat produkt
        </button>

        {/* Manufacturer */}
        <p className="text-xs text-gray-600">
          Výrobce, dovozce: <span className="font-semibold">{manufacturer}</span>
        </p>
      </CardContent>
    </Card>
  );
}
