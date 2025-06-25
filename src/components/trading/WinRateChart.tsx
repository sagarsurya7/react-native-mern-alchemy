
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { day: "Mon", winRate: 68 },
  { day: "Tue", winRate: 45 },
  { day: "Wed", winRate: 78 },
  { day: "Thu", winRate: 72 },
  { day: "Fri", winRate: 55 },
  { day: "Sat", winRate: 65 },
  { day: "Sun", winRate: 80 },
];

const chartConfig = {
  winRate: {
    label: "Win Rate %",
    color: "#10b981",
  },
};

export function WinRateChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="winRate" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
