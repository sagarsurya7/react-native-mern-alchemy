
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Percent, Target, Award } from "lucide-react";
import { OverallPerformanceChart } from "./OverallPerformanceChart";
import { RiskRewardChart } from "./RiskRewardChart";
import { SetupsChart } from "./SetupsChart";
import { StatsTable } from "./StatsTable";
import { AccountSummary } from "./AccountSummary";

export function TradingDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Return Net</div>
            <div className="text-2xl font-bold text-green-600">$48,118.65</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Profit Factor</div>
            <div className="text-2xl font-bold">4.14</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <div className="w-4 h-4 bg-red-500 rounded"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Average Risk</div>
            <div className="text-2xl font-bold">2.3%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23%' }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Risk Adj Return</div>
            <div className="text-2xl font-bold text-green-600">61.1%</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="text-xs text-gray-500">Share Win %</div>
              <div className="text-xs font-semibold">71.2%</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">All Accounts</div>
            <div className="text-2xl font-bold">35.6%</div>
            <div className="text-xs text-red-500">-6.3%</div>
          </CardContent>
        </Card>
        
        <div className="flex gap-2">
          <Button className="bg-gray-800 text-white hover:bg-gray-700">New Trade</Button>
          <Button variant="outline">Edit Trade</Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Account Summary */}
        <div className="lg:col-span-1">
          <AccountSummary />
        </div>

        {/* Main Charts Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Stats and Performance Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <StatsTable />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Overall Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <OverallPerformanceChart />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Risk to Reward</CardTitle>
              </CardHeader>
              <CardContent>
                <RiskRewardChart />
              </CardContent>
            </Card>
          </div>

          {/* Setups Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Setups</CardTitle>
            </CardHeader>
            <CardContent>
              <SetupsChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
