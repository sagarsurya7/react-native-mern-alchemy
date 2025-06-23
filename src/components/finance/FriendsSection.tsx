
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const FriendsSection = () => {
  const friends = [
    { id: 1, name: "John", avatar: "bg-orange-400" },
    { id: 2, name: "Sarah", avatar: "bg-blue-400" },
    { id: 3, name: "Mike", avatar: "bg-green-400" },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Friends</CardTitle>
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center gap-3">
              <div className={`w-8 h-8 ${friend.avatar} rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                {friend.name[0]}
              </div>
              <span className="text-sm font-medium">{friend.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendsSection;
