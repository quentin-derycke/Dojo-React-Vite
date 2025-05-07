import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { TaskForm } from './TaskForm';
import { useTasks } from '@/context/TaskContext';

export function EditTaskModal({ task }) {
  const { updateTask } = useTasks();
  const modalId = `edit-${task.id}`;

  const open = () => document.getElementById(modalId)?.showModal();
  const close = () => document.getElementById(modalId)?.close();

  return (
    <>
      <Button size="sm" onClick={open}>
        Modifier
      </Button>

      <Modal id={modalId}>
        <h2 className="text-lg font-bold mb-4">Modifier la tâche</h2>
        <TaskForm
          initialTask={task}
          onSubmit={(updatedTask) => {
            updateTask(updatedTask);
            close();
          }}
          onClose={close}
        />
      </Modal>
    </>
  );
}
