export default function Footer() {
  return (
    <footer className="bg-[#6780a8] text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#d7266b]">
                  Maison
                </a>
              </li>
              <li>
                <button type="button" className="hover:text-[#d7266b]">
                  À propos de nous
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-[#d7266b]">
                  Produits
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-[#d7266b]">
                  Services
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-[#d7266b]">
                  Légal
                </button>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#d7266b]">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-[#d7266b]">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">À propos</h3>
            <p className="mb-2">
              Nous sommes une équipe de passionnés, déterminés à améliorer la vie des professionnels grâce
              à des solutions efficaces.
            </p>
            <p>Nos produits sont conçus pour les PME souhaitant optimiser leurs performances.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contactus" className="hover:text-[#d7266b]">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="mailto:bonjour@suitecross.com" className="hover:text-[#d7266b]">
                  bonjour@suitecross.com
                </a>
              </li>
              <li>
                <a href="tel:+35226950105" className="hover:text-[#d7266b]">
                  +352 2695 0105
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 text-xs text-center">
          <p className="mb-1">Copyright © SuiteCross Distribution</p>
          <p>
            Généré par{' '}
            <a
              href="http://www.odoo.com?utm_source=db&utm_medium=website"
              className="underline hover:text-[#d7266b]"
            >
              Odoo
            </a>{' '}
            – Le #1 Open Source eCommerce
          </p>
        </div>
      </div>
    </footer>
  );
}
