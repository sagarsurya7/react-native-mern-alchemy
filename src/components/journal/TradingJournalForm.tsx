
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function TradingJournalForm() {
  const [formData, setFormData] = useState({
    date: "",
    symbol: "",
    position: "",
    lotSize: "",
    longShort: "",
    type: "",
    strategy: "",
    entry: "",
    exit: "",
    takeProfit: "",
    stopLoss: "",
    profitLoss: "",
    reasonForTrade: "",
    assumptionsBeforeTrade: "",
    disciplined: "",
    followedRules: "",
    rating: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trading journal entry:", formData);
    toast.success("Trading journal entry saved!");
  };

  const handleReset = () => {
    setFormData({
      date: "",
      symbol: "",
      position: "",
      lotSize: "",
      longShort: "",
      type: "",
      strategy: "",
      entry: "",
      exit: "",
      takeProfit: "",
      stopLoss: "",
      profitLoss: "",
      reasonForTrade: "",
      assumptionsBeforeTrade: "",
      disciplined: "",
      followedRules: "",
      rating: ""
    });
    toast.info("Form reset");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">TRADING JOURNAL</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header Row */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date" className="text-sm font-semibold">DATE</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="symbol" className="text-sm font-semibold">SYMBOL</Label>
                <Input
                  id="symbol"
                  value={formData.symbol}
                  onChange={(e) => handleInputChange("symbol", e.target.value)}
                  placeholder="e.g., EURUSD, AAPL"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Trading Setup and Chart Analysis */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-center bg-gray-100 py-2">TRADING SETUP</h3>
                
                <div>
                  <Label htmlFor="position" className="text-sm">POSITION</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lotSize" className="text-sm">LOT SIZE</Label>
                  <Input
                    id="lotSize"
                    value={formData.lotSize}
                    onChange={(e) => handleInputChange("lotSize", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="longShort" className="text-sm">LONG/SHORT</Label>
                  <Select value={formData.longShort} onValueChange={(value) => handleInputChange("longShort", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="long">Long</SelectItem>
                      <SelectItem value="short">Short</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="type" className="text-sm">TYPE</Label>
                  <Input
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="strategy" className="text-sm">STRATEGY</Label>
                  <Input
                    id="strategy"
                    value={formData.strategy}
                    onChange={(e) => handleInputChange("strategy", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-center bg-gray-100 py-2">CHART ANALYSIS</h3>
                <div className="h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/1ad747b9-2ae2-40e9-88ea-e79e53b578b9.png" 
                    alt="Trading Chart Reference"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Trade Management */}
            <div>
              <h3 className="font-semibold text-center bg-gray-100 py-2 mb-4">TRADE MANAGEMENT</h3>
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <Label htmlFor="entry" className="text-sm">ENTRY</Label>
                  <Input
                    id="entry"
                    value={formData.entry}
                    onChange={(e) => handleInputChange("entry", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="exit" className="text-sm">EXIT</Label>
                  <Input
                    id="exit"
                    value={formData.exit}
                    onChange={(e) => handleInputChange("exit", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="stopLoss" className="text-sm">STOP LOSS</Label>
                  <Input
                    id="stopLoss"
                    value={formData.stopLoss}
                    onChange={(e) => handleInputChange("stopLoss", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="takeProfit" className="text-sm">TAKE PROFIT</Label>
                  <Input
                    id="takeProfit"
                    value={formData.takeProfit}
                    onChange={(e) => handleInputChange("takeProfit", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="profitLoss" className="text-sm">PROFIT/LOSS</Label>
                  <Input
                    id="profitLoss"
                    value={formData.profitLoss}
                    onChange={(e) => handleInputChange("profitLoss", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Trade Analysis */}
            <div>
              <h3 className="font-semibold text-center bg-gray-100 py-2 mb-4">TRADE ANALYSIS</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="reasonForTrade" className="text-sm">REASON FOR TRADE</Label>
                  <Textarea
                    id="reasonForTrade"
                    value={formData.reasonForTrade}
                    onChange={(e) => handleInputChange("reasonForTrade", e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="assumptionsBeforeTrade" className="text-sm">ASSUMPTIONS BEFORE TRADE</Label>
                  <Textarea
                    id="assumptionsBeforeTrade"
                    value={formData.assumptionsBeforeTrade}
                    onChange={(e) => handleInputChange("assumptionsBeforeTrade", e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div>
              <h3 className="font-semibold text-center bg-gray-100 py-2 mb-4">FEEDBACK</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="disciplined" className="text-sm">DISCIPLINED</Label>
                  <Select value={formData.disciplined} onValueChange={(value) => handleInputChange("disciplined", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Y/N" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="followedRules" className="text-sm">FOLLOWED RULES</Label>
                  <Select value={formData.followedRules} onValueChange={(value) => handleInputChange("followedRules", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Y/N" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rating" className="text-sm">RATING</Label>
                  <Select value={formData.rating} onValueChange={(value) => handleInputChange("rating", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="★★★★★" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">★</SelectItem>
                      <SelectItem value="2">★★</SelectItem>
                      <SelectItem value="3">★★★</SelectItem>
                      <SelectItem value="4">★★★★</SelectItem>
                      <SelectItem value="5">★★★★★</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center pt-6">
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset Form
              </Button>
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Save Entry
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
