import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isLanding ? "glass" : "bg-background border-b border-border"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">ServiFy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/categorias" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Categorias
            </Link>
            <Link to="/como-funciona" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Como funciona
            </Link>
            <Link to="/para-profissionais" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Para profissionais
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <Link to="/login">
                Entrar
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/cadastro">
                Cadastrar
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link
                to="/categorias"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
              <Link
                to="/como-funciona"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Como funciona
              </Link>
              <Link
                to="/para-profissionais"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Para profissionais
              </Link>
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Entrar
                  </Link>
                </Button>
                <Button className="flex-1" asChild>
                  <Link to="/cadastro" onClick={() => setIsMenuOpen(false)}>
                    Cadastrar
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
