import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Categorias from "./pages/Categorias";
import Profissionais from "./pages/Profissionais";
import PerfilProfissional from "./pages/PerfilProfissional";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Agendar from "./pages/Agendar";
import Pagamento from "./pages/Pagamento";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/profissional/:id" element={<PerfilProfissional />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/agendar/:id" element={<Agendar />} />
          <Route path="/pagamento/:id" element={<Pagamento />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
