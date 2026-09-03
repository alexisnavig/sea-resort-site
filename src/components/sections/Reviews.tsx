import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Анна Соколова",
    avatar: "https://images.pexels.com/photos/1/photo-1.jpeg?auto=compress&cs=tinysrgb&w=200",
    initials: "АС",
    rating: 5,
    date: "Август 2026",
    text: "Отдыхали семьёй неделю. Дети в восторге от озера и костров. Домик уютный, всё чисто. Баня — просто сказка!",
    room: "Коттедж",
  },
  {
    name: "Дмитрий Иванов",
    avatar: "https://images.pexels.com/photos/2/photo-2.jpeg?auto=compress&cs=tinysrgb&w=200",
    initials: "ДИ",
    rating: 5,
    date: "Июль 2026",
    text: "Приезжали на рыбалку. Поймали щуку на 4 кг! Персонал помог с лодкой и снастями. Вернёмся обязательно.",
    room: "Комфорт",
  },
  {
    name: "Екатерина Петрова",
    avatar: "https://images.pexels.com/photos/3/photo-3.jpeg?auto=compress&cs=tinysrgb&w=200",
    initials: "ЕП",
    rating: 4,
    date: "Июнь 2026",
    text: "Очень тихое и живописное место. Завтраки простые, но вкусные. Хотелось бы больше Wi-Fi точек, но в целом супер.",
    room: "Стандарт",
  },
  {
    name: "Михаил Орлов",
    avatar: "https://images.pexels.com/photos/4/photo-4.jpeg?auto=compress&cs=tinysrgb&w=200",
    initials: "МО",
    rating: 5,
    date: "Май 2026",
    text: "Праздновали годовщину свадьбы. Сняли коттедж с камином. Романтика, природа, тишина. Идеально для пар.",
    room: "Коттедж",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Отзывы гостей</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Что говорят наши гости
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-warning text-warning" />
              ))}
            </div>
            <span className="font-display text-2xl font-bold">4.9</span>
            <span className="text-muted-foreground">из 5 · 847 отзывов</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={r.avatar} alt={r.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{r.name}</h4>
                        <p className="text-xs text-muted-foreground">{r.date} · {r.room}</p>
                      </div>
                      <Quote className="h-8 w-8 text-primary/15" />
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${idx < r.rating ? "fill-warning text-warning" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                      {r.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-10 max-w-md mx-auto" />

        <div className="text-center">
          <Button variant="outline" size="lg">Все отзывы на Яндекс.Картах</Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
