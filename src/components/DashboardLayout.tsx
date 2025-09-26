import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedSidebarItem } from "./ui/animated-sidebar-item";

import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Sprout, 
  Bell, 
  CloudSun, 
  BarChart3, 
  Settings,
  LogOut,
  User,
  HelpCircle
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  // Removed unused sidebar state

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Crop Health", path: "/crop-health", icon: Sprout },
    { name: "Live Alerts", path: "/live-alerts", icon: Bell },
    { name: "Weather", path: "/weather", icon: CloudSun },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex mt-[5vh]">
      <div className="border-r">
        <SidebarProvider>
          <Sidebar>
          <SidebarHeader className="p-4 border-b flex items-center justify-between mt-[6vh]">
            <Link to="/" className="flex items-center gap-2 font-bold">
            </Link>
          </SidebarHeader>
    
          <SidebarContent className="p-2">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.path)}
                    className="hover:bg-accent/50"
                  >
                    <AnimatedSidebarItem 
                      to={item.path} 
                      icon={item.icon} 
                      isActive={isActive(item.path)}
                    >
                      {item.name}
                    </AnimatedSidebarItem>
                    
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
    
          <SidebarFooter className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>
        </SidebarProvider>
      </div>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                {navItems.find(item => item.path === location.pathname)?.name}
              </h1>
              <p className="text-muted-foreground">
                Agricultural monitoring and analytics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/live-alerts">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Link>
              </Button>
              <Avatar className="h-8 w-8 hover:ring-2 hover:ring-primary transition-smooth">
                <AvatarFallback>AW</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {children}
            
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;