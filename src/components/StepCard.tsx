import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ number, title, description, className }: StepCardProps) {
  return (
    <div className={cn("text-center md:text-left", className)}>
      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-glow">
        <span className="text-xl font-bold text-primary-foreground">{number}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
