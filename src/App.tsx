
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import HairLoss from "./pages/treatments/HairLoss";
import ErectileDysfunction from "./pages/treatments/ErectileDysfunction";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
import Contact from "./pages/legal/Contact";
import NotFound from "./pages/NotFound";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Client Pages
import ClientDashboard from "./pages/client/ClientDashboard";
import ClientPrescriptions from "./pages/client/ClientPrescriptions";
import ClientHistory from "./pages/client/ClientHistory";
import ClientProfile from "./pages/client/ClientProfile";
import ClientSupport from "./pages/client/ClientSupport";

// Doctor Pages
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import PatientEvaluation from "./pages/doctor/PatientEvaluation";

// Admin Pages
// Note: These would be implemented in future iterations
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AnamnesisFlowCreator from "./pages/admin/AnamnesisFlowCreator";
// import TreatmentPlans from "./pages/admin/TreatmentPlans";
// import UserManagement from "./pages/admin/UserManagement";
// import FinanceDashboard from "./pages/admin/FinanceDashboard";
// import SystemSettings from "./pages/admin/SystemSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/tratamento/queda-capilar" element={<HairLoss />} />
          <Route path="/tratamento/disfuncao-eretil" element={<ErectileDysfunction />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/contato" element={<Contact />} />
          
          {/* Auth Routes */}
          <Route path="/cliente/login" element={<Login />} />
          <Route path="/cliente/registro" element={<Register />} />
          
          {/* Client Routes - Would be protected in a real application */}
          <Route path="/cliente/dashboard" element={<ClientDashboard />} />
          <Route path="/cliente/prescricoes" element={<ClientPrescriptions />} />
          <Route path="/cliente/historico" element={<ClientHistory />} />
          <Route path="/cliente/perfil" element={<ClientProfile />} />
          <Route path="/cliente/suporte" element={<ClientSupport />} />
          
          {/* Doctor Routes - Would be protected in a real application */}
          <Route path="/medico/dashboard" element={<DoctorDashboard />} />
          <Route path="/medico/pacientes/:id" element={<PatientEvaluation />} />
          
          {/* Admin Routes - To be implemented in future iterations */}
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/anamnese" element={<AnamnesisFlowCreator />} />
          <Route path="/admin/planos" element={<TreatmentPlans />} />
          <Route path="/admin/usuarios" element={<UserManagement />} />
          <Route path="/admin/financeiro" element={<FinanceDashboard />} />
          <Route path="/admin/configuracoes" element={<SystemSettings />} /> */}
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
