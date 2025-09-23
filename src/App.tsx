import { Toaster } from "@/components/ui/toaster";
import React, { Suspense, lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



import DashboardLayout from "@/components/DashboardLayout";
import AccountCreated from "./components/AccountCreated";
import Layout from "@/components/Layout";
import Upper from "./components/Upper";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoggedOut from "./components/LoggedOut"
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PageWrapper from "./components/PageWrapper";
const CropHealth = lazy(() => import("./pages/CropHealth"));
const LiveAlerts = lazy(() => import("./pages/LiveAlerts"));
const Weather = lazy(() => import("./pages/Weather"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><PageWrapper><Index /></PageWrapper></Layout>} />
        <Route path="/login" element={<Layout><PageWrapper><Login /></PageWrapper></Layout>} />
        <Route path="/account-created" element={<PageWrapper><AccountCreated /></PageWrapper>} />
        <Route path="/logged-out" element={<PageWrapper><LoggedOut /></PageWrapper>} />

        <Route path="/about" element={<Layout><PageWrapper><About /></PageWrapper></Layout>} />
        <Route path="/contact" element={<Layout><PageWrapper><Contact /></PageWrapper></Layout>} />
        {/* 👇 Dashboard gets macOS-style opening */}
        <Route path="/dashboard" element={<Upper><DashboardLayout><Dashboard /></DashboardLayout></Upper>} />
        <Route path="/crop-health" element={<DashboardLayout><CropHealth /></DashboardLayout>} />
        <Route path="/live-alerts" element={<DashboardLayout><LiveAlerts /></DashboardLayout>} />
        <Route path="/weather" element={<DashboardLayout><Weather /></DashboardLayout>} />
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
