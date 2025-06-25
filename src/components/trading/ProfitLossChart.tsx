
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { day: "Mon", pnl: 1200 },
  { day: "Tue", pnl: -800 },
  { day: "Wed", pnl: 2100 },
  { day: "Thu", pnl: 1500 },
  { day: "Fri", pnl: -300 },
  { day: "Sat", pnl: 900 },
  { day: "Sun", pnl: 1800 },
];

const chartConfig = {
  pnl: {
    label: "P&L ($)",
    color: "#8b5cf6",
  },
};

export function ProfitLossChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="pnl" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
