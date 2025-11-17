import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RegistrationPage() {
  const { language } = useLanguage();

  const countries = [
    "Česká republika", "Slovensko", "Polsko", "Německo", "Rakousko", 
    "Maďarsko", "Bulharsko", "Rumunsko", "Chorvatsko", "Slovinsko",
    "Srbsko", "Belgie", "Holandsko", "Francie", "Španělsko", "Itálie",
    "Portugalsko", "Velká Británie", "Irsko", "Švédsko", "Norsko",
    "Dánsko", "Finsko", "Island", "Švýcarsko", "Řecko", "Turecko"
  ];

  return (
    <div className="flex-1 p-3 md:p-6 max-w-4xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold text-[#00305e] mb-4 md:mb-6">
        {language === 'cs' ? 'Registrace' : 'Registration'}
      </h1>

      <div className="bg-white border rounded p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
          <Button 
            variant="outline" 
            className="flex-1 bg-gray-100"
          >
            {language === 'cs' ? 'koncový zákazník' : 'end customer'}
          </Button>
          <Button 
            className="flex-1 bg-[#d7266b] text-white hover:bg-[#ce2867]"
          >
            {language === 'cs' ? 'firma' : 'company'}
          </Button>
        </div>

        <h2 className="text-base md:text-lg font-semibold text-[#00305e] mb-3 md:mb-4">
          {language === 'cs' ? 'Kontaktní osoba' : 'Contact person'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Příjmení:' : 'Surname:'}
            </label>
            <Input placeholder="" />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Jméno:' : 'Name:'}
            </label>
            <Input placeholder="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              E-mail:
            </label>
            <Input type="email" placeholder="" />
            <p className="text-xs text-gray-500 mt-1">
              {language === 'cs' 
                ? 'Na tento email budou doručeny přihlašovací údaje' 
                : 'Login credentials will be sent to this email'}
            </p>
          </div>
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Telefon:' : 'Phone:'}
            </label>
            <Input type="tel" placeholder="" />
          </div>
        </div>

        <h2 className="text-base md:text-lg font-semibold text-[#00305e] mb-3 md:mb-4 mt-6 md:mt-8">
          {language === 'cs' ? 'Vaše firma' : 'Your company'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Stát:' : 'Country:'}
            </label>
            <Select defaultValue="cz">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country.toLowerCase()}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'IČO:' : 'Company ID:'}
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="" className="flex-1" />
              <Button variant="outline" className="whitespace-nowrap">
                {language === 'cs' ? 'Import podle IČ' : 'Import by ID'}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'DIČ:' : 'VAT ID:'}
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="" className="flex-1" />
              <Button variant="outline" className="whitespace-nowrap">
                {language === 'cs' ? 'Import podle DIČ' : 'Import by VAT'}
              </Button>
            </div>
          </div>
          <div className="flex items-center mt-3 md:mt-6">
            <label className="flex items-center gap-2 text-xs md:text-sm">
              <input type="checkbox" />
              <span>{language === 'cs' ? 'Jsem plátce DPH' : 'I am VAT payer'}</span>
            </label>
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <label className="block text-xs md:text-sm font-semibold mb-2">
            {language === 'cs' ? 'Název firmy:' : 'Company name:'}
            </label>
          <Input placeholder="" />
        </div>

        <h2 className="text-base md:text-lg font-semibold text-[#00305e] mb-3 md:mb-4 mt-6 md:mt-8">
          {language === 'cs' ? 'Fakturační adresa' : 'Billing address'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Ulice:' : 'Street:'}
            </label>
            <Input placeholder="" />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Město:' : 'City:'}
            </label>
            <Input placeholder="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'PSČ:' : 'ZIP:'}
            </label>
            <Input placeholder="" />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">
              {language === 'cs' ? 'Stát:' : 'Country:'}
            </label>
            <Select defaultValue="cz">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country.toLowerCase()}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end mt-6 md:mt-8">
          <Button className="bg-[#d7266b] hover:bg-[#ce2867] px-6 md:px-8 w-full sm:w-auto">
            {language === 'cs' ? 'REGISTROVAT' : 'REGISTER'}
          </Button>
        </div>
      </div>
    </div>
  );
}
