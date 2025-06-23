
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TransactionsChart = () => {
  const data = [
    { day: 'Mon', gain: 180, loss: 120 },
    { day: 'Tue', gain: 120, loss: 80 },
    { day: 'Wed', gain: 200, loss: 150 },
    { day: 'Thu', gain: 150, loss: 100 },
    { day: 'Fri', gain: 180, loss: 130 },
    { day: 'Sat', gain: 160, loss: 110 },
    { day: 'Sun', gain: 140, loss: 90 },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Transactions</CardTitle>
          <Badge variant="secondary">Weekly</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="20%">
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis hide />
              <Bar 
                dataKey="gain" 
                radius={[4, 4, 0, 0]}
                fill="#3B82F6"
                stackId="stack"
              />
              <Bar 
                dataKey="loss" 
                radius={[4, 4, 0, 0]}
                fill="#F97316"
                stackId="stack"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsChart;
