
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 1000 },
  { month: "Feb", value: 1200 },
  { month: "Mar", value: 1800 },
  { month: "Apr", value: 1600 },
  { month: "May", value: 2100 },
  { month: "Jun", value: 2800 },
  { month: "Jul", value: 2400 },
  { month: "Aug", value: 3200 },
  { month: "Sep", value: 2900 },
  { month: "Oct", value: 3800 },
  { month: "Nov", value: 3400 },
  { month: "Dec", value: 4200 },
];

export function OverallPerformanceChart() {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
          <YAxis hide />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#10b981" 
            fill="#10b981" 
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
