import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Circle as HelpCircle, Calendar, CreditCard, Dog, Wifi, Baby, Snowflake } from "lucide-react";

const faqs = [
  {
    icon: Calendar,
    q: "За сколько дней нужно бронировать заранее?",
    a: "В высокий сезон (июнь–сентябрь) рекомендуем бронировать за 30–60 дней. В межсезонье достаточно 1–2 недель. При раннем бронировании за 60+ дней действует скидка 15%.",
  },
  {
    icon: CreditCard,
    q: "Как происходит оплата?",
    a: "Бронирование бесплатно — вы оставляете заявку, мы перезваниваем для подтверждения. Оплата производится при заезде: наличными, картой или переводом. Возможен залог 30% для гарантии брони в высокий сезон.",
  },
  {
    icon: Dog,
    q: "Можно ли приехать с домашними животными?",
    a: "Да! Мы дружелюбно относимся к питомцам. Размещение животных — бесплатно в номерах «Комфорт» и «Коттедж». Просим заранее предупредить о наличии животного при бронировании.",
  },
  {
    icon: Wifi,
    q: "Есть ли Wi-Fi на территории?",
    a: "Да, бесплатный Wi-Fi доступен на всей территории базы. В некоторых отдалённых зонах (пляж, лесные тропы) сигнал может быть слабее, но в домиках и ресторане — стабильно.",
  },
  {
    icon: Baby,
    q: "Подходит ли база для отдыха с маленькими детьми?",
    a: "Absolutely. У нас есть детская площадка, мелкий пляж с пологим входом, детские стульчики в ресторане и манежы по запросу. Дети до 5 лет проживают бесплатно.",
  },
  {
    icon: Snowflake,
    q: "Что делать зимой?",
    a: "Зимой мы заливаем каток на озере, выдаём лыжи и коньки в прокат. Работает баня, костровая зона и ресторан. Многие домики оборудованы каминами. Зимний отдых — особое удовольствие!",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Вопросы и ответы</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-muted-foreground text-lg">
            Собрали ответы на самые популярные вопросы наших гостей.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <faq.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium">{faq.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pl-12">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <HelpCircle className="h-5 w-5" />
              <span>Не нашли ответ? </span>
              <a href="#contacts" className="text-primary font-medium hover:underline">
                Напишите нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
