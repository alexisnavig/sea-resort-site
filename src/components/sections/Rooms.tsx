import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Users, Bed, Maximize, Wifi, Coffee, Check } from "lucide-react";

const rooms = [
  {
    id: "standard",
    name: "Стандарт",
    price: 3500,
    image: "https://images.pexels.com/photos/14465275/pexels-photo-14465275.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: 2,
    beds: "1 двуспальная кровать",
    area: 18,
    amenities: ["Wi-Fi", "Душ", "Холодильник", "Телевизор"],
    popular: false,
  },
  {
    id: "comfort",
    name: "Комфорт",
    price: 5500,
    image: "https://images.pexels.com/photos/5439495/pexels-photo-5439495.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: 3,
    beds: "1 двуспальная + 1 односпальная",
    area: 28,
    amenities: ["Wi-Fi", "Душ", "Кухня", "Телевизор", "Кондиционер", "Терраса"],
    popular: true,
  },
  {
    id: "lodge",
    name: "Коттедж",
    price: 9500,
    image: "https://images.pexels.com/photos/30070551/pexels-photo-30070551.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: 6,
    beds: "2 спальни, 4 кровати",
    area: 55,
    amenities: ["Wi-Fi", "2 санузла", "Кухня", "Камин", "Сауна", "Терраса с видом"],
    popular: false,
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Размещение</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Выберите свой домик
          </h2>
          <p className="text-muted-foreground text-lg">
            Три категории проживания — от уютной комнаты для двоих до просторного коттеджа для семьи или компании.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Все номера</TabsTrigger>
              <TabsTrigger value="standard">Стандарт</TabsTrigger>
              <TabsTrigger value="comfort">Комфорт</TabsTrigger>
              <TabsTrigger value="lodge">Коттедж</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </TabsContent>

          {rooms.map((room) => (
            <TabsContent key={room.id} value={room.id} className="mt-0">
              <div className="flex justify-center">
                <div className="max-w-md w-full">
                  <RoomCard room={room} />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

interface Room {
  id: string;
  name: string;
  price: number;
  image: string;
  capacity: number;
  beds: string;
  area: number;
  amenities: string[];
  popular: boolean;
}

const RoomCard = ({ room }: { room: Room }) => (
  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
    <div className="relative overflow-hidden">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {room.popular && (
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
          Популярный выбор
        </Badge>
      )}
      <div className="absolute top-3 right-3 glass rounded-lg px-3 py-1.5 border border-border">
        <span className="font-display font-bold text-primary text-lg">{room.price}₽</span>
        <span className="text-xs text-muted-foreground"> /ночь</span>
      </div>
    </div>

    <CardHeader>
      <CardTitle className="text-xl">{room.name}</CardTitle>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {room.capacity} чел.</span>
        <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> {room.area} м²</span>
        <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {room.beds}</span>
      </div>
    </CardHeader>

    <CardContent className="flex-1">
      <div className="flex flex-wrap gap-2">
        {room.amenities.map((a) => (
          <span key={a} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md">
            {a === "Wi-Fi" && <Wifi className="h-3 w-3 text-primary" />}
            {a === "Кухня" && <Coffee className="h-3 w-3 text-primary" />}
            <Check className="h-3 w-3 text-accent" />
            {a}
          </span>
        ))}
      </div>
    </CardContent>

    <CardFooter>
      <Button asChild className="w-full">
        <a href="#booking">Забронировать</a>
      </Button>
    </CardFooter>
  </Card>
);

export default Rooms;
