
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
  const wsRef = useRef<MockWebSocket | null>(null);
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
    const connectWebSocket = () => {
      try {
        const ws = new MockWebSocket(serviceId);
        wsRef.current = ws;

        ws.addEventListener('open', () => {
          setIsConnected(true);
          console.log(`${title} WebSocket connected`);
          toast({
            title: "WebSocket Connected",
            description: `${title} is now connected`,
          });
        });

        ws.addEventListener('message', (event: MessageEvent) => {
          const message: WebSocketMessage = JSON.parse(event.data);
          console.log(`${title} received message:`, message);
          
          if (message.sourceService !== serviceId) {
            handleWebSocketMessage(message);
          }
        });

        ws.addEventListener('close', () => {
          setIsConnected(false);
          console.log(`${title} WebSocket disconnected`);
          toast({
            title: "WebSocket Disconnected",
            description: `${title} connection lost`,
            variant: "destructive"
          });
        });

        ws.addEventListener('error', () => {
          console.error(`${title} WebSocket error`);
          toast({
            title: "WebSocket Error",
            description: `Error in ${title} connection`,
            variant: "destructive"
          });
        });

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
    console.log(`${title} handling message:`, message);
    switch (message.type) {
      case 'ADD_TODO':
        setTodos(prev => {
          const exists = prev.some(todo => todo.id === message.payload.id);
          if (!exists) {
            console.log(`${title} adding todo from ${message.sourceService}:`, message.payload);
            toast({
              title: "Todo Added",
              description: `New todo from ${message.sourceService}: ${message.payload.text}`,
            });
            return [...prev, message.payload];
          }
          return prev;
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
        setTodos(prev => {
          const filtered = prev.filter(todo => todo.id !== message.payload.id);
          if (filtered.length !== prev.length) {
            toast({
              title: "Todo Deleted",
              description: `Todo deleted from ${message.sourceService}`,
            });
          }
          return filtered;
        });
        break;
      case 'SYNC_TODOS':
        setTodos(message.payload);
        break;
    }
  };

  const sendWebSocketMessage = (message: WebSocketMessage) => {
    if (wsRef.current && wsRef.current.readyState === MockWebSocket.OPEN) {
      console.log(`${title} sending message:`, message);
      wsRef.current.send(JSON.stringify(message));
    }
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: `${serviceId}-${Date.now()}-${Math.random()}`,
        text: newTodo.trim(),
        completed: false,
        createdAt: Date.now(),
        serviceId
      };

      console.log(`${title} adding local todo:`, todo);
      setTodos(prev => [...prev, todo]);
      setNewTodo('');

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
              } ${todo.serviceId !== serviceId ? 'border-dashed border-2 bg-yellow-50' : ''}`}
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
          Total: {todos.length} | Completed: {todos.filter(t => t.completed).length} | 
          Local: {todos.filter(t => t.serviceId === serviceId).length} | 
          Remote: {todos.filter(t => t.serviceId !== serviceId).length}
        </div>
      </CardContent>
    </Card>
  );
};

// Mock WebSocket class that properly implements WebSocket interface
class MockWebSocket extends EventTarget {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  
  static connections: MockWebSocket[] = [];
  
  readyState: number = MockWebSocket.CONNECTING;
  serviceId: string;
  
  constructor(serviceId: string) {
    super();
    this.serviceId = serviceId;
    MockWebSocket.connections.push(this);
    
    console.log(`MockWebSocket created for ${serviceId}, total connections: ${MockWebSocket.connections.length}`);
    
    // Simulate connection after a short delay
    setTimeout(() => {
      this.readyState = MockWebSocket.OPEN;
      console.log(`MockWebSocket opened for ${serviceId}`);
      this.dispatchEvent(new Event('open'));
    }, 500);
  }

  send(data: string) {
    console.log(`MockWebSocket ${this.serviceId} sending:`, data);
    
    // Broadcast to all other active connections
    const activeConnections = MockWebSocket.connections.filter(
      conn => conn !== this && conn.readyState === MockWebSocket.OPEN
    );
    
    console.log(`Broadcasting to ${activeConnections.length} other connections`);
    
    activeConnections.forEach(conn => {
      setTimeout(() => {
        console.log(`Delivering message to ${conn.serviceId}`);
        conn.dispatchEvent(new MessageEvent('message', { data }));
      }, 100);
    });
  }

  close() {
    console.log(`MockWebSocket closing for ${this.serviceId}`);
    this.readyState = MockWebSocket.CLOSED;
    MockWebSocket.connections = MockWebSocket.connections.filter(conn => conn !== this);
    this.dispatchEvent(new Event('close'));
  }
}
