import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '../ui/Button';
import { TaskDetailModal } from './TaskDetailModal';
import { useTasks } from '../../context/TaskContext';
import { ConfirmDeleteModal } from '@/components/tasks/ConfirmDeleteModal';

export function TaskCard({ task }) {

  const { deleteTask } = useTasks();

  return (
    <Card className="hover:shadow-lg transition">

      <ConfirmDeleteModal
        taskId={task.id}
        trigger={({ onClick }) => ( <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 text-error"
          onClick={onClick}
          aria-label="Supprimer la tâche"
        >
          ✕
        </Button>)}
      />
      <h2 className="card-title text-sm">{task.title}</h2>
      {task.description && <p className="text-xs">{task.description}</p>}
      <div className="flex justify-between items-center mt-2">
        <Badge color={task.priority} variant="soft">{task.priority}</Badge>
        <span className="text-xs opacity-50">{task.status}</span>
      </div>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => document.getElementById(`task-${task.id}`).showModal()}
      >
        Voir
      </Button>

      <TaskDetailModal task={task} />
    </Card>
  );
}
