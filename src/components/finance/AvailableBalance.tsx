
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const AvailableBalance = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Available balance</CardTitle>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">$</span>
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="text-4xl font-bold">2300</div>
            <Badge variant="secondary" className="mt-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              Active
            </Badge>
          </div>
          
          <div className="text-sm text-gray-600">
            This amount is expected in real time and may fluctuate based on recent transactions such as pending deposits or withdrawals.
          </div>
          
          {/* Placeholder for chart - you can add a small line chart here */}
          <div className="h-32 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-center">
            <div className="text-xs text-gray-400">Balance Trend</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailableBalance;
