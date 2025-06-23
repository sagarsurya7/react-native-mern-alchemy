
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Activity, Heart, Bone, Tooth, User, Bell, Settings, Home } from "lucide-react";

const HealthDashboard = () => {
  const healthMetrics = [
    { name: "Lungs", value: "25%", color: "bg-red-500", icon: Heart },
    { name: "Teeth", value: "26%", color: "bg-green-500", icon: Tooth },
    { name: "Bone", value: "27%", color: "bg-orange-500", icon: Bone },
  ];

  const appointments = [
    { time: "09:00", title: "Health checkup complete", status: "completed" },
    { time: "11:00", title: "Dr. Schultz", status: "upcoming" },
  ];

  const activityData = [
    { day: "1", value: 20 },
    { day: "5", value: 35 },
    { day: "10", value: 25 },
    { day: "15", value: 40 },
    { day: "20", value: 30 },
    { day: "25", value: 35 },
    { day: "30", value: 25 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">Dashboard</span>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Home className="w-4 h-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Activity className="w-4 h-4" />
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Calendar className="w-4 h-4" />
            Scheduled
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <User className="w-4 h-4" />
            Doctors
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">October 2023</span>
            <Button size="sm" variant="outline">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Human Body Visualization */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    {healthMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <metric.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium">{metric.name}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 ml-4">
                          <div 
                            className={`h-2 rounded-full ${metric.color}`}
                            style={{ width: metric.value }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-48 h-64 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <User className="w-20 h-20 text-orange-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-4 h-32">
                  {activityData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-8 bg-blue-500 rounded-t-sm"
                        style={{ height: `${item.value}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">{item.day}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">October</div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">October 2023</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                    <div key={day} className="text-xs text-gray-500 py-2">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <Button
                      key={day}
                      variant={day === 25 ? "default" : "ghost"}
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The Upcoming Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {appointments.map((appointment, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-600">{appointment.time}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{appointment.title}</div>
                      <Badge variant={appointment.status === "completed" ? "default" : "secondary"} className="mt-1">
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Doctor Profile */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">You need a</div>
                    <div className="text-sm text-gray-500">Access to licensed on-demand physicians 24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
