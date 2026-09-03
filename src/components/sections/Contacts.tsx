import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast, toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      toast({ title: "Заполните обязательные поля", description: "Имя, телефон и сообщение обязательны.", variant: "destructive" });
      return;
    }
    toast({ title: "Сообщение отправлено!", description: "Мы ответим вам в течение 24 часов." });
    setName(""); setPhone(""); setEmail(""); setTopic(""); setMessage("");
  };

  return (
    <section id="contacts" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Контакты</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg">
            Есть вопросы? Напишите нам — ответим в течение 24 часов.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 space-y-5">
                <h3 className="font-display font-semibold text-lg">Реквизиты и связь</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Адрес", value: "Республика Карелия, Лахденпохский район, озеро Светлое, 12" },
                    { icon: Phone, label: "Телефон", value: "8 800 123-45-67", href: "tel:+78001234567" },
                    { icon: Mail, label: "Email", value: "info@izumrud-bereg.ru", href: "mailto:info@izumrud-bereg.ru" },
                    { icon: Clock, label: "Регистрация", value: "Заезд с 14:00, выезд до 12:00" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="overflow-hidden">
              <div className="relative h-64 bg-muted">
                <img
                  src="https://images.pexels.com/photos/163912/pexels-photo-163912.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Карта расположения"
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass rounded-xl p-4 border border-border text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold">Озеро Светлое, Карелия</p>
                    <p className="text-xs text-muted-foreground">120 км от Петрозаводска</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в кратчайшие сроки.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name" className="text-xs text-muted-foreground">Имя *</Label>
                    <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-phone" className="text-xs text-muted-foreground">Телефон *</Label>
                    <Input id="c-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-email" className="text-xs text-muted-foreground">Email</Label>
                  <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-topic" className="text-xs text-muted-foreground">Тема обращения</Label>
                  <Select value={topic} onValueChange={setTopic}>
                    <SelectTrigger id="c-topic">
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="booking">Бронирование</SelectItem>
                      <SelectItem value="info">Вопрос об услугах</SelectItem>
                      <SelectItem value="corporate">Корпоративный отдых</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-message" className="text-xs text-muted-foreground">Сообщение *</Label>
                  <Textarea id="c-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ваш вопрос или пожелание..." rows={4} />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button size="lg" className="w-full" onClick={handleSubmit}>
                <Send className="h-4 w-4" /> Отправить сообщение
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Мы не передаём ваши данные третьим лицам.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
