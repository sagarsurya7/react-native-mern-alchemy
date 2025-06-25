
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { month: "Jan", return: 12.5 },
  { month: "Feb", return: -5.2 },
  { month: "Mar", return: 18.7 },
  { month: "Apr", return: 8.3 },
  { month: "May", return: -3.1 },
  { month: "Jun", return: 22.4 },
  { month: "Jul", return: 15.8 },
  { month: "Aug", return: -7.6 },
  { month: "Sep", return: 11.2 },
  { month: "Oct", return: 25.1 },
  { month: "Nov", return: 9.7 },
  { month: "Dec", return: 14.3 },
];

const chartConfig = {
  return: {
    label: "Return (%)",
    color: "#10b981",
  },
};

export function ReturnOnCapitalChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="return" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.return > 0 ? "#10b981" : "#ef4444"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
