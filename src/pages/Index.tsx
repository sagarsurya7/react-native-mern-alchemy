
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Percent, Target, Award } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts";

const Index = () => {
  // Data for Trade Performance pie chart
  const tradePerformanceData = [
    { name: 'Wins', value: 20, color: '#10b981' },
    { name: 'Losses', value: 8, color: '#ef4444' }
  ];

  // Data for Legal Status pie chart  
  const legalStatusData = [
    { name: 'Compliant', value: 20, color: '#10b981' },
    { name: 'Issues', value: 5, color: '#ef4444' }
  ];

  // Monthly performance data
  const monthlyPerformanceData = [
    { month: 'Jan', value: 2.1 },
    { month: 'Feb', value: 3.5 },
    { month: 'Mar', value: 2.8 },
    { month: 'Apr', value: 4.2 },
    { month: 'May', value: 3.1 },
    { month: 'Jun', value: 3.8 },
    { month: 'Jul', value: 4.5 },
    { month: 'Aug', value: 3.2 },
    { month: 'Sep', value: 2.9 },
    { month: 'Oct', value: 3.7 },
    { month: 'Nov', value: 4.1 },
    { month: 'Dec', value: 3.4 }
  ];

  // Account Drawdown data
  const drawdownData = [
    { period: 'Q1', value: -2.5 },
    { period: 'Q2', value: -1.8 },
    { period: 'Q3', value: -3.2 },
    { period: 'Q4', value: -2.1 }
  ];

  // Performance by Strategy data
  const strategyData = [
    { strategy: 'Breakout', value: 15200 },
    { strategy: 'Scalping', value: 8900 },
    { strategy: 'Swing', value: 12400 },
    { strategy: 'Mean Rev.', value: 6700 },
    { strategy: 'Momentum', value: 9800 }
  ];

  // Cumulative P&L data
  const cumulativePnLData = [
    { month: 'Jan', value: 5000 },
    { month: 'Feb', value: 8500 },
    { month: 'Mar', value: 12200 },
    { month: 'Apr', value: 15800 },
    { month: 'May', value: 18900 },
    { month: 'Jun', value: 22400 },
    { month: 'Jul', value: 26100 },
    { month: 'Aug', value: 28700 },
    { month: 'Sep', value: 31200 },
    { month: 'Oct', value: 34800 },
    { month: 'Nov', value: 37500 },
    { month: 'Dec', value: 41200 }
  ];

  const tradingStats = [
    { label: "Total P&L", value: "$48,118.65", change: "+12.5%" },
    { label: "Win Rate", value: "71.4%", change: "+2.1%" },
    { label: "Profit Factor", value: "2.34", change: "+0.15" },
    { label: "Sharpe Ratio", value: "1.87", change: "+0.08" },
    { label: "Max Drawdown", value: "-5.2%", change: "-0.3%" },
    { label: "Total Trades", value: "247", change: "+23" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-blue-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">T</span>
          </div>
          <span className="font-bold text-lg">TRADING DASHBOARD</span>
          <span className="text-sm bg-blue-700 px-2 py-1 rounded">Overview</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Top Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tradingStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xl font-bold">{stat.value}</div>
                <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Account Summary & Statistics */}
          <div className="space-y-6">
            {/* Account Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Account Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Account Balance</span>
                    <span className="font-semibold">$125,480</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Available Margin</span>
                    <span className="font-semibold">$89,340</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Used Margin</span>
                    <span className="font-semibold">$36,140</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Equity</span>
                    <span className="font-semibold">$128,920</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trade Performance Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Trade Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tradePerformanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={25}
                        outerRadius={50}
                        dataKey="value"
                      >
                        {tradePerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center">
                    <div className="text-lg font-bold">20</div>
                    <div className="text-xs text-gray-500">Wins</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Legal Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={legalStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={25}
                        outerRadius={50}
                        dataKey="value"
                      >
                        {legalStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center">
                    <div className="text-lg font-bold">20</div>
                    <div className="text-xs text-gray-500">Good</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Trading Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span>Avg Win</span><span>$847.50</span></div>
                  <div className="flex justify-between"><span>Avg Loss</span><span>-$425.30</span></div>
                  <div className="flex justify-between"><span>Largest Win</span><span>$2,850.00</span></div>
                  <div className="flex justify-between"><span>Largest Loss</span><span>-$1,240.00</span></div>
                  <div className="flex justify-between"><span>Avg Hold Time</span><span>2h 35m</span></div>
                  <div className="flex justify-between"><span>Best Day</span><span>$4,250.00</span></div>
                  <div className="flex justify-between"><span>Worst Day</span><span>-$1,890.00</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Charts */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Row Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Account Balance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Account Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cumulativePnLData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Account Drawdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Account Drawdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={drawdownData}>
                        <XAxis dataKey="period" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Monthly Performance (%Monthly)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyPerformanceData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="value" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Row Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Performance P&L */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Monthly Performance (P&L)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyPerformanceData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="value" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Cumulative P&L */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Cumulative P&L</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={cumulativePnLData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance by Strategy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Performance by Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={strategyData}>
                      <XAxis dataKey="strategy" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="value" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
