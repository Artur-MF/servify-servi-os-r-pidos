import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color?: string;
}

export function CategoryCard({ icon: Icon, title, description, href, color = "primary" }: CategoryCardProps) {
  return (
    <Link to={href}>
      <Card variant="interactive" className="p-5 h-full">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 gradient-primary"
        )}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </Card>
    </Link>
  );
}
