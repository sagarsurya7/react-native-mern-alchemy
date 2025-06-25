
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TradingAnalytics } from "@/components/trading/TradingAnalytics";

const DailyTradeActivity = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-3xl font-bold">Daily Trade Activity</h1>
      </div>
      <TradingAnalytics />
    </div>
  );
};

export default DailyTradeActivity;
