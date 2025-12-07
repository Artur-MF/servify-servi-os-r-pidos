import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
  Calendar,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Award,
  Briefcase,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const professional = {
  id: "1",
  name: "Carlos Silva",
  specialty: "Eletricista Residencial e Comercial",
  rating: 4.9,
  reviews: 127,
  distance: "1.2 km",
  price: "R$ 80/h",
  available: true,
  verified: true,
  memberSince: "Mar 2022",
  completedJobs: 342,
  responseTime: "~15 min",
  bio: "Eletricista profissional com mais de 15 anos de experiência. Especializado em instalações residenciais e comerciais, manutenção preventiva e corretiva. Trabalho com qualidade e segurança, sempre priorizando a satisfação do cliente.",
  skills: ["Instalações elétricas", "Quadros de distribuição", "Iluminação", "Aterramento", "Manutenção preventiva"],
  certifications: ["NR-10", "NR-35", "Eletricista Industrial - SENAI"],
  portfolio: [
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  ],
  reviews_list: [
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      date: "há 2 dias",
      comment: "Excelente profissional! Chegou no horário, trabalho impecável e preço justo. Super recomendo!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "João Pedro",
      rating: 5,
      date: "há 1 semana",
      comment: "Muito prestativo e atencioso. Resolveu meu problema rapidamente.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 4,
      date: "há 2 semanas",
      comment: "Bom serviço, profissional competente. Recomendo.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ],
};

const PerfilProfissional = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % professional.portfolio.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? professional.portfolio.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-0">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Portfolio Gallery */}
        <section className="relative">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={professional.portfolio[currentImageIndex]}
              alt="Portfólio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            
            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {professional.portfolio.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentImageIndex
                      ? "bg-background w-6"
                      : "bg-background/50"
                  )}
                />
              ))}
            </div>
            
            {/* Actions */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <Heart
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isFavorite ? "fill-primary text-primary" : ""
                  )}
                />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          {/* Profile Header */}
          <Card variant="elevated" className="p-6 mb-6">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                alt={professional.name}
                className="w-20 h-20 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold text-foreground">{professional.name}</h1>
                  {professional.verified && (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground mb-2">{professional.specialty}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{professional.rating}</span>
                    <span className="text-muted-foreground">({professional.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{professional.distance}</span>
                  </div>
                  {professional.available && (
                    <span className="flex items-center gap-1 text-green-600">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Disponível
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{professional.completedJobs}</p>
                <p className="text-xs text-muted-foreground">Serviços</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{professional.responseTime}</p>
                <p className="text-xs text-muted-foreground">Resposta</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{professional.memberSince}</p>
                <p className="text-xs text-muted-foreground">Membro desde</p>
              </div>
            </div>
          </Card>

          {/* About */}
          <Card variant="elevated" className="p-6 mb-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Sobre</h2>
            <p className="text-muted-foreground leading-relaxed">{professional.bio}</p>
            
            {/* Skills */}
            <div className="mt-6">
              <h3 className="font-semibold text-foreground mb-3">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {professional.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-lg text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certificações
              </h3>
              <ul className="space-y-2">
                {professional.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Reviews */}
          <Card variant="elevated" className="p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Avaliações</h2>
              <Link to="#" className="text-primary text-sm font-medium">
                Ver todas
              </Link>
            </div>
            
            <div className="space-y-6">
              {professional.reviews_list.map((review) => (
                <div key={review.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-foreground">{review.name}</p>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3 h-3",
                              i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Pricing */}
          <Card variant="elevated" className="p-6 mb-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Valores</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Valor hora</p>
                <p className="text-2xl font-bold text-foreground">{professional.price}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Visita técnica</p>
                <p className="text-lg font-semibold text-foreground">R$ 50</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 md:hidden">
        <div className="flex gap-3">
          <Button variant="outline" size="lg" className="flex-1">
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat
          </Button>
          <Button size="lg" className="flex-1" asChild>
            <Link to={`/agendar/${professional.id}`}>
              <Calendar className="w-5 h-5 mr-2" />
              Agendar
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed right-8 top-1/2 -translate-y-1/2 w-80">
        <Card variant="elevated" className="p-6">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">A partir de</p>
            <p className="text-3xl font-bold text-foreground">{professional.price}</p>
          </div>
          <div className="space-y-3">
            <Button size="lg" className="w-full" asChild>
              <Link to={`/agendar/${professional.id}`}>
                <Calendar className="w-5 h-5 mr-2" />
                Agendar serviço
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar mensagem
            </Button>
            <Button variant="ghost" size="lg" className="w-full">
              <Phone className="w-5 h-5 mr-2" />
              Ligar agora
            </Button>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default PerfilProfissional;
