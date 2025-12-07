import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const Agendar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric" });
  };

  const handleContinue = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2 && address) {
      navigate(`/pagamento/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-muted/50 pb-32 md:pb-0">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Progress */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <div className="flex gap-2">
                <div className={cn(
                  "flex-1 h-1 rounded-full transition-colors",
                  step >= 1 ? "gradient-primary" : "bg-border"
                )} />
                <div className={cn(
                  "flex-1 h-1 rounded-full transition-colors",
                  step >= 2 ? "gradient-primary" : "bg-border"
                )} />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          {step === 1 && (
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Escolha data e horário
              </h1>
              <p className="text-muted-foreground mb-6">
                Selecione o melhor momento para o serviço
              </p>

              {/* Date Selection */}
              <Card variant="elevated" className="p-4 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Data</h2>
                </div>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                  {dates.map((date) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    const isToday = date.toDateString() === new Date().toDateString();
                    return (
                      <button
                        key={date.toISOString()}
                        onClick={() => setSelectedDate(date)}
                        className={cn(
                          "flex flex-col items-center px-4 py-3 rounded-xl min-w-[70px] transition-all",
                          isSelected
                            ? "gradient-primary text-primary-foreground"
                            : "bg-background border border-border hover:border-primary"
                        )}
                      >
                        <span className={cn(
                          "text-xs mb-1",
                          isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                        )}>
                          {isToday ? "Hoje" : formatDate(date).split(",")[0]}
                        </span>
                        <span className="text-lg font-bold">
                          {date.getDate()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Card>

              {/* Time Selection */}
              <Card variant="elevated" className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Horário</h2>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "py-3 rounded-xl text-sm font-medium transition-all",
                          isSelected
                            ? "gradient-primary text-primary-foreground"
                            : "bg-background border border-border hover:border-primary"
                        )}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Detalhes do serviço
              </h1>
              <p className="text-muted-foreground mb-6">
                Informe onde e o que precisa ser feito
              </p>

              <Card variant="elevated" className="p-4 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Endereço</h2>
                </div>
                <Input
                  placeholder="Rua, número, bairro..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mb-3"
                />
                <Input
                  placeholder="Complemento (opcional)"
                  className="mb-3"
                />
                <Input
                  placeholder="CEP"
                />
              </Card>

              <Card variant="elevated" className="p-4">
                <h2 className="font-semibold text-foreground mb-4">Descrição do serviço</h2>
                <textarea
                  placeholder="Descreva o que você precisa... Ex: Troca de tomadas na sala e quarto"
                  className="w-full h-32 p-4 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4">
        <div className="container mx-auto max-w-md">
          {selectedDate && selectedTime && (
            <div className="flex items-center justify-between mb-3 text-sm">
              <span className="text-muted-foreground">Data e hora:</span>
              <span className="font-medium text-foreground">
                {selectedDate.toLocaleDateString("pt-BR", { day: "numeric", month: "short" })} às {selectedTime}
              </span>
            </div>
          )}
          <Button
            size="lg"
            className="w-full"
            onClick={handleContinue}
            disabled={step === 1 ? !selectedDate || !selectedTime : !address}
          >
            Continuar
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Agendar;
