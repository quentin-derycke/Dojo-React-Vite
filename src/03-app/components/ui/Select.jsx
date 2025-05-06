import { cn } from '@/lib/utils';

export function Select({ options = [], className, ...props }) {
  return (
    <select className={cn('select select-bordered w-full', className)} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
