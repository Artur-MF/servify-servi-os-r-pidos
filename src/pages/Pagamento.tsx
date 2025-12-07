import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  CreditCard,
  Smartphone,
  Banknote,
  QrCode,
  CheckCircle,
  MapPin,
  Calendar,
  Clock,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const paymentMethods = [
  { id: "pix", label: "PIX", icon: QrCode, description: "Aprovação instantânea" },
  { id: "credit", label: "Cartão de crédito", icon: CreditCard, description: "Parcele em até 12x" },
  { id: "debit", label: "Cartão de débito", icon: CreditCard, description: "Débito à vista" },
  { id: "cash", label: "Dinheiro", icon: Banknote, description: "Pague ao profissional" },
];

const Pagamento = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("pix");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md animate-scale-in">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Serviço agendado!
          </h1>
          <p className="text-muted-foreground mb-8">
            Você receberá uma confirmação por e-mail e SMS com todos os detalhes.
          </p>
          
          <Card variant="elevated" className="p-4 text-left mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                alt="Profissional"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">Carlos Silva</p>
                <p className="text-sm text-muted-foreground">Eletricista</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>15 de Dezembro, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>14:00</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Rua das Flores, 123 - Centro</span>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Button size="lg" className="w-full" onClick={() => navigate("/")}>
              Ir para o início
            </Button>
            <Button variant="outline" size="lg" className="w-full" onClick={() => navigate("/mensagens")}>
              Conversar com o profissional
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50 pb-32 md:pb-8">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-muted transition-colors mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            Resumo e pagamento
          </h1>
          <p className="text-muted-foreground mb-6">
            Revise os detalhes e confirme o agendamento
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Order Summary */}
            <div className="space-y-4">
              <Card variant="elevated" className="p-4">
                <h2 className="font-semibold text-foreground mb-4">Detalhes do serviço</h2>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                    alt="Profissional"
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Carlos Silva</p>
                    <p className="text-sm text-muted-foreground">Eletricista Residencial</p>
                    <div className="flex items-center gap-1 text-sm text-yellow-600">
                      <span>⭐</span>
                      <span>4.9 (127 avaliações)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>15 de Dezembro, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>14:00 - 16:00 (estimado)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Rua das Flores, 123 - Centro</span>
                  </div>
                </div>
              </Card>

              {/* Price Breakdown */}
              <Card variant="elevated" className="p-4">
                <h2 className="font-semibold text-foreground mb-4">Valores</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Visita técnica</span>
                    <span className="text-foreground">R$ 50,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mão de obra (2h estimado)</span>
                    <span className="text-foreground">R$ 160,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxa de serviço</span>
                    <span className="text-foreground">R$ 21,00</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">R$ 231,00</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <Card variant="elevated" className="p-4">
                <h2 className="font-semibold text-foreground mb-4">Forma de pagamento</h2>
                <div className="space-y-2">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        "w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all",
                        selectedMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        selectedMethod === method.id
                          ? "gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}>
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-foreground">{method.label}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 transition-colors",
                        selectedMethod === method.id
                          ? "border-primary bg-primary"
                          : "border-border"
                      )}>
                        {selectedMethod === method.id && (
                          <CheckCircle className="w-full h-full text-primary-foreground" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </Card>

              {selectedMethod === "credit" && (
                <Card variant="elevated" className="p-4 animate-fade-in">
                  <h2 className="font-semibold text-foreground mb-4">Dados do cartão</h2>
                  <div className="space-y-3">
                    <Input placeholder="Número do cartão" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="MM/AA" />
                      <Input placeholder="CVV" />
                    </div>
                    <Input placeholder="Nome no cartão" />
                  </div>
                </Card>
              )}

              {/* Security Badge */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Pagamento 100% seguro e criptografado</span>
              </div>

              <Button
                size="xl"
                className="w-full"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Processando...
                  </span>
                ) : (
                  "Confirmar agendamento"
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pagamento;
