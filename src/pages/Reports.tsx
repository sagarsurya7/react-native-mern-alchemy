
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Clipboard, BarChart3 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

const Reports = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string);
          toast.success("Image uploaded successfully!");
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Please upload an image file");
      }
    }
  };

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardItems = await navigator.clipboard.read();
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          if (type.startsWith('image/')) {
            const blob = await clipboardItem.getType(type);
            const reader = new FileReader();
            reader.onload = (e) => {
              setUploadedImage(e.target?.result as string);
              toast.success("Image pasted from clipboard!");
            };
            reader.readAsDataURL(blob);
            return;
          }
        }
      }
      toast.error("No image found in clipboard");
    } catch (error) {
      toast.error("Failed to access clipboard. Please use the upload button instead.");
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success("Image cleared");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-blue-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          <span className="font-bold text-lg">REPORTS</span>
          <span className="text-sm bg-blue-700 px-2 py-1 rounded">Analytics</span>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Chart Upload & Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!uploadedImage ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <BarChart3 className="w-16 h-16 mx-auto text-gray-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Upload Chart Images
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Add your trading charts, technical analysis, or financial reports for review
                      </p>
                    </div>
                    
                    <div className="flex gap-3 justify-center">
                      <Button 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        Upload Image
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={handlePasteFromClipboard}
                        className="flex items-center gap-2"
                      >
                        <Clipboard className="w-4 h-4" />
                        Paste from Clipboard
                      </Button>
                    </div>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    
                    <p className="text-sm text-gray-400">
                      Supports PNG, JPG, GIF, and other image formats
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded chart" 
                      className="w-full max-h-96 object-contain rounded-lg border shadow-sm"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => fileInputRef.current?.click()}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Replace Image
                    </Button>
                    
                    <Button 
                      onClick={handlePasteFromClipboard}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Clipboard className="w-4 h-4" />
                      Paste New
                    </Button>
                    
                    <Button 
                      onClick={clearImage}
                      variant="destructive"
                      className="flex items-center gap-2"
                    >
                      Clear
                    </Button>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chart Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Technical Indicators</h4>
                  <p className="text-sm text-gray-600">
                    Analyze moving averages, RSI, MACD, and other technical indicators from your charts.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Pattern Recognition</h4>
                  <p className="text-sm text-gray-600">
                    Identify chart patterns, support/resistance levels, and trend lines.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Performance Metrics</h4>
                  <p className="text-sm text-gray-600">
                    Extract key performance data and trading statistics from uploaded reports.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
