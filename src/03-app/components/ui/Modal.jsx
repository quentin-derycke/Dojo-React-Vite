import { cn } from '@/lib/utils';

export function Modal({ id, children }) {
  return (
    <>
      <button className="btn btn-primary" onClick={() => document.getElementById(id).showModal()}>
        Ajouter une tâche
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          {children}
          <form method="dialog" className="modal-backdrop">
            <button className="btn">Fermer</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
