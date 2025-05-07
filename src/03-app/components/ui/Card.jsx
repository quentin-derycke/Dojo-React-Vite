import { cn } from '@/lib/utils';

export function Card({ children, className }) {
  return (
    <div className={cn('card bg-base-100 shadow-md', className)}>
      <div className="card-body p-4">{children}</div>
    </div>
  );
}
