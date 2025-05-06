import { cn } from '@/lib/utils';
import { Button } from './Button';

export function Modal({ id, children }) {
  return (
    <>

      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}

        </div>
      </dialog>
    </>
  );
}
