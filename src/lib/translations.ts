export type Language = 'cs' | 'en';

export interface Translations {
  // Header
  searchPlaceholder: string;
  searchButton: string;
  login: string;
  items: string;
  
  // Navigation
  aboutUs: string;
  products: string;
  documents: string;
  yourCompany: string;
  cart: string;
  
  // Categories
  preparing: string;
  charging: string;
  magsafe: string;
  wirelessCharging: string;
  carCharging: string;
  solarCharging: string;
  cables: string;
  cases: string;
  screenProtection: string;
  holders: string;
  bikeHolders: string;
  vending: string;
  easyLock: string;
  powerBanks: string;
  headphones: string;
  backpacks: string;
  
  // Product page
  manufacturer: string;
  all: string;
  search: string;
  sortBy: string;
  defaultSort: string;
  priceAsc: string;
  priceDesc: string;
  inStockOnly: string;
  itemsPerPage: string;
  page: string;
  newProduct: string;
  
  // Breadcrumbs
  homePage: string;
  
  // Product details
  code: string;
  description: string;
  watchProduct: string;
}

const czechTranslations: Translations = {
  searchPlaceholder: 'Hledaný výraz...',
  searchButton: 'HLEDAT',
  login: 'Přihlášení',
  items: 'položek',
  
  aboutUs: 'O NÁS',
  products: 'PRODUKTY',
  documents: 'DOKUMENTY',
  yourCompany: 'VAŠE FIRMA',
  cart: 'KOŠÍK',
  
  preparing: 'PŘIPRAVUJEME',
  charging: 'NABÍJENÍ DO SÍTĚ',
  magsafe: 'MAGSAFE',
  wirelessCharging: 'BEZDRÁTOVÉ NABÍJENÍ',
  carCharging: 'NABÍJENÍ DO AUTA',
  solarCharging: 'SOLÁRNÍ NABÍJENÍ',
  cables: 'KABELY',
  cases: 'POUZDRA',
  screenProtection: 'OCHRANA DISPLEJE',
  holders: 'DRŽÁKY',
  bikeHolders: 'DRŽÁKY/POUZDRA NA KOLO',
  vending: 'SAMOPRODAVAČ',
  easyLock: 'EASY LOCK',
  powerBanks: 'POWER BANKY',
  headphones: 'SLUCHÁTKA',
  backpacks: 'BATOHY',
  
  manufacturer: 'Výrobce',
  all: 'VŠICHNI',
  search: 'Hledat',
  sortBy: 'Řadit podle',
  defaultSort: 'výchozí řazení',
  priceAsc: 'Cena vzestupně',
  priceDesc: 'Cena sestupně',
  inStockOnly: 'pouze položky skladem',
  itemsPerPage: 'Položek na stránku',
  page: 'stránka',
  newProduct: 'Novinka',
  
  homePage: 'Hlavní Strana',
  
  code: 'Kód',
  description: 'Popis',
  watchProduct: 'Hlídat produkt',
};

const englishTranslations: Translations = {
  searchPlaceholder: 'Search term...',
  searchButton: 'SEARCH',
  login: 'Login',
  items: 'items',
  
  aboutUs: 'ABOUT US',
  products: 'PRODUCTS',
  documents: 'DOCUMENTS',
  yourCompany: 'YOUR COMPANY',
  cart: 'CART',
  
  preparing: 'UPCOMING',
  charging: 'MAINS CHARGING',
  magsafe: 'MAGSAFE',
  wirelessCharging: 'WIRELESS CHARGING',
  carCharging: 'CAR CHARGING',
  solarCharging: 'SOLAR CHARGING',
  cables: 'CABLES',
  cases: 'CASES',
  screenProtection: 'SCREEN PROTECTION',
  holders: 'HOLDERS',
  bikeHolders: 'BIKE HOLDERS/CASES',
  vending: 'VENDING MACHINE',
  easyLock: 'EASY LOCK',
  powerBanks: 'POWER BANKS',
  headphones: 'HEADPHONES',
  backpacks: 'BACKPACKS',
  
  manufacturer: 'Manufacturer',
  all: 'ALL',
  search: 'Search',
  sortBy: 'Sort by',
  defaultSort: 'default sorting',
  priceAsc: 'Price ascending',
  priceDesc: 'Price descending',
  inStockOnly: 'in stock items only',
  itemsPerPage: 'Items per page',
  page: 'page',
  newProduct: 'New',
  
  homePage: 'Home Page',
  
  code: 'Code',
  description: 'Description',
  watchProduct: 'Watch product',
};

export const translations: Record<Language, Translations> = {
  cs: czechTranslations,
  en: englishTranslations,
};

// Product name translations (manual mapping for common terms)
export function translateProductName(czechName: string): string {
  const replacements: Record<string, string> = {
    'MAGNETICKÝ': 'MAGNETIC',
    'DRŽÁK': 'HOLDER',
    'KABEL': 'CABLE',
    'ČERNÝ': 'BLACK',
    'BÍLÝ': 'WHITE',
    'BEZDRÁTOVÉ': 'WIRELESS',
    'NABÍJENÍ': 'CHARGING',
    'NABÍJEČKA': 'CHARGER',
    'POUZDRO': 'CASE',
    'OCHRANA': 'PROTECTION',
    'DISPLEJE': 'SCREEN',
    'SLUCHÁTKA': 'HEADPHONES',
    'POWER BANK': 'POWER BANK',
    'BATOH': 'BACKPACK',
    'VENTILACE': 'VENT',
    'AUTA': 'CAR',
    'SÍŤOVÝ': 'MAINS',
    'ADAPTÉR': 'ADAPTER',
    'DATOVÝ': 'DATA',
    'PRO': 'FOR',
    'S': 'WITH',
    'DO': 'TO',
    'NA': 'ON',
    'INTEGROVANÝM': 'INTEGRATED',
    'VÝMĚNNÝMI': 'INTERCHANGEABLE',
    'VIDLICEMI': 'PLUGS',
    'CESTOVNÍ': 'TRAVEL',
    'BLUETOOTH': 'BLUETOOTH',
    'PLAVÁNÍ': 'SWIMMING',
    'SELFIE STICK': 'SELFIE STICK',
    'TRIPOD': 'TRIPOD',
    'CHYTRÝ': 'SMART',
    'LOKÁTOR': 'TRACKER',
    'FIND TAG': 'FIND TAG',
    'FIND CARD': 'FIND CARD',
  };
  
  let translated = czechName;
  for (const [czech, english] of Object.entries(replacements)) {
    const regex = new RegExp(czech, 'gi');
    translated = translated.replace(regex, english);
  }
  
  return translated;
}

// Description translations (basic keyword replacement)
export function translateProductDescription(czechDesc: string): string {
  const replacements: Record<string, string> = {
    'Kompatibilita': 'Compatibility',
    'Vstup': 'Input',
    'Výstup': 'Output',
    'Výkon': 'Power',
    'Délka kabelu': 'Cable length',
    'Délka': 'Length',
    'Váha': 'Weight',
    'Baleno v blistru': 'Packed in blister',
    'Rozměry': 'Dimensions',
    'Typ baterie': 'Battery type',
    'bezdrátové nabíjení': 'wireless charging',
    'magnetický': 'magnetic',
    'držák': 'holder',
    'kabel': 'cable',
    'pouzdro': 'case',
    'Pro': 'For',
    'až': 'up to',
    'Silné magnety': 'Strong magnets',
    'snadná instalace': 'easy installation',
    'moderní design': 'modern design',
    'Dálkové ovládání': 'Remote control',
    'protiskluzovými nožičkami': 'anti-slip feet',
    'integrovaný': 'integrated',
    'Vyměnitelné vidlice': 'Interchangeable plugs',
    'Vestavný': 'Built-in',
    'vodotěsné': 'waterproof',
    'Paměť': 'Memory',
    'Výdrž hudby': 'Music playback',
    'Špunty do uší': 'Ear plugs',
    'Redukce': 'Adapter',
  };
  
  let translated = czechDesc;
  for (const [czech, english] of Object.entries(replacements)) {
    const regex = new RegExp(czech, 'gi');
    translated = translated.replace(regex, english);
  }
  
  return translated;
}
