
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReturnOnCapitalChart } from "./ReturnOnCapitalChart";
import { PositionSizeChart } from "./PositionSizeChart";
import { ProfitLossChart } from "./ProfitLossChart";
import { VolumeChart } from "./VolumeChart";
import { WinRateChart } from "./WinRateChart";
import { DrawdownChart } from "./DrawdownChart";

export function TradingAnalytics() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Main Charts from the uploaded image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>% Return on Capital</CardTitle>
          </CardHeader>
          <CardContent>
            <ReturnOnCapitalChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Position Size % of Capital</CardTitle>
          </CardHeader>
          <CardContent>
            <PositionSizeChart />
          </CardContent>
        </Card>
      </div>

      {/* Additional Trading Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfitLossChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trading Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <VolumeChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Win Rate %</CardTitle>
          </CardHeader>
          <CardContent>
            <WinRateChart />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Drawdown Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <DrawdownChart />
        </CardContent>
      </Card>
    </div>
  );
}
