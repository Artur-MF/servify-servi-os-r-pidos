import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">ServiFy</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Conectando você aos melhores profissionais da sua região.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/categorias" className="hover:text-background transition-colors">Categorias</Link></li>
              <li><Link to="/profissionais" className="hover:text-background transition-colors">Profissionais</Link></li>
              <li><Link to="/como-funciona" className="hover:text-background transition-colors">Como funciona</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Para profissionais</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/cadastro-profissional" className="hover:text-background transition-colors">Cadastre-se</Link></li>
              <li><Link to="/dashboard" className="hover:text-background transition-colors">Dashboard</Link></li>
              <li><Link to="/ajuda" className="hover:text-background transition-colors">Central de ajuda</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/contato" className="hover:text-background transition-colors">Contato</Link></li>
              <li><Link to="/termos" className="hover:text-background transition-colors">Termos de uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-background transition-colors">Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2024 ServiFy. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Instagram
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Facebook
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
