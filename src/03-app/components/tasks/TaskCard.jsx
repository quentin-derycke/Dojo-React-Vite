import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge'; 

export function TaskCard({ task }) {
  return (
    <Card className="hover:shadow-lg transition">
      <h2 className="card-title text-sm">{task.title}</h2>
      {task.description && <p className="text-xs">{task.description}</p>}
      <div className="flex justify-between items-center mt-2">
      <Badge color={task.priority} variant="soft">{task.priority}</Badge>
        <span className="text-xs opacity-50">{task.status}</span>
      </div>
    </Card>
  );
}
