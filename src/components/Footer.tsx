export default function Footer() {
  return (
    <footer className="bg-[#6780a8] text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">O společnosti</h3>
            <ul className="space-y-2 text-sm">
              <li><button type="button" className="hover:text-[#d7266b]">Profil společnosti</button></li>
              <li><button type="button" className="hover:text-[#d7266b]">Pro média</button></li>
              <li><button type="button" className="hover:text-[#d7266b]">Kontakty</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Jak nakupovat</h3>
            <ul className="space-y-2 text-sm">
              <li><button type="button" className="hover:text-[#d7266b]">Obchodní podmínky</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Proč nakoupit u nás?</h3>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 text-sm text-center">
          <p>Provozuje <span className="font-semibold">Firma s.r.o.</span></p>
        </div>
      </div>
    </footer>
  );
}
