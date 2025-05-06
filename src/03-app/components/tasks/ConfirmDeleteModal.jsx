import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { useTasks } from "../../context/TaskContext";

export function ConfirmDeleteModal({ taskId, trigger }) {
  const modalId = `delete-${taskId}`;
  const { deleteTask } = useTasks();

  return (
    <>
      {trigger({
        onClick: () => document.getElementById(modalId).showModal(),
        "aria-label": "Supprimer la tâche",
      })}
      <Modal id={modalId}>
        <h3 className="text-lg font-bold">Supprimer la tâche ?</h3>
        <p className="py-2 text-sm">Cette action est irréversible.</p>

        <div className="flex justify-end gap-2 mt-4">
          <form method="dialog">
            <button className="btn btn-outline">Annuler</button>
          </form>

          <Button
            variant="error"
            onClick={() => {
              deleteTask(taskId);
              document.getElementById(modalId).close();
            }}
          >
            Supprimer
          </Button>
        </div>
      </Modal>
    </>
  );
}
