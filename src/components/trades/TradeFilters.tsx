
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function TradeFilters() {
  return (
    <div className="mb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="forex">Forex</SelectItem>
            <SelectItem value="stocks">Stocks</SelectItem>
            <SelectItem value="crypto">Crypto</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Asset" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eurusd">EUR/USD</SelectItem>
            <SelectItem value="gbpusd">GBP/USD</SelectItem>
            <SelectItem value="eurgbp">EUR/GBP</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="win">Win</SelectItem>
            <SelectItem value="loss">Loss</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Checkbox id="favorites" />
          <Label htmlFor="favorites">Favorites</Label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Input 
          placeholder="Start Date - End Date" 
          className="w-64"
        />
      </div>
    </div>
  );
}
