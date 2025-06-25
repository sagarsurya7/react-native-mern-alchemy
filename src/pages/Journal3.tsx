
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TradingJournalForm } from "@/components/journal/TradingJournalForm";
import { Notebook } from "lucide-react";

const Journal3 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-purple-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <Notebook className="w-6 h-6" />
          <span className="font-bold text-lg">JOURNAL 3</span>
          <span className="text-sm bg-purple-700 px-2 py-1 rounded">TRADING FORM</span>
        </div>
      </div>
      
      <div className="p-6">
        <TradingJournalForm />
      </div>
    </div>
  );
};

export default Journal3;
