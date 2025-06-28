
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FileText } from "lucide-react";
import { JournalTemplateForm } from "@/components/journal/JournalTemplateForm";

const Journal2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-green-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6" />
          <span className="font-bold text-lg">JOURNAL 2</span>
          <span className="text-sm bg-green-700 px-2 py-1 rounded">INTERACTIVE FORM</span>
        </div>
      </div>
      
      <div className="p-6">
        <JournalTemplateForm />
      </div>
    </div>
  );
};

export default Journal2;
