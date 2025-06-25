
export function StatsTable() {
  const stats = [
    { label: "Total", value: "$269" },
    { label: "Biggest Win $", value: "$13,620" },
    { label: "Biggest Loss $", value: "$3,160" },
    { label: "Biggest Win %", value: "13.62" },
    { label: "Biggest Loss %", value: "-2.53" },
    { label: "Best Day", value: "ROI: 0" },
    { label: "Worst Day", value: "ROI: 0" },
    { label: "Avg Win Hold Time (Mins)", value: "60.1" },
    { label: "Avg Loss Hold Time (Mins)", value: "72.4" },
    { label: "Average Hold Time (Mins)", value: "40.6" },
  ];

  return (
    <div className="space-y-2 max-h-64 overflow-y-auto">
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
          <span className="text-xs text-gray-600">{stat.label}</span>
          <span className="text-xs font-semibold">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
