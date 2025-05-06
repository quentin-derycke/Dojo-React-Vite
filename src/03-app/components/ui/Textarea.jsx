import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn('textarea textarea-bordered w-full resize-none', className)}
      {...props}
    />
  );
}
