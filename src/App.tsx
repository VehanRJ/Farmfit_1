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
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";
import PageWrapper from "./components/PageWrapper";
import Navbarmini from "./components/Navbar_mini";
import Layoutnew from "./components/Layout_new";
const CropHealth = lazy(() => import("./pages/CropHealth"));
const LiveAlerts = lazy(() => import("./pages/LiveAlerts"));
const Weather = lazy(() => import("./pages/Weather"));
const EnvironmentalConditions = lazy(() => import("./components/EnvironmentalConditions"));


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

        <Route path="/upload" element={<Layout><Upload /></Layout>} />
        <Route path="/about" element={<Layout><PageWrapper><About /></PageWrapper></Layout>} />
        <Route path="/contact" element={<Layout><PageWrapper><Contact /></PageWrapper></Layout>} />
        {/* 👇 Dashboard gets macOS-style opening */}
        <Route path="/dashboard" element={<Layoutnew><DashboardLayout><Dashboard /></DashboardLayout></Layoutnew>} />
        <Route path="/crop-health" element={<Layoutnew><DashboardLayout><CropHealth /></DashboardLayout></Layoutnew>} />
        <Route path="/live-alerts" element={<Layoutnew><DashboardLayout><LiveAlerts /></DashboardLayout></Layoutnew>} />
        <Route path="/weather" element={<DashboardLayout><Weather /></DashboardLayout>} />
        
        <Route path="/EnvironmentalConditions" element={<Layoutnew><DashboardLayout><EnvironmentalConditions /></DashboardLayout></Layoutnew>} />

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
