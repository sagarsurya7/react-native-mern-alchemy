
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
          <span className="text-sm bg-green-700 px-2 py-1 rounded">IMAGE UX</span>
        </div>
      </div>
      
      <div className="p-6 flex justify-center">
        <div className="max-w-4xl w-full space-y-8">
          {/* Template Image */}
          <div className="text-center">
            <img 
              src="/lovable-uploads/7f94d1f7-cfb2-4241-88fb-8ba25aee7a40.png" 
              alt="Journal Template" 
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg border mx-auto"
            />
            <div className="mt-4 text-gray-600">
              <p className="text-sm">Journal Template - "The Path of Your Success"</p>
            </div>
          </div>
          
          {/* Interactive Form */}
          <JournalTemplateForm />
        </div>
      </div>
    </div>
  );
};

export default Journal2;
