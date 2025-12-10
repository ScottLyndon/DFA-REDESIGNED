import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border mt-auto">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/dfa-logo.png" 
                alt="DFA Logo" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Department_of_Foreign_Affairs_%28DFA%29.svg/480px-Department_of_Foreign_Affairs_%28DFA%29.svg.png";
                }}
              />
              <div>
                <h4 className="font-serif font-bold text-foreground text-sm">OFFICE OF CONSULAR AFFAIRS</h4>
                <p className="text-xs">Department of Foreign Affairs</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Aseana Business Park, Bradco Avenue, Diosdado Macapagal Blvd, Parañaque, 1714 Metro Manila
            </p>
          </div>

          {/* Sitemap Column 1 */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">SITEMAP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link></li>
              <li><Link href="#"><span className="hover:text-primary cursor-pointer">Requirements</span></Link></li>
              <li><Link href="/appointment"><span className="hover:text-primary cursor-pointer">Schedule an Appointment</span></Link></li>
            </ul>
          </div>

          {/* Sitemap Column 2 */}
          <div className="md:pt-10">
            <ul className="space-y-2 text-sm">
              <li><Link href="#"><span className="hover:text-primary cursor-pointer">Where to Apply</span></Link></li>
              <li><Link href="#"><span className="hover:text-primary cursor-pointer">FAQ</span></Link></li>
              <li><Link href="#"><span className="hover:text-primary cursor-pointer">Accredited Payment Merchants</span></Link></li>
            </ul>
          </div>

          {/* Copyright & Version */}
          <div className="text-sm space-y-2 md:text-right">
            <p>&copy; {new Date().getFullYear()} Department of Foreign Affairs</p>
            <p>Office of the Consular Affairs</p>
            <p className="text-xs opacity-70">v1.2.1 | <Link href="#"><span className="hover:underline cursor-pointer">Privacy Policy</span></Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
