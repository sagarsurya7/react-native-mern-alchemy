
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TradingDashboard } from "@/components/trading/TradingDashboard";

const ForexBtcStocks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-green-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-sm">T</span>
          </div>
          <span className="font-bold text-lg">TRADING JOURNAL</span>
          <span className="text-sm bg-green-700 px-2 py-1 rounded">Dashboard</span>
        </div>
      </div>
      <TradingDashboard />
    </div>
  );
};

export default ForexBtcStocks;
