
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Star, Tag, Copy } from "lucide-react";
import { TradesList } from "@/components/trades/TradesList";
import { TraderProfile } from "@/components/trades/TraderProfile";
import { TradeFilters } from "@/components/trades/TradeFilters";

export function TradingJournal() {
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Trader Profile */}
        <div className="lg:col-span-1">
          <TraderProfile />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">Trades</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Tag className="w-4 h-4 mr-2" />
                    Filter by tags
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <TradeFilters />
              
              {/* Trades List */}
              <TradesList 
                selectedTrades={selectedTrades}
                setSelectedTrades={setSelectedTrades}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
