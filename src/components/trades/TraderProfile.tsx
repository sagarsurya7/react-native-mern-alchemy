
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TraderProfile() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-lg">T</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg">Trader</h3>
            <p className="text-sm text-gray-600">Trading Account</p>
          </div>

          <div className="space-y-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Trades
            </Button>
            <Button variant="outline" className="w-full">
              Analytics
            </Button>
            <Button variant="outline" className="w-full">
              Goal Tracker
            </Button>
            <Button variant="outline" className="w-full">
              Settings
            </Button>
          </div>

          <div className="pt-4 border-t">
            <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              Freeaccount
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
