import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { useTasks } from "../../context/TaskContext";
export function ConfirmDeleteModal({ taskId, trigger }) {
    const modalId = `delete-${taskId}`;
    const { deleteTask } = useTasks();
  
    return (
      <>
        {trigger({ onClick: () => document.getElementById(modalId).showModal() })}
        <Modal id={modalId}>
          <p>Confirmer la suppression de cette tâche ?</p>
          <div className="flex justify-end gap-2 mt-4">
            <button className="btn btn-outline" formMethod="dialog">Annuler</button>
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
  