import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, SlidersHorizontal, X, Star, Clock, DollarSign, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const professionals = [
  {
    id: "1",
    name: "Carlos Silva",
    specialty: "Eletricista",
    rating: 4.9,
    reviews: 127,
    distance: "1.2 km",
    price: "R$ 80/h",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
    verified: true,
    available: true,
  },
  {
    id: "2",
    name: "Ana Oliveira",
    specialty: "Diarista",
    rating: 5.0,
    reviews: 89,
    distance: "0.8 km",
    price: "R$ 150/dia",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    verified: true,
    available: true,
  },
  {
    id: "3",
    name: "Roberto Santos",
    specialty: "Encanador",
    rating: 4.8,
    reviews: 203,
    distance: "2.5 km",
    price: "R$ 100/h",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    verified: false,
    available: true,
  },
  {
    id: "4",
    name: "Fernanda Lima",
    specialty: "Pintora",
    rating: 4.7,
    reviews: 56,
    distance: "3.1 km",
    price: "R$ 70/h",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
    verified: true,
    available: false,
  },
  {
    id: "5",
    name: "Marcos Pereira",
    specialty: "Pedreiro",
    rating: 4.6,
    reviews: 178,
    distance: "1.8 km",
    price: "R$ 90/h",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
    verified: true,
    available: true,
  },
  {
    id: "6",
    name: "Juliana Costa",
    specialty: "Técnica de TI",
    rating: 4.9,
    reviews: 92,
    distance: "0.5 km",
    price: "R$ 120/h",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop",
    verified: true,
    available: true,
  },
];

const filters = [
  { label: "Melhor avaliação", icon: Star, value: "rating" },
  { label: "Mais próximo", icon: MapPin, value: "distance" },
  { label: "Menor preço", icon: DollarSign, value: "price" },
  { label: "Disponível agora", icon: Clock, value: "available" },
];

const Profissionais = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Search Header */}
        <section className="bg-muted/50 py-6 md:py-8 sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar profissional..."
                    className="pl-12 bg-background"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Localização"
                    className="pl-12 bg-background w-40 md:w-auto"
                  />
                </div>
              </div>
              <Button
                variant="outline"
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
            
            {/* Filter Pills */}
            <div className={cn(
              "flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-2",
              showFilters ? "flex" : "hidden md:flex"
            )}>
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(activeFilter === filter.value ? null : filter.value)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    activeFilter === filter.value
                      ? "gradient-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  )}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </button>
              ))}
              {activeFilter && (
                <button
                  onClick={() => setActiveFilter(null)}
                  className="flex items-center gap-1 px-3 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                  Limpar
                </button>
              )}
            </div>
          </div>
        </section>
        
        {/* Results */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{professionals.length}</span> profissionais encontrados
              </p>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowUpDown className="w-4 h-4" />
                Ordenar
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((professional, index) => (
                <div
                  key={professional.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProfessionalCard {...professional} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Profissionais;
