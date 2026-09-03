import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, MapPin, Star, ChevronDown, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/36103492/pexels-photo-36103492.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Горное озеро"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/15 text-white border-white/20 backdrop-blur-sm hover:bg-white/25">
            <MapPin className="h-3 w-3 mr-1" /> Карелия, озеро Светлое
          </Badge>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Отдых у чистейшего озера
            <span className="block text-primary-foreground mt-2">среди карельских лесов</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Турбаза «Изумрудный Берег» — это уютные домики, рыбалка, баня и тишина
            природы вдали от городской суеты. Круглый год.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-base h-14 px-8">
              <a href="#booking"><Calendar className="h-5 w-5" /> Забронировать отдых</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base h-14 px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
              <a href="#about">Узнать больше</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Users, value: "200+", label: "Гостей ежегодно" },
              { icon: Star, value: "4.9", label: "Средняя оценка" },
              { icon: Waves, value: "12", label: "Домиков на берегу" },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-xl p-4 border border-white/10">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary-foreground" />
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-float"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
