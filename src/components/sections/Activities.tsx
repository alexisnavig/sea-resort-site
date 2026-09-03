import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Fish, Bike, Trees, Snowflake, Bot as Boat, Mountain, Camera, Flame } from "lucide-react";

const activities = [
  {
    icon: Fish,
    title: "Рыбалка",
    desc: "Щука, окунь, лещ, судак. Снасти и лодка в прокат.",
    image: "https://images.pexels.com/photos/2344572/pexels-photo-2344572.jpeg?auto=compress&cs=tinysrgb&w=800",
    season: "Круглый год",
    price: "от 500₽",
  },
  {
    icon: Boat,
    title: "Водные прогулки",
    desc: "Лодки, каяки и SUP-борды. Прогулки по озеру и к островам.",
    image: "https://images.pexels.com/photos/33944113/pexels-photo-33944113.jpeg?auto=compress&cs=tinysrgb&w=800",
    season: "Май — Сентябрь",
    price: "от 300₽/час",
  },
  {
    icon: Trees,
    title: "Лесные походы",
    desc: "Маршруты от 2 до 15 км. Грибы, ягоды, водопады.",
    image: "https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=800",
    season: "Круглый год",
    price: "Бесплатно",
  },
  {
    icon: Flame,
    title: "Вечерние костры",
    desc: "Костровая зона с беседкой. Песни под гитару и звёздное небо.",
    image: "https://images.pexels.com/photos/8481642/pexels-photo-8481642.jpeg?auto=compress&cs=tinysrgb&w=800",
    season: "Круглый год",
    price: "Бесплатно",
  },
  {
    icon: Snowflake,
    title: "Зимние виды",
    desc: "Лыжи, коньки, снегокаты. Заливаем каток на озере.",
    image: "https://images.pexels.com/photos/10508915/pexels-photo-10508915.jpeg?auto=compress&cs=tinysrgb&w=800",
    season: "Декабрь — Март",
    price: "от 200₽",
  },
  {
    icon: Camera,
    title: "Фототуры",
    desc: "Экскурсии к самым живописным местам Карелии с гидом.",
    image: "https://images.pexels.com/photos/163915/pexels-photo-163915.jpeg?auto=compress&cs=tinysrgb&w=800",
    season: "Круглый год",
    price: "от 1500₽",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Развлечения</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Чем заняться на турбазе
          </h2>
          <p className="text-muted-foreground text-lg">
            От рыбалки на рассвете до гитары у костра — скучать не придётся.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <HoverCard key={i} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-xl transition-all cursor-default">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <a.icon className="h-5 w-5" />
                        <span className="font-display font-semibold">{a.title}</span>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">{a.price}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{a.season}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <a.icon className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{a.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{a.season}</Badge>
                      <Badge className="text-xs">{a.price}</Badge>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#booking">Забронировать активный отдых</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
