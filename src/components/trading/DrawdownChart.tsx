
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { period: "Week 1", drawdown: 0 },
  { period: "Week 2", drawdown: -2.5 },
  { period: "Week 3", drawdown: -1.2 },
  { period: "Week 4", drawdown: -3.8 },
  { period: "Week 5", drawdown: -2.1 },
  { period: "Week 6", drawdown: -0.8 },
  { period: "Week 7", drawdown: -4.2 },
  { period: "Week 8", drawdown: -1.5 },
  { period: "Week 9", drawdown: -2.9 },
  { period: "Week 10", drawdown: -0.5 },
];

const chartConfig = {
  drawdown: {
    label: "Drawdown %",
    color: "#ef4444",
  },
};

export function DrawdownChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area 
            type="monotone" 
            dataKey="drawdown" 
            stroke="#ef4444" 
            fill="#ef4444" 
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
