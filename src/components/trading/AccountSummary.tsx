
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AccountSummary() {
  const accounts = [
    { name: "Account", value: 100, color: "bg-blue-500" },
    { name: "Stocks", value: 24, color: "bg-green-500" },
    { name: "Forex", value: 64, color: "bg-yellow-500" },
    { name: "Crypto", value: 55, color: "bg-purple-500" },
    { name: "Futures", value: 0, color: "bg-red-500" },
  ];

  const stats = [
    { label: "Long", value: 94 },
    { label: "Short", value: 29 },
    { label: "Breakeven", value: 3 },
    { label: "Fees", value: 134 },
    { label: "Longs", value: 84 },
    { label: "Shorts", value: 29 },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Account Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {accounts.map((account) => (
            <div key={account.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${account.color}`}></div>
                <span className="text-sm">{account.name}</span>
              </div>
              <span className="text-sm font-semibold">{account.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <span className="text-sm font-semibold">{stat.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
