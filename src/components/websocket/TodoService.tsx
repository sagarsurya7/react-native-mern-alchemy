
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  serviceId: string;
}

interface TodoServiceProps {
  serviceId: string;
  title: string;
  color: 'blue' | 'green';
}

interface WebSocketMessage {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO' | 'SYNC_TODOS';
  payload: any;
  sourceService: string;
}

export const TodoService: React.FC<TodoServiceProps> = ({ serviceId, title, color }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const { toast } = useToast();

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-200',
      text: 'text-blue-700'
    },
    green: {
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600',
      border: 'border-green-200',
      text: 'text-green-700'
    }
  };

  useEffect(() => {
    // Create WebSocket connection (using mock WebSocket for demo)
    const connectWebSocket = () => {
      try {
        // In a real implementation, you would connect to an actual WebSocket server
        // For demo purposes, we'll simulate WebSocket communication between services
        const ws = new MockWebSocket(serviceId);
        wsRef.current = ws;

        ws.onopen = () => {
          setIsConnected(true);
          toast({
            title: "WebSocket Connected",
            description: `${title} is now connected`,
          });
        };

        ws.onmessage = (event) => {
          const message: WebSocketMessage = JSON.parse(event.data);
          
          // Only process messages from other services
          if (message.sourceService !== serviceId) {
            handleWebSocketMessage(message);
          }
        };

        ws.onclose = () => {
          setIsConnected(false);
          toast({
            title: "WebSocket Disconnected",
            description: `${title} connection lost`,
            variant: "destructive"
          });
        };

        ws.onerror = () => {
          toast({
            title: "WebSocket Error",
            description: `Error in ${title} connection`,
            variant: "destructive"
          });
        };

      } catch (error) {
        console.error('WebSocket connection failed:', error);
      }
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [serviceId, title, toast]);

  const handleWebSocketMessage = (message: WebSocketMessage) => {
    switch (message.type) {
      case 'ADD_TODO':
        setTodos(prev => [...prev, message.payload]);
        toast({
          title: "Todo Added",
          description: `New todo from ${message.sourceService}: ${message.payload.text}`,
        });
        break;
      case 'TOGGLE_TODO':
        setTodos(prev => 
          prev.map(todo => 
            todo.id === message.payload.id 
              ? { ...todo, completed: message.payload.completed }
              : todo
          )
        );
        break;
      case 'DELETE_TODO':
        setTodos(prev => prev.filter(todo => todo.id !== message.payload.id));
        toast({
          title: "Todo Deleted",
          description: `Todo deleted from ${message.sourceService}`,
        });
        break;
      case 'SYNC_TODOS':
        setTodos(message.payload);
        break;
    }
  };

  const sendWebSocketMessage = (message: WebSocketMessage) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    }
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: `${serviceId}-${Date.now()}`,
        text: newTodo.trim(),
        completed: false,
        createdAt: Date.now(),
        serviceId
      };

      setTodos(prev => [...prev, todo]);
      setNewTodo('');

      // Send to other services via WebSocket
      sendWebSocketMessage({
        type: 'ADD_TODO',
        payload: todo,
        sourceService: serviceId
      });
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, completed: !todo.completed };
          
          // Send update to other services
          sendWebSocketMessage({
            type: 'TOGGLE_TODO',
            payload: { id, completed: updatedTodo.completed },
            sourceService: serviceId
          });
          
          return updatedTodo;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    
    // Send delete to other services
    sendWebSocketMessage({
      type: 'DELETE_TODO',
      payload: { id },
      sourceService: serviceId
    });
  };

  return (
    <Card className={`${colorClasses[color].border} border-2`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className={colorClasses[color].text}>{title}</span>
          <Badge variant={isConnected ? "default" : "destructive"}>
            {isConnected ? "Connected" : "Disconnected"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <Button 
            onClick={addTodo}
            className={`${colorClasses[color].bg} ${colorClasses[color].hover}`}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-2 p-3 rounded-lg border ${
                todo.completed ? 'bg-gray-50' : 'bg-white'
              } ${todo.serviceId !== serviceId ? 'border-dashed border-2' : ''}`}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? 'text-green-600' : 'text-gray-400'}
              >
                {todo.completed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
              </Button>
              
              <span 
                className={`flex-1 ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.text}
              </span>
              
              {todo.serviceId !== serviceId && (
                <Badge variant="secondary" className="text-xs">
                  From {todo.serviceId}
                </Badge>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-500">
          Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
        </div>
      </CardContent>
    </Card>
  );
};

// Mock WebSocket class for demonstration
class MockWebSocket extends EventTarget {
  readyState: number = WebSocket.CONNECTING;
  static connections: MockWebSocket[] = [];
  serviceId: string;

  constructor(serviceId: string) {
    super();
    this.serviceId = serviceId;
    MockWebSocket.connections.push(this);
    
    // Simulate connection
    setTimeout(() => {
      this.readyState = WebSocket.OPEN;
      this.dispatchEvent(new Event('open'));
    }, 1000);
  }

  send(data: string) {
    // Broadcast to all other connections
    MockWebSocket.connections
      .filter(conn => conn !== this && conn.readyState === WebSocket.OPEN)
      .forEach(conn => {
        setTimeout(() => {
          conn.dispatchEvent(new MessageEvent('message', { data }));
        }, 100);
      });
  }

  close() {
    this.readyState = WebSocket.CLOSED;
    MockWebSocket.connections = MockWebSocket.connections.filter(conn => conn !== this);
    this.dispatchEvent(new Event('close'));
  }
}
