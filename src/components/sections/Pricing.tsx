import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Check, X, Calendar, Percent } from "lucide-react";

const seasons = [
  { name: "Низкий сезон", period: "Ноя — Апр", price: "3 500₽", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "Межсезонье", period: "Май, Окт", price: "4 500₽", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
  { name: "Высокий сезон", period: "Июн — Сен", price: "6 500₽", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
];

const discounts = [
  { label: "Раннее бронирование (за 60+ дней)", value: "−15%" },
  { label: "Длительное проживание (7+ ночей)", value: "−10%" },
  { label: "Пенсионерам и многодетным семьям", value: "−10%" },
  { label: "Будни (вс–чт) в низкий сезон", value: "−20%" },
];

const comparison = [
  { feature: "Завтрак включён", standard: false, comfort: true, lodge: true },
  { feature: "Wi-Fi", standard: true, comfort: true, lodge: true },
  { feature: "Баня (1 сеанс/день)", standard: false, comfort: false, lodge: true },
  { feature: "Прокат лодки (2ч/день)", standard: false, comfort: true, lodge: true },
  { feature: "Костровая зона", standard: true, comfort: true, lodge: true },
  { feature: "Уборка номера", standard: "за доп. плату", comfort: "раз в 3 дня", lodge: "ежедневно" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Цены</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Прозрачные цены без сюрпризов
          </h2>
          <p className="text-muted-foreground text-lg">
            Стоимость за ночь в номере «Комфорт». Все удобства включены.
          </p>
        </div>

        {/* Season cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {seasons.map((s, i) => (
            <Card key={i} className={`relative overflow-hidden ${i === 2 ? "border-primary shadow-lg" : ""}`}>
              {i === 2 && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  Популярное время
                </Badge>
              )}
              <CardHeader>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 w-fit ${s.color}`}>
                  <Calendar className="h-3 w-3 inline mr-1" /> {s.period}
                </div>
                <CardTitle className="text-xl">{s.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-display text-4xl font-bold text-primary mb-2">{s.price}</div>
                <p className="text-sm text-muted-foreground">за ночь, номер «Комфорт»</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-10" />

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-6">
            Что включено в стоимость
          </h3>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Услуга</TableHead>
                  <TableHead className="text-center">Стандарт</TableHead>
                  <TableHead className="text-center">Комфорт</TableHead>
                  <TableHead className="text-center">Коттедж</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">{renderCell(row.standard)}</TableCell>
                    <TableCell className="text-center">{renderCell(row.comfort)}</TableCell>
                    <TableCell className="text-center">{renderCell(row.lodge)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <Separator className="my-10" />

        {/* Discounts */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <Badge variant="outline" className="gap-1 text-base px-4 py-1.5">
              <Percent className="h-4 w-4" /> Скидки и акции
            </Badge>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {discounts.map((d, i) => (
              <Card key={i} className="flex items-center justify-between p-4">
                <span className="text-sm font-medium">{d.label}</span>
                <Badge className="bg-accent text-accent-foreground">{d.value}</Badge>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#booking">Рассчитать стоимость</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const renderCell = (val: boolean | string) => {
  if (val === true) return <Check className="h-5 w-5 text-accent mx-auto" />;
  if (val === false) return <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs text-muted-foreground">{val}</span>;
};

export default Pricing;
