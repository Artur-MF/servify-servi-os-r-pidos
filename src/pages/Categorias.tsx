import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CategoryCard } from "@/components/CategoryCard";
import { Input } from "@/components/ui/input";
import { Search, Zap, Droplets, Wrench, Paintbrush, Home, Monitor, Scissors, Flower2, Car, GraduationCap, Heart, Truck, Camera, ChefHat, Music, Baby, Dog, Shirt, Hammer, Thermometer, Shield, Sparkles, Users } from "lucide-react";

const allCategories = [
  { icon: Zap, title: "Eletricista", description: "Instalações e reparos elétricos", href: "/profissionais?categoria=eletricista" },
  { icon: Droplets, title: "Encanador", description: "Vazamentos e instalações hidráulicas", href: "/profissionais?categoria=encanador" },
  { icon: Wrench, title: "Pedreiro", description: "Construção e reformas", href: "/profissionais?categoria=pedreiro" },
  { icon: Paintbrush, title: "Pintor", description: "Pintura residencial e comercial", href: "/profissionais?categoria=pintor" },
  { icon: Home, title: "Diarista", description: "Limpeza e organização", href: "/profissionais?categoria=diarista" },
  { icon: Monitor, title: "Técnico de TI", description: "Computadores e redes", href: "/profissionais?categoria=tecnico-ti" },
  { icon: Scissors, title: "Montador de móveis", description: "Montagem e desmontagem", href: "/profissionais?categoria=montador" },
  { icon: Flower2, title: "Jardineiro", description: "Jardins e paisagismo", href: "/profissionais?categoria=jardineiro" },
  { icon: Car, title: "Mecânico", description: "Reparos automotivos", href: "/profissionais?categoria=mecanico" },
  { icon: GraduationCap, title: "Professor particular", description: "Aulas e reforço escolar", href: "/profissionais?categoria=professor" },
  { icon: Heart, title: "Cuidador", description: "Cuidados com idosos e doentes", href: "/profissionais?categoria=cuidador" },
  { icon: Truck, title: "Motorista", description: "Transporte e entregas", href: "/profissionais?categoria=motorista" },
  { icon: Camera, title: "Fotógrafo", description: "Eventos e ensaios", href: "/profissionais?categoria=fotografo" },
  { icon: ChefHat, title: "Chef / Cozinheiro", description: "Refeições e eventos", href: "/profissionais?categoria=chef" },
  { icon: Music, title: "Músico", description: "Eventos e aulas", href: "/profissionais?categoria=musico" },
  { icon: Baby, title: "Babá", description: "Cuidados com crianças", href: "/profissionais?categoria=baba" },
  { icon: Dog, title: "Pet Sitter", description: "Cuidados com animais", href: "/profissionais?categoria=pet-sitter" },
  { icon: Shirt, title: "Costureira", description: "Roupas e ajustes", href: "/profissionais?categoria=costureira" },
  { icon: Hammer, title: "Marceneiro", description: "Móveis sob medida", href: "/profissionais?categoria=marceneiro" },
  { icon: Thermometer, title: "Técnico em ar", description: "Ar condicionado e refrigeração", href: "/profissionais?categoria=ar-condicionado" },
  { icon: Shield, title: "Segurança", description: "Segurança patrimonial", href: "/profissionais?categoria=seguranca" },
  { icon: Sparkles, title: "Dedetizador", description: "Controle de pragas", href: "/profissionais?categoria=dedetizador" },
  { icon: Users, title: "Personal Trainer", description: "Exercícios e condicionamento", href: "/profissionais?categoria=personal" },
];

const Categorias = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="bg-muted/50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Todas as categorias
            </h1>
            <p className="text-muted-foreground mb-6">
              Encontre o profissional ideal para qualquer serviço
            </p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar categoria..."
                className="pl-12"
              />
            </div>
          </div>
        </section>
        
        {/* Categories Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CategoryCard {...category} />
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

export default Categorias;
