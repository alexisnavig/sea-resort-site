import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TreePine, Fish, Sun, Snowflake, Heart, Award } from "lucide-react";

const About = () => {
  const features = [
    { icon: TreePine, title: "Экологичность", desc: "Домики из натурального дерева, органичное сочетание с природой." },
    { icon: Fish, title: "Рыбалка", desc: "Озеро богато щукой, окунем и лещом. Удочки и снасти в прокат." },
    { icon: Heart, title: "Здоровье", desc: "Баня на дровах, купание в чистейшей воде, лесные прогулки." },
    { icon: Award, title: "15 лет опыта", desc: "Принимаем гостей с 2011 года. Тысячи довольных отдыхающих." },
  ];

  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/12266699/pexels-photo-12266699.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Деревянный домик у озера"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="glass rounded-2xl p-6 border border-border shadow-xl max-w-[200px]">
                <div className="font-display text-4xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground mt-1">лет принимаем гостей на берегу озера</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Badge variant="secondary">О турбазе</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Место, где природа встречает комфорт
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              «Изумрудный Берег» — это турбаза на берегу карельского озера Светлое,
              окружённая хвойным лесом. Мы создали условия для полноценного отдыха
              круглый год: от летнего купания и рыбалки до зимних лыжных прогулок.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Каждый домик построен из натурального дерева, имеет все удобства и
              панорамный вид на озеро. Здесь нет шума машин и суеты — только
              тишина, свежий воздух и пение птиц.
            </p>

            <Separator />

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{f.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Season badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline" className="gap-1">
                <Sun className="h-3 w-3" /> Лето
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Snowflake className="h-3 w-3" /> Зима
              </Badge>
              <Badge variant="outline">Весна</Badge>
              <Badge variant="outline">Осень</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
