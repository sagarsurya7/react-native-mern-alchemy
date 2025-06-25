
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Copy, TrendingUp, TrendingDown } from "lucide-react";

interface Trade {
  id: string;
  asset: string;
  date: string;
  type: "BUY" | "SELL";
  profit: string;
  status: "WIN" | "LOSS";
  isFavorite: boolean;
}

const mockTrades: Trade[] = [
  { id: "1", asset: "EURGBP", date: "Aug 10, 2021", type: "BUY", profit: "25 USD", status: "WIN", isFavorite: false },
  { id: "2", asset: "EURUSD", date: "May 25, 2021", type: "BUY", profit: "35 USD", status: "WIN", isFavorite: false },
  { id: "3", asset: "EURUSD", date: "Mar 16, 2021", type: "BUY", profit: "66.35 USD", status: "WIN", isFavorite: false },
  { id: "4", asset: "GBPJPY", date: "Mar 15, 2021", type: "BUY", profit: "-1.26 USD", status: "LOSS", isFavorite: false },
  { id: "5", asset: "DJI#", date: "Mar 15, 2021", type: "BUY", profit: "45.68 USD", status: "WIN", isFavorite: false },
  { id: "6", asset: "EURCHF", date: "Mar 15, 2021", type: "BUY", profit: "11.86 USD", status: "WIN", isFavorite: false },
  { id: "7", asset: "NDI#", date: "Mar 12, 2021", type: "SELL", profit: "32.9 USD", status: "WIN", isFavorite: false },
  { id: "8", asset: "EURCHF", date: "Mar 12, 2021", type: "SELL", profit: "-5.94 USD", status: "LOSS", isFavorite: false },
];

interface TradesListProps {
  selectedTrades: string[];
  setSelectedTrades: (trades: string[]) => void;
}

export function TradesList({ selectedTrades, setSelectedTrades }: TradesListProps) {
  const [trades, setTrades] = useState<Trade[]>(mockTrades);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTrades(trades.map(trade => trade.id));
    } else {
      setSelectedTrades([]);
    }
  };

  const handleSelectTrade = (tradeId: string, checked: boolean) => {
    if (checked) {
      setSelectedTrades([...selectedTrades, tradeId]);
    } else {
      setSelectedTrades(selectedTrades.filter(id => id !== tradeId));
    }
  };

  const toggleFavorite = (tradeId: string) => {
    setTrades(trades.map(trade => 
      trade.id === tradeId ? { ...trade, isFavorite: !trade.isFavorite } : trade
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">33/33 trades • page 1 of 3</p>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedTrades.length === trades.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>ASSET</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>TYPE</TableHead>
              <TableHead>PROFIT</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className="w-12"></TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox 
                    checked={selectedTrades.includes(trade.id)}
                    onCheckedChange={(checked) => handleSelectTrade(trade.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell className="font-medium">{trade.asset}</TableCell>
                <TableCell>{trade.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {trade.type}
                    {trade.type === "BUY" ? (
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </TableCell>
                <TableCell className={trade.profit.startsWith('-') ? 'text-red-600' : 'text-green-600'}>
                  {trade.profit}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={trade.status === "WIN" ? "default" : "destructive"}
                    className={trade.status === "WIN" ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}
                  >
                    {trade.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleFavorite(trade.id)}
                  >
                    <Star className={`w-4 h-4 ${trade.isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
