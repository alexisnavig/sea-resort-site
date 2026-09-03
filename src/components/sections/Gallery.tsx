import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  { src: "https://images.pexels.com/photos/36103492/pexels-photo-36103492.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Озеро на рассвете", title: "Утренний туман" },
  { src: "https://images.pexels.com/photos/12266699/pexels-photo-12266699.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Деревянный домик", title: "Домик в лесу" },
  { src: "https://images.pexels.com/photos/210288/pexels-photo-210288.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Закат на озере", title: "Закат на пирсе" },
  { src: "https://images.pexels.com/photos/33944113/pexels-photo-33944113.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Каякинг", title: "Водные прогулки" },
  { src: "https://images.pexels.com/photos/8481642/pexels-photo-8481642.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Костёр", title: "Вечер у костра" },
  { src: "https://images.pexels.com/photos/30070551/pexels-photo-30070551.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Спальня", title: "Уютный интерьер" },
  { src: "https://images.pexels.com/photos/2344572/pexels-photo-2344572.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Рыбалка", title: "Рыбалка на озере" },
  { src: "https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Лесной поход", title: "Лесные тропы" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Галерея</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Моменты с нашей турбазы
          </h2>
          <p className="text-muted-foreground text-lg">
            Несколько кадров, которые передают атмосферу отдыха у озера.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Card
                  className="overflow-hidden group cursor-pointer p-0 border-0"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="relative overflow-hidden h-48 md:h-56">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-2 text-white">
                        <Camera className="h-4 w-4" />
                        <span className="text-sm font-medium">{img.title}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden">
                <DialogTitle className="sr-only">{img.title}</DialogTitle>
                <DialogDescription className="sr-only">{img.alt}</DialogDescription>
                <img src={img.src} alt={img.alt} className="w-full h-auto max-h-[70vh] object-contain" />
                <div className="p-4 text-center">
                  <p className="font-display font-semibold">{img.title}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Lightbox viewer */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
            <Button variant="ghost" size="icon" className="absolute left-4 text-white hover:bg-white/10" onClick={(e) => { e.stopPropagation(); prev(); }}>
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <Button variant="ghost" size="icon" className="absolute right-4 text-white hover:bg-white/10" onClick={(e) => { e.stopPropagation(); next(); }}>
              <ChevronRight className="h-8 w-8" />
            </Button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="font-display font-semibold">{images[lightboxIndex].title}</p>
              <p className="text-sm text-white/60">{lightboxIndex + 1} / {images.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
