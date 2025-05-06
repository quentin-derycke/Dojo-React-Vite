import { cn } from '@/lib/utils';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn('input input-bordered w-full', className)}
      {...props}
    />
  );
}
