
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TradingJournal } from "@/components/TradingJournal";

const Journal1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-3xl font-bold">Trading Journal</h1>
      </div>
      <TradingJournal />
    </div>
  );
};

export default Journal1;
