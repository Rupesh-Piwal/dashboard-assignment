import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ActivityItemProps {
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  timestamp: string;
}

export function ActivityItem({ user, action, timestamp }: ActivityItemProps) {
  return (
    <div className="flex items-center space-x-4 border p-4 rounded-lg">
      <Avatar>
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">
          {user.name} <span className="text-muted-foreground">{action}</span>
        </p>
        <p className="text-xs text-muted-foreground">{timestamp}</p>
      </div>
    </div>
  );
}

// Example usage for multiple activity items
export function ActivityList() {
  const activities = [
    {
      user: { name: "John Doe", avatar: "https://example.com/avatar1.jpg" },
      action: "logged in",
      timestamp: "2 hours ago",
    },
    {
      user: { name: "Jane Smith", avatar: "https://example.com/avatar2.jpg" },
      action: "updated profile",
      timestamp: "3 hours ago",
    },
    {
      user: {
        name: "Alice Johnson",
        avatar: "https://example.com/avatar3.jpg",
      },
      action: "commented on a post",
      timestamp: "5 hours ago",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          user={activity.user}
          action={activity.action}
          timestamp={activity.timestamp}
        />
      ))}
    </div>
  );
}
