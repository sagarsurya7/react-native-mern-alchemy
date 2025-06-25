
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { period: "1", size: 8 },
  { period: "2", size: 5 },
  { period: "3", size: 6 },
  { period: "4", size: 4 },
  { period: "5", size: 12 },
  { period: "6", size: 7 },
  { period: "7", size: 9 },
  { period: "8", size: 15 },
  { period: "9", size: 11 },
  { period: "10", size: 10 },
];

const chartConfig = {
  size: {
    label: "Position Size %",
    color: "#0891b2",
  },
};

export function PositionSizeChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar 
            dataKey="size" 
            fill="#0891b2"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
