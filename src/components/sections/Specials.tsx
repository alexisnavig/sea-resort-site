import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Percent, Users, Gift, Sparkles } from "lucide-react";

const specials = [
  {
    icon: Percent,
    badge: "−20%",
    badgeColor: "bg-accent text-accent-foreground",
    title: "Скидка на будни в межсезонье",
    desc: "Забронируйте проживание с воскресенья по четверг в мае или октябре и получите скидку 20%.",
    cta: "Забронировать",
  },
  {
    icon: Gift,
    badge: "Подарок",
    badgeColor: "bg-warning text-warning-foreground",
    title: "Баня в подарок при бронировании от 5 ночей",
    desc: "При бронировании от 5 ночей в любом номере — один сеанс бани на дровах абсолютно бесплатно.",
    cta: "Выбрать даты",
  },
  {
    icon: Users,
    badge: "−15%",
    badgeColor: "bg-primary text-primary-foreground",
    title: "Корпоративный отдых",
    desc: "Группам от 10 человек — скидка 15% и бесплатная организация костровой зоны с гитарой.",
    cta: "Обсудить детали",
  },
];

const Specials = () => {
  return (
    <section id="specials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/35690361/pexels-photo-35690361.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Закат на озере"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lake-deep/90 via-lake-deep/80 to-lake-deep/95" style={{ background: "hsl(var(--lake-deep) / 0.85)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 text-white">
          <Badge className="mb-4 bg-white/15 text-white border-white/20 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-1" /> Спецпредложения
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Выгодные предложения сезона
          </h2>
          <p className="text-white/80 text-lg">
            Воспользуйтесь нашими акциями и сделайте отдых ещё доступнее.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((s, i) => (
            <Card key={i} className="glass border-white/10 text-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <Badge className={s.badgeColor}>{s.badge}</Badge>
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
                <Separator className="bg-white/15" />
                <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" asChild>
                  <a href="#booking"><Calendar className="h-4 w-4" /> {s.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
