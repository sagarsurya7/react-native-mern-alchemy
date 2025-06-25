
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { period: "1", return: 2.5 },
  { period: "2", return: 1.2 },
  { period: "3", return: 0.8 },
  { period: "4", return: 3.2 },
  { period: "5", return: -0.5 },
  { period: "6", return: 2.1 },
  { period: "7", return: 2.8 },
  { period: "8", return: 3.1 },
  { period: "9", return: -1.2 },
  { period: "10", return: 1.8 },
];

const chartConfig = {
  return: {
    label: "Return %",
    color: "hsl(var(--chart-1))",
  },
};

export function ReturnOnCapitalChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar 
            dataKey="return" 
            fill={(entry) => entry.return >= 0 ? "#10b981" : "#ef4444"}
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
