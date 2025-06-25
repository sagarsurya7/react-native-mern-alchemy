
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FileText } from "lucide-react";

const Journal2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-green-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6" />
          <span className="font-bold text-lg">JOURNAL 2</span>
          <span className="text-sm bg-green-700 px-2 py-1 rounded">IMAGE UX</span>
        </div>
      </div>
      
      <div className="p-6 flex justify-center">
        <div className="max-w-2xl w-full">
          <img 
            src="/lovable-uploads/7f94d1f7-cfb2-4241-88fb-8ba25aee7a40.png" 
            alt="Journal Template" 
            className="w-full h-auto rounded-lg shadow-lg border"
          />
          <div className="mt-4 text-center text-gray-600">
            <p className="text-sm">Journal Template - "The Path of Your Success"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal2;
