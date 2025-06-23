
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CreditScoreCard = () => {
  const creditScore = 22;
  
  return (
    <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-sm font-medium text-blue-100">VeloFi</CardTitle>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm">Credit score</span>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-white hover:bg-white/20">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">Your credit score is {creditScore}</h3>
            <p className="text-sm text-blue-100 mt-1">
              Feel free to build your credit history to see your score
            </p>
          </div>
          
          {/* Credit Score Bar */}
          <div className="space-y-2">
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-2 rounded-full"
                style={{ width: `${(creditScore / 100) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-blue-100">
              <span>Building your credit score may improve loan approvals and rates</span>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3 mt-4">
            <p className="text-xs text-blue-100">
              Financial freedom begins with smart decisions today
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditScoreCard;
