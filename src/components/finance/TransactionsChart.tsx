
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TransactionsChart = () => {
  const data = [
    { day: 'Mon', value: 180 },
    { day: 'Tue', value: 120 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 150 },
    { day: 'Fri', value: 180 },
    { day: 'Sat', value: 160 },
    { day: 'Sun', value: 140 },
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
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                fill="#3B82F6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsChart;
