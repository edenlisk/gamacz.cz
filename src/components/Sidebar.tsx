import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CategoryItem {
  name: string;
  path?: string;
  children?: CategoryItem[];
}

const categories: CategoryItem[] = [
  { name: "PŘIPRAVUJEME", path: "/pripravujeme" },
  { name: "iPEAX" },
  { name: "ECO BALENÍ" },
  { name: "NABÍJENÍ DO SÍTĚ", path: "/nabijeni-do-site" },
  { name: "MAGSAFE" },
  { name: "BEZDRÁTOVÉ NABÍJENÍ" },
  { name: "NABÍJENÍ DO AUTA" },
  { name: "SOLÁRNÍ NABÍJENÍ" },
  { name: "KABELY" },
  { name: "POUZDRA" },
  { name: "OCHRANA DISPLEJE" },
  { name: "DRŽÁKY" },
  { name: "DRŽÁKY/POUZDRA NA KOLO" },
  { name: "SAMOPRODAVAČ" },
  { name: "EASY LOCK" },
  { name: "POWER BANKY" },
  { name: "SLUCHÁTKA" },
  { name: "BATOHY" },
];

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <aside className="w-64 bg-[#e8ecf1] border-r">
      <div className="p-4">
        {categories.map((category) => (
          <div key={category.name} className="mb-1">
            {category.path ? (
              <Link
                to={category.path}
                className="block px-3 py-2 text-sm hover:bg-white rounded transition-colors"
              >
                {category.name}
              </Link>
            ) : (
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-white rounded transition-colors text-left"
              >
                <span>{category.name}</span>
                {category.children && (
                  expandedCategories.has(category.name) ?
                    <ChevronDown className="w-4 h-4" /> :
                    <ChevronRight className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
