
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { point: 1, risk: 2.1, reward: 4.8 },
  { point: 2, risk: 1.8, reward: 3.2 },
  { point: 3, risk: 2.4, reward: 5.1 },
  { point: 4, risk: 1.6, reward: 2.8 },
  { point: 5, risk: 2.2, reward: 4.5 },
  { point: 6, risk: 1.9, reward: 3.7 },
  { point: 7, risk: 2.3, reward: 4.9 },
  { point: 8, risk: 1.7, reward: 3.1 },
];

export function RiskRewardChart() {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="point" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
          <YAxis hide />
          <Line 
            type="monotone" 
            dataKey="risk" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={{ fill: "#ef4444", strokeWidth: 2, r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="reward" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
