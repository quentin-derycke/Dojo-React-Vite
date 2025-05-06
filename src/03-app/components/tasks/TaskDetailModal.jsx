import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EditTaskModal } from './EditTaskModal';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import { useTasks } from '@/context/TaskContext';

export function TaskDetailModal({ task }) {
  const modalId = `task-${task.id}`;
  const { deleteTask } = useTasks();

  return (
    <Modal id={modalId}>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <Badge color={task.priority}>{task.priority}</Badge>
        <p className="text-sm opacity-70">{task.description}</p>
        <p className="text-xs mt-2">Statut : <strong>{task.status}</strong></p>

        <div className="flex justify-end gap-2 mt-4">
          <EditTaskModal task={task} />
          <ConfirmDeleteModal
            taskId={task.id}
            trigger={({ onClick }) => (
              <Button variant="error" size="sm" onClick={onClick}>Supprimer</Button>
            )}
          />
        </div>
      </div>
    </Modal>
  );
}
