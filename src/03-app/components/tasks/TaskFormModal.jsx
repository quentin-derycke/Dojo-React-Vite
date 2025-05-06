import { Modal } from '@/components/ui/Modal';
import { TaskForm } from './TaskForm';

export function TaskFormModal({
  id,
  defaultStatus = 'todo',
  onSubmit,
  trigger, //  Composant JSX 
}) {
  const open = () => document.getElementById(id)?.showModal();
  const close = () => document.getElementById(id)?.close();

  return (
    <>
      {/* Trigger custom  */}
      {trigger ? trigger({ onClick: open }) : null}

      <Modal id={id}>
        <h2 className="text-lg font-bold mb-4">Créer une tâche</h2>
        <TaskForm
          defaultStatus={defaultStatus}
          onSubmit={(task) => {
            onSubmit(task);
            close();
          }}
        />
      </Modal>
    </>
  );
}
