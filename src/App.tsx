import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AccountCreated from "./components/AccountCreated";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PageWrapper from "./components/PageWrapper";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/account-created" element={<PageWrapper><AccountCreated /></PageWrapper>} />
        <Route path="/about" element={<Layout><PageWrapper><About /></PageWrapper></Layout>} />
        <Route path="/contact" element={<Layout><PageWrapper><Contact /></PageWrapper></Layout>} />
        {/* 👇 Dashboard gets macOS-style opening */}
        <Route path="/dashboard" element={<Layout><PageWrapper macOpen><Dashboard /></PageWrapper></Layout>} />
        <Route path="*" element={<Layout><PageWrapper><NotFound /></PageWrapper></Layout>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
