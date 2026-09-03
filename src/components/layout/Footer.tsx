import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Waves, Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Waves className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-none">Изумрудный Берег</span>
                <span className="text-xs text-background/60">Турбаза у озера</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Уютная турбаза на берегу чистейшего озера в Карелии. Отдых для души и тела круглый год.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "О базе", href: "#about" },
                { label: "Номера", href: "#rooms" },
                { label: "Услуги", href: "#amenities" },
                { label: "Развлечения", href: "#activities" },
                { label: "Бронирование", href: "#booking" },
                { label: "Отзывы", href: "#reviews" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Республика Карелия, Лахденпохский район, озеро Светлое, 12</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+78001234567" className="hover:text-primary transition-colors">8 800 123-45-67</a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@izumrud-bereg.ru" className="hover:text-primary transition-colors">info@izumrud-bereg.ru</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Рассылка</h4>
            <p className="text-sm text-background/70">
              Подпишитесь и получайте новости о спецпредложениях и акциях.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/15" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2026 Изумрудный Берег. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия проживания</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
