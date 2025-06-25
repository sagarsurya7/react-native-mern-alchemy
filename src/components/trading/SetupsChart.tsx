
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { setup: "Breakout", pnl: 12500, count: 45 },
  { setup: "Pullback", pnl: 8300, count: 32 },
  { setup: "Reversal", pnl: 15600, count: 28 },
  { setup: "Momentum", pnl: 6800, count: 18 },
  { setup: "Gap Fill", pnl: 4200, count: 12 },
];

export function SetupsChart() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Setup Performance</span>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>P&L</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Count</span>
          </div>
        </div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={10}>
            <XAxis dataKey="setup" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
            <YAxis hide />
            <Bar dataKey="pnl" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="count" fill="#10b981" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="font-medium mb-2">Top Symbols</div>
          <div className="space-y-1">
            <div className="flex justify-between"><span>AAPL</span><span>$2.1k</span></div>
            <div className="flex justify-between"><span>TSLA</span><span>$1.8k</span></div>
            <div className="flex justify-between"><span>MSFT</span><span>$1.5k</span></div>
          </div>
        </div>
        <div>
          <div className="font-medium mb-2">Recent Trades</div>
          <div className="space-y-1">
            <div className="flex justify-between"><span>BTC/USD</span><span className="text-green-600">+$543</span></div>
            <div className="flex justify-between"><span>EUR/USD</span><span className="text-red-600">-$127</span></div>
            <div className="flex justify-between"><span>GOLD</span><span className="text-green-600">+$892</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
