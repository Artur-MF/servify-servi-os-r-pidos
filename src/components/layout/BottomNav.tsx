import { Link, useLocation } from "react-router-dom";
import { Home, Search, Calendar, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: Search, label: "Buscar", path: "/categorias" },
  { icon: Calendar, label: "Agenda", path: "/agenda" },
  { icon: MessageCircle, label: "Chat", path: "/mensagens" },
  { icon: User, label: "Perfil", path: "/perfil" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[60px]",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon 
                size={22} 
                className={cn(
                  "transition-transform duration-200",
                  isActive && "scale-110"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute -bottom-0.5 w-1 h-1 rounded-full gradient-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
