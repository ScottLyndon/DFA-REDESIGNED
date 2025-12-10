import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Requirements", href: "#" },
    { label: "Schedule Appointment", href: "/appointment" },
    { label: "Where to Apply", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Payment Merchants", href: "#" },
  ];

  return (
    <header className="w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img 
              src="/images/dfa-logo.png" 
              alt="DFA Logo" 
              className="h-12 w-12 md:h-16 md:w-16 object-contain drop-shadow-md"
              onError={(e) => {
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Department_of_Foreign_Affairs_%28DFA%29.svg/480px-Department_of_Foreign_Affairs_%28DFA%29.svg.png";
              }}
            />
            <div className="hidden md:block">
              <p className="text-xs font-serif tracking-widest uppercase opacity-90">Republic of the Philippines</p>
              <h1 className="text-xl font-serif font-bold leading-tight">DEPARTMENT OF FOREIGN AFFAIRS</h1>
              <p className="text-xs opacity-80">2330 Roxas Boulevard, Pasay City, Philippines 1300</p>
            </div>
            <div className="md:hidden">
              <h1 className="text-lg font-serif font-bold">DFA Passport</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <span className="hover:text-secondary transition-colors cursor-pointer border-b-2 border-transparent hover:border-secondary py-1">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <span className="text-lg font-medium hover:text-primary transition-colors cursor-pointer block py-2 border-b border-border/50">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
