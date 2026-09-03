import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, Calendar, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Гостей в этом году", value: 1247, max: 1500 },
  { icon: Calendar, label: "Дней в сезоне", value: 92, max: 120 },
  { icon: TrendingUp, label: "Загрузка номеров", value: 87, max: 100, suffix: "%" },
  { icon: Award, label: "Средняя оценка", value: 49, max: 50, display: "4.9" },
];

const team = [
  { name: "Сергей", role: "Управляющий", initials: "С", avatar: "" },
  { name: "Ольга", role: "Администратор", initials: "О", avatar: "" },
  { name: "Иван", role: "Рыболов-гид", initials: "И", avatar: "" },
  { name: "Марина", role: "Повар", initials: "М", avatar: "" },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Наша команда и цифры</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Мы растём вместе с вами
          </h2>
          <p className="text-muted-foreground text-lg">
            За 15 лет работы мы приняли тысячи гостей и постоянно улучшаем сервис.
          </p>
        </div>

        {/* Stats with progress */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-primary">
                    {s.display || s.value.toLocaleString("ru-RU")}{s.suffix || ""}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{s.label}</p>
                  <Progress value={(s.value / s.max) * 100} className="mt-2 h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-10" />

        {/* Team */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Команда «Изумрудного Берега»
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Avatar className="h-20 w-20 border-4 border-primary/10">
                    {member.avatar ? (
                      <AvatarImage src={member.avatar} alt={member.name} />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary font-display text-2xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Loading skeleton demo */}
        <div className="mt-12 max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Обновляем статистику в реальном времени</CardTitle>
              <CardDescription>Данные за сезон 2026</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stats;
