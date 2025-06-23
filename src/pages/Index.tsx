
import { SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-3xl font-bold">Welcome to VeloFi</h1>
      </div>
      <div className="max-w-4xl">
        <p className="text-lg text-gray-600 mb-8">
          Your comprehensive financial management platform. Navigate using the sidebar to access different sections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Finance Dashboard</h3>
            <p className="text-gray-600">
              View your financial overview, transactions, and account balances.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-gray-600">
              Generate detailed financial reports and analytics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Statistics</h3>
            <p className="text-gray-600">
              Analyze your spending patterns and financial trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
