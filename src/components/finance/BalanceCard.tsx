
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const BalanceCard = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="text-sm opacity-80">PayPal</div>
          <CreditCard className="w-6 h-6 opacity-80" />
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold">$120,000</div>
          <div className="text-sm opacity-80">Total Balance</div>
        </div>
        
        <div className="flex justify-between items-end mt-6">
          <div className="space-y-1">
            <div className="text-xs opacity-60">**** **** **** 1234</div>
          </div>
          <div className="text-xs opacity-80">12/25</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
