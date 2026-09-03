import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Waves, Menu, Phone, Calendar, ChevronDown, MapPin, Mail } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "О базе", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Услуги", href: "#amenities" },
  { label: "Развлечения", href: "#activities" },
  { label: "Бронирование", href: "#booking" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
            <Waves className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-none text-foreground">
              Изумрудный Берег
            </span>
            <span className="text-xs text-muted-foreground">Турбаза у озера</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5">
                Ещё <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuLabel className="text-xs text-muted-foreground">Разделы сайта</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.slice(5).map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <a href={link.href} className="cursor-pointer">{link.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+78001234567" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">8 800 123-45-67</span>
          </a>
          <Button asChild size="sm">
            <a href="#booking"><Calendar className="h-4 w-4" /> Бронировать</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="xl:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] flex flex-col">
            <SheetHeader>
              <SheetTitle className="font-display text-lg">Навигация</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto space-y-3 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> 8 800 123-45-67
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> info@izumrud-bereg.ru
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Карелия, озеро Светлое
              </div>
              <Button asChild className="w-full mt-2">
                <a href="#booking" onClick={() => setOpen(false)}><Calendar className="h-4 w-4" /> Забронировать</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
