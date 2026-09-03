import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast, toast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, Users, BedDouble, Check, Waves, Flame, Bath, Fish } from "lucide-react";
import { format, differenceInCalendarDays, addDays } from "date-fns";
import { ru } from "date-fns/locale";
import type { DateRange } from "react-day-picker";

const roomTypes = [
  { id: "standard", name: "Стандарт", price: 3500, capacity: 2 },
  { id: "comfort", name: "Комфорт", price: 5500, capacity: 3 },
  { id: "lodge", name: "Коттедж", price: 9500, capacity: 6 },
];

const extras = [
  { id: "breakfast", label: "Завтрак (шведский стол)", price: 450, icon: Waves },
  { id: "sauna", label: "Баня на дровах (2 часа)", price: 1500, icon: Bath },
  { id: "fishing", label: "Прокат рыболовных снастей", price: 500, icon: Fish },
  { id: "fire", label: "Костровая зона с дровами", price: 300, icon: Flame },
];

const Booking = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [roomType, setRoomType] = useState("comfort");
  const [guests, setGuests] = useState("2");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [progress, setProgress] = useState(0);

  const nights = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return 0;
    return differenceInCalendarDays(dateRange.to, dateRange.from);
  }, [dateRange]);

  const room = roomTypes.find((r) => r.id === roomType)!;
  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const ex = extras.find((e) => e.id === id);
    return sum + (ex?.price || 0);
  }, 0);

  const total = nights > 0 ? nights * room.price + extrasTotal : 0;

  const updateProgress = () => {
    let p = 0;
    if (dateRange?.from && dateRange?.to) p += 25;
    if (roomType) p += 25;
    if (guests) p += 15;
    if (name) p += 15;
    if (phone) p += 10;
    if (email) p += 10;
    setProgress(p);
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateRange?.from || !dateRange?.to) {
      toast({ title: "Выберите даты", description: "Укажите дату заезда и выезда.", variant: "destructive" });
      return;
    }
    if (!name || !phone) {
      toast({ title: "Заполните контакты", description: "Имя и телефон обязательны для бронирования.", variant: "destructive" });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: `Бронь на ${nights} ночей, ${room.name}. Мы перезвоним вам в течение часа.`,
    });
    setDateRange(undefined);
    setName("");
    setPhone("");
    setEmail("");
    setSelectedExtras([]);
    setProgress(0);
  };

  return (
    <section id="booking" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Бронирование</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Забронируйте отдых за минуту
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите даты, номер и дополнения — мы перезвоним для подтверждения.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Форма бронирования</CardTitle>
            <CardDescription>
              Заполните поля ниже. Готовность формы: {progress}%
            </CardDescription>
            <Progress value={progress} className="mt-2" />
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dates */}
              <div className="space-y-3">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" /> Даты проживания
                </Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="checkin" className="text-xs text-muted-foreground">Заезд</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start font-normal" id="checkin">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {dateRange?.from ? format(dateRange.from, "d MMM yyyy", { locale: ru }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dateRange?.from}
                          onSelect={(d) => {
                            setDateRange((prev) => ({
                              from: d,
                              to: prev?.to && d && d > prev.to ? undefined : prev?.to,
                            }));
                            updateProgress();
                          }}
                          disabled={(d) => d < addDays(new Date(), 1)}
                          locale={ru}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="checkout" className="text-xs text-muted-foreground">Выезд</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start font-normal" id="checkout">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {dateRange?.to ? format(dateRange.to, "d MMM yyyy", { locale: ru }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dateRange?.to}
                          onSelect={(d) => {
                            setDateRange((prev) => ({ ...prev, to: d }));
                            updateProgress();
                          }}
                          disabled={(d) => (dateRange?.from ? d <= dateRange.from : d < addDays(new Date(), 1))}
                          locale={ru}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                {nights > 0 && (
                  <Badge variant="outline" className="text-sm">
                    {nights} {nights === 1 ? "ночь" : nights < 5 ? "ночи" : "ночей"}
                  </Badge>
                )}
              </div>

              <Separator />

              {/* Room type */}
              <div className="space-y-3">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-primary" /> Тип номера
                </Label>
                <RadioGroup
                  value={roomType}
                  onValueChange={(v) => { setRoomType(v); updateProgress(); }}
                  className="grid sm:grid-cols-3 gap-3"
                >
                  {roomTypes.map((r) => (
                    <Label
                      key={r.id}
                      htmlFor={r.id}
                      className={`flex flex-col gap-1 p-4 rounded-lg border cursor-pointer transition-all ${
                        roomType === r.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{r.name}</span>
                        <RadioGroupItem value={r.id} id={r.id} />
                      </div>
                      <span className="text-2xl font-display font-bold text-primary">{r.price}₽</span>
                      <span className="text-xs text-muted-foreground">до {r.capacity} чел. · за ночь</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <Separator />

              {/* Guests */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-base font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" /> Количество гостей
                  </Label>
                  <Select value={guests} onValueChange={(v) => { setGuests(v); updateProgress(); }}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Сколько вас?" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Extras */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Дополнительные услуги</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {extras.map((ex) => (
                    <Label
                      key={ex.id}
                      htmlFor={ex.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedExtras.includes(ex.id) ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <Checkbox
                        id={ex.id}
                        checked={selectedExtras.includes(ex.id)}
                        onCheckedChange={() => toggleExtra(ex.id)}
                      />
                      <ex.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm flex-1">{ex.label}</span>
                      <span className="text-sm font-semibold text-primary">+{ex.price}₽</span>
                    </Label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Contact info */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Контактные данные</Label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs text-muted-foreground">Имя *</Label>
                    <Input id="name" value={name} onChange={(e) => { setName(e.target.value); updateProgress(); }} placeholder="Как к вам обращаться" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs text-muted-foreground">Телефон *</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => { setPhone(e.target.value); updateProgress(); }} placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="email" className="text-xs text-muted-foreground">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); updateProgress(); }} placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Summary */}
              <div className="rounded-xl bg-muted/50 p-5 space-y-2">
                <h4 className="font-display font-semibold text-lg mb-3">Итоговая стоимость</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{room.name} × {nights} ноч.</span>
                  <span className="font-medium">{nights > 0 ? nights * room.price : 0}₽</span>
                </div>
                {extrasTotal > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Доп. услуги</span>
                    <span className="font-medium">{extrasTotal}₽</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Итого:</span>
                  <span className="font-display text-2xl font-bold text-primary">{total}₽</span>
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button size="lg" className="w-full text-base h-12" onClick={handleSubmit}>
              <Check className="h-5 w-5" /> Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.
              Бронирование бесплатно — оплата при заезде.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Booking;
