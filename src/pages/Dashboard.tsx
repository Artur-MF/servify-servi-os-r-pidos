import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  DollarSign,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
  MessageCircle,
  ChevronRight,
  Bell,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Serviços do mês", value: "23", icon: Calendar, change: "+12%" },
  { label: "Faturamento", value: "R$ 4.560", icon: DollarSign, change: "+8%" },
  { label: "Avaliação média", value: "4.9", icon: Star, change: "+0.1" },
  { label: "Novos clientes", value: "15", icon: Users, change: "+5" },
];

const upcomingServices = [
  {
    id: 1,
    client: "Maria Silva",
    service: "Instalação elétrica",
    date: "Hoje",
    time: "14:00",
    address: "Rua das Flores, 123",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    client: "João Pedro",
    service: "Manutenção quadro",
    date: "Amanhã",
    time: "09:00",
    address: "Av. Brasil, 456",
    status: "pending",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    client: "Ana Costa",
    service: "Troca de tomadas",
    date: "18 Dez",
    time: "15:30",
    address: "Rua das Palmeiras, 789",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const recentReviews = [
  {
    id: 1,
    client: "Maria Silva",
    rating: 5,
    comment: "Excelente profissional! Trabalho impecável.",
    date: "há 2 dias",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    client: "Pedro Oliveira",
    rating: 5,
    comment: "Muito pontual e resolveu tudo rapidamente.",
    date: "há 1 semana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"agenda" | "historico" | "avaliacoes">("agenda");

  return (
    <div className="min-h-screen bg-muted/50 pb-20 md:pb-0">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Header Section */}
        <section className="bg-background py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                  alt="Perfil"
                  className="w-14 h-14 rounded-2xl object-cover"
                />
                <div>
                  <h1 className="text-xl font-bold text-foreground">Olá, Carlos!</h1>
                  <p className="text-sm text-muted-foreground">Eletricista Verificado</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary text-[10px] text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </span>
                </button>
                <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} variant="elevated" className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "agenda", label: "Agenda" },
                { id: "historico", label: "Histórico" },
                { id: "avaliacoes", label: "Avaliações" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                    activeTab === tab.id
                      ? "gradient-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            {activeTab === "agenda" && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-foreground">Próximos serviços</h2>
                  <button className="text-sm text-primary font-medium">Ver todos</button>
                </div>
                {upcomingServices.map((service) => (
                  <Card key={service.id} variant="interactive" className="p-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={service.image}
                        alt={service.client}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-foreground">{service.client}</p>
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full font-medium",
                            service.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          )}>
                            {service.status === "confirmed" ? "Confirmado" : "Pendente"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{service.service}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {service.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {service.time}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    
                    {service.status === "pending" && (
                      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                        <Button variant="outline" size="sm" className="flex-1">
                          <XCircle className="w-4 h-4 mr-1" />
                          Recusar
                        </Button>
                        <Button size="sm" className="flex-1">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Aceitar
                        </Button>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "avaliacoes" && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-foreground">Avaliações recentes</h2>
                  <button className="text-sm text-primary font-medium">Ver todas</button>
                </div>
                {recentReviews.map((review) => (
                  <Card key={review.id} variant="elevated" className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={review.image}
                        alt={review.client}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-foreground">{review.client}</p>
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
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "historico" && (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Histórico de serviços</h3>
                <p className="text-sm text-muted-foreground">
                  Seus serviços concluídos aparecerão aqui.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
