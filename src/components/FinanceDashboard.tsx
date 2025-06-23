
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, BarChart3, CreditCard, TrendingUp, User, Bell, Settings, Home } from "lucide-react";
import CreditScoreCard from "./finance/CreditScoreCard";
import TransactionsChart from "./finance/TransactionsChart";
import TransactionCalendar from "./finance/TransactionCalendar";
import BalanceCard from "./finance/BalanceCard";
import ExpensesChart from "./finance/ExpensesChart";
import FriendsSection from "./finance/FriendsSection";
import AvailableBalance from "./finance/AvailableBalance";

const FinanceDashboard = () => {
  const navigationItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Transactions", icon: CreditCard, active: false },
    { name: "Reports", icon: BarChart3, active: false },
    { name: "Statistics", icon: TrendingUp, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-semibold">VeloFi</span>
        </div>
        
        <nav className="space-y-2">
          {navigationItems.map((item, index) => (
            <Button 
              key={index}
              variant={item.active ? "default" : "ghost"} 
              className="w-full justify-start gap-3"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
              {item.name === "Reports" && (
                <Badge variant="secondary" className="ml-auto">
                  5
                </Badge>
              )}
            </Button>
          ))}
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              <Bell className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-8 space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-2 gap-6">
              <CreditScoreCard />
              <TransactionsChart />
            </div>
            
            {/* Middle Row */}
            <div className="grid grid-cols-2 gap-6">
              <TransactionCalendar />
              <BalanceCard />
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-6">
              <ExpensesChart />
              <FriendsSection />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-4">
            <AvailableBalance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
