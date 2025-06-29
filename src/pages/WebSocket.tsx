
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Wifi } from "lucide-react";
import { TodoService } from "@/components/websocket/TodoService";

const WebSocket = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 p-4 bg-purple-600 text-white">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <Wifi className="w-6 h-6" />
          <span className="font-bold text-lg">WEBSOCKET TODOS</span>
          <span className="text-sm bg-purple-700 px-2 py-1 rounded">REAL-TIME SYNC</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TodoService serviceId="service1" title="Todo Service 1" color="blue" />
          <TodoService serviceId="service2" title="Todo Service 2" color="green" />
        </div>
      </div>
    </div>
  );
};

export default WebSocket;
