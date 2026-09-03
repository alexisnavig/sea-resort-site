import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Car, Plane, Brain as Train, Bus, Navigation } from "lucide-react";

const routes = [
  {
    icon: Car,
    title: "На автомобиле",
    duration: "2.5 часа",
    desc: "От Петрозаводска по трассе Р-21 «Кола», поворот на Лахденпохью, далее 35 км по указателям к озеру Светлое. Парковка на территории бесплатная.",
    details: ["120 км от Петрозаводска", "GPS: 61.5240° N, 30.2340° E", "Асфальт до базы, грунтовка 3 км"],
  },
  {
    icon: Train,
    title: "На поезде",
    duration: "3 часа",
    desc: "Поезд № 658 Санкт-Петербург — Костомукша, станция Лахденпохья. От станции — такси 20 минут или наш трансфер (по предварительной записи).",
    details: ["Станция Лахденпохья — 25 км", "Такси ~800₽", "Трансфер базы — 500₽"],
  },
  {
    icon: Plane,
    title: "На самолёте",
    duration: "1.5 часа + трансфер",
    desc: "Аэропорт Петрозаводска (Бесовец). От аэропорта — аренда авто или наш трансфер (предварительная запись, 2000₽ в одну сторону).",
    details: ["Аэропорт Петрозаводска — 130 км", "Трансфер от 2000₽", "Аренда авто в аэропорту"],
  },
];

const Location = () => {
  return (
    <section id="location" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#hero">Главная</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#about">О базе</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Как добраться</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Как добраться</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Маршруты до турбазы
          </h2>
          <p className="text-muted-foreground text-lg">
            Удобный доступ из Петрозаводска и Санкт-Петербурга. Трансфер по предварительной записи.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Routes */}
          <div className="space-y-4">
            {routes.map((r, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <r.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-semibold text-lg">{r.title}</h3>
                        <Badge variant="outline" className="text-xs">{r.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                      <Separator />
                      <ScrollArea className="h-16">
                        <ul className="space-y-1">
                          {r.details.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Navigation className="h-3 w-3 text-primary" /> {d}
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <Card className="overflow-hidden">
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.pexels.com/photos/28492053/pexels-photo-28492053.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Карта озера"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-display font-semibold text-lg">Турбаза «Изумрудный Берег»</h3>
                    <p className="text-sm text-muted-foreground">Озеро Светлое, Карелия</p>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Широта</p>
                    <p className="font-medium">61.5240° N</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Долгота</p>
                    <p className="font-medium">30.2340° E</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
