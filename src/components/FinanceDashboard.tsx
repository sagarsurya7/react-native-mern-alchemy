
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import CreditScoreCard from "./finance/CreditScoreCard";
import TransactionsChart from "./finance/TransactionsChart";
import TransactionCalendar from "./finance/TransactionCalendar";
import BalanceCard from "./finance/BalanceCard";
import ExpensesChart from "./finance/ExpensesChart";
import FriendsSection from "./finance/FriendsSection";
import AvailableBalance from "./finance/AvailableBalance";

const FinanceDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">Finance Dashboard</h1>
          </div>
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
