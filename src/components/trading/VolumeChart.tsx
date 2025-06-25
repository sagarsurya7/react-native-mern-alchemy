
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { day: "Mon", volume: 45000 },
  { day: "Tue", volume: 32000 },
  { day: "Wed", volume: 67000 },
  { day: "Thu", volume: 55000 },
  { day: "Fri", volume: 41000 },
  { day: "Sat", volume: 28000 },
  { day: "Sun", volume: 52000 },
];

const chartConfig = {
  volume: {
    label: "Volume ($)",
    color: "#f59e0b",
  },
};

export function VolumeChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area 
            type="monotone" 
            dataKey="volume" 
            stroke="#f59e0b" 
            fill="#f59e0b" 
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
