import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import {
  Waves, Wifi, Car, Utensils, Flame, Bath, Dumbbell, Dog,
  Baby, ShieldCheck, TreePine, ShowerHead
} from "lucide-react";

const amenities = [
  { icon: Wifi, name: "Бесплатный Wi-Fi", desc: "На всей территории базы" },
  { icon: Car, name: "Парковка", desc: "Бесплатная для гостей" },
  { icon: Utensils, name: "Ресторан", desc: "Карельская кухня" },
  { icon: Flame, name: "Костровая зона", desc: "Мангалы и дрова" },
  { icon: Bath, name: "Баня на дровах", desc: "По предварительной записи" },
  { icon: Dumbbell, name: "Спортплощадка", desc: "Волейбол, бадминтон" },
  { icon: Dog, name: "Дружелюбно к питомцам", desc: "Принимаем с хвостиками" },
  { icon: Baby, name: "Детская площадка", desc: "Для малышей 3-12 лет" },
  { icon: ShieldCheck, name: "Круглосуточная охрана", desc: "Видеонаблюдение" },
  { icon: TreePine, name: "Лесные тропы", desc: "5 км маркированных маршрутов" },
  { icon: ShowerHead, name: "Горячий душ", desc: "На пляже в летний сезон" },
  { icon: Waves, name: "Пляж и пирс", desc: "Лодки и SUP в прокат" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Инфраструктура</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Всё для комфортного отдыха
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы продумали каждую деталь, чтобы вам не пришлось ни о чём беспокоиться.
          </p>
        </div>

        <TooltipProvider delayDuration={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((a, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <Card className="hover:shadow-lg hover:border-primary/30 transition-all cursor-default group">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <a.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{a.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{a.name} — {a.desc}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <Separator className="my-12" />

        <div className="text-center">
          <p className="text-muted-foreground mb-2">Все удобства включены в стоимость проживания</p>
          <Badge variant="outline" className="text-base px-4 py-1.5">Без скрытых доплат</Badge>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
