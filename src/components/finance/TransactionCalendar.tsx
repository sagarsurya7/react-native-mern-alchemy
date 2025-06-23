
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TransactionCalendar = () => {
  const currentMonth = "31";
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const calendarDays = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  const hasTransaction = (day: number | null) => {
    if (!day) return false;
    return [5, 12, 19, 26].includes(day);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Transactions days</CardTitle>
          <div className="text-lg font-bold">{currentMonth}</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">Days</span>
          <div className="flex gap-2">
            <span className="text-sm">2</span>
            <span className="text-sm text-gray-400">Automatic</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center text-xs text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div key={index} className="aspect-square flex items-center justify-center">
              {day && (
                <div
                  className={`w-8 h-8 flex items-center justify-center text-sm rounded-full ${
                    hasTransaction(day)
                      ? day === 5
                        ? "bg-blue-500 text-white"
                        : day === 12
                        ? "bg-green-500 text-white"
                        : day === 19
                        ? "bg-yellow-500 text-white"
                        : "bg-red-500 text-white"
                      : day === 31
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {day}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">
          It could mean the days when deposits withdrawals or transfers are made.
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCalendar;
