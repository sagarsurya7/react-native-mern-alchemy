
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExpensesChart = () => {
  const expenses = [
    { category: "Housing", amount: 45, color: "bg-red-400" },
    { category: "Utilities", amount: 25, color: "bg-green-400" },
    { category: "Food", amount: 30, color: "bg-blue-500" },
  ];

  const maxAmount = Math.max(...expenses.map(e => e.amount));

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Major Expenses</CardTitle>
          <Badge variant="secondary">Weekly</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{expense.category}</span>
                <span className="text-sm text-gray-500">{expense.amount}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${expense.color}`}
                  style={{ width: `${(expense.amount / maxAmount) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1 mt-6 text-xs text-center text-gray-400">
          {["10", "20", "30", "40", "50", "60", "70"].map((num, index) => (
            <div key={index}>{num}</div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensesChart;
