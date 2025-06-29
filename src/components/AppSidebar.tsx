import { Calendar, BarChart3, CreditCard, TrendingUp, User, Settings, Home, BookOpen, Activity, DollarSign, FileText, Notebook, Wifi } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigationItems = [
  { name: "Dashboard", icon: Home, path: "/", active: false },
  { name: "Finance Dashboard", icon: CreditCard, path: "/dashboard-finance", active: false },
  { name: "Journal1", icon: BookOpen, path: "/journal1", active: false },
  { name: "Journal2", icon: FileText, path: "/journal2", active: false },
  { name: "Journal3", icon: Notebook, path: "/journal3", active: false },
  { name: "Daily Trade Activity", icon: Activity, path: "/daily-trade-activity", active: false },
  { name: "Forex-BTC-Stocks", icon: DollarSign, path: "/forex-btc-stocks", active: false },
  { name: "Reports", icon: BarChart3, path: "/reports", active: false },
  { name: "WebSocket", icon: Wifi, path: "/websocket", active: false },
  { name: "Statistics", icon: TrendingUp, path: "/statistics", active: false },
  { name: "Settings", icon: Settings, path: "/settings", active: false },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-semibold">VeloFi</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
