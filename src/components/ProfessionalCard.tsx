import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";

interface ProfessionalCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  distance: string;
  price: string;
  image: string;
  verified?: boolean;
  available?: boolean;
}

export function ProfessionalCard({
  id,
  name,
  specialty,
  rating,
  reviews,
  distance,
  price,
  image,
  verified = false,
  available = true,
}: ProfessionalCardProps) {
  return (
    <Link to={`/profissional/${id}`}>
      <Card variant="interactive" className="overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-40 object-cover"
          />
          {available && (
            <div className="absolute top-3 left-3 bg-green-500 text-primary-foreground text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
              Disponível
            </div>
          )}
          {verified && (
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-primary text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Verificado
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{specialty}</p>
            </div>
            <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Responde rápido</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-muted-foreground">A partir de</span>
              <p className="font-bold text-foreground">{price}</p>
            </div>
            <Button size="sm">Contratar</Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
