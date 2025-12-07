import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CategoryCard } from "@/components/CategoryCard";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StepCard } from "@/components/StepCard";
import {
  Search,
  MapPin,
  Zap,
  Wrench,
  Droplets,
  Paintbrush,
  Home,
  Monitor,
  Scissors,
  Flower2,
  Car,
  ChevronRight,
  Shield,
  Clock,
  CreditCard,
  Star,
} from "lucide-react";
import heroWorker from "@/assets/hero-worker.jpg";

const categories = [
  { icon: Zap, title: "Eletricista", description: "Instalações e reparos", href: "/profissionais?categoria=eletricista" },
  { icon: Droplets, title: "Encanador", description: "Vazamentos e instalações", href: "/profissionais?categoria=encanador" },
  { icon: Wrench, title: "Pedreiro", description: "Construção e reformas", href: "/profissionais?categoria=pedreiro" },
  { icon: Paintbrush, title: "Pintor", description: "Pintura residencial", href: "/profissionais?categoria=pintor" },
  { icon: Home, title: "Diarista", description: "Limpeza e organização", href: "/profissionais?categoria=diarista" },
  { icon: Monitor, title: "Técnico TI", description: "Computadores e redes", href: "/profissionais?categoria=tecnico-ti" },
  { icon: Scissors, title: "Montador", description: "Móveis e estruturas", href: "/profissionais?categoria=montador" },
  { icon: Flower2, title: "Jardineiro", description: "Jardins e paisagismo", href: "/profissionais?categoria=jardineiro" },
];

const featuredProfessionals = [
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
];

const testimonials = [
  {
    name: "Maria Fernanda",
    role: "Cliente há 1 ano",
    content: "Encontrei um eletricista incrível em menos de 10 minutos. O serviço foi impecável e o preço justo. Recomendo demais!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "João Pedro",
    role: "Cliente há 6 meses",
    content: "A praticidade é incrível. Agendei um pintor para o fim de semana e ele chegou pontualmente. Casa ficou linda!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Carla Mendes",
    role: "Cliente há 3 meses",
    content: "O chat integrado facilita muito a comunicação. Consegui tirar todas as dúvidas antes de contratar o serviço.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">+10.000 profissionais disponíveis</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Encontre serviços perto de você{" "}
                <span className="text-gradient">em minutos</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                Conectamos você aos melhores profissionais da sua região. Eletricistas, encanadores, pintores e muito mais.
              </p>
              
              {/* Search Bar */}
              <div className="bg-card rounded-2xl p-2 shadow-card max-w-xl mx-auto md:mx-0">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="O que você precisa?"
                      className="pl-12 border-0 bg-muted/50 h-12"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Sua localização"
                      className="pl-12 border-0 bg-muted/50 h-12"
                    />
                  </div>
                  <Button size="lg" className="h-12 px-8">
                    Buscar
                  </Button>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Avaliações reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Suporte 24h</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
                <img
                  src={heroWorker}
                  alt="Profissional ServiFy"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating Cards */}
                <div className="absolute -left-6 top-1/4 bg-card rounded-2xl p-4 shadow-card animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">4.9/5</p>
                      <p className="text-xs text-muted-foreground">Avaliação média</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-1/4 bg-card rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Pague online</p>
                      <p className="text-xs text-muted-foreground">De forma segura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Categorias populares
              </h2>
              <p className="text-muted-foreground">
                Encontre o profissional ideal para sua necessidade
              </p>
            </div>
            <Link to="/categorias" className="hidden md:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver todas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
          
          <Link to="/categorias" className="md:hidden flex items-center justify-center gap-1 text-primary font-medium mt-6">
            Ver todas as categorias <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contratar um profissional nunca foi tão fácil. Siga estes passos simples.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <StepCard
              number={1}
              title="Busque o serviço"
              description="Digite o que você precisa ou navegue pelas categorias para encontrar o profissional ideal."
              className="animate-fade-in"
            />
            <StepCard
              number={2}
              title="Compare e escolha"
              description="Veja avaliações, preços e portfólios. Escolha o profissional que melhor atende você."
              className="animate-fade-in"
            />
            <StepCard
              number={3}
              title="Contrate e pague"
              description="Agende o serviço, converse pelo chat e pague de forma segura pela plataforma."
              className="animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Profissionais em destaque
              </h2>
              <p className="text-muted-foreground">
                Os mais bem avaliados perto de você
              </p>
            </div>
            <Link to="/profissionais" className="hidden md:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProfessionals.map((professional) => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
          
          <Link to="/profissionais" className="md:hidden flex items-center justify-center gap-1 text-primary font-medium mt-6">
            Ver todos os profissionais <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milhares de pessoas já encontraram o profissional perfeito na ServiFy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
        <div className="relative gradient-primary rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                É um profissional?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Cadastre-se gratuitamente e comece a receber clientes hoje mesmo. Milhares de oportunidades te esperam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="xl" asChild>
                  <Link to="/cadastro-profissional">
                    Quero me cadastrar
                  </Link>
                </Button>
                <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/como-funciona">
                    Saiba mais
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
