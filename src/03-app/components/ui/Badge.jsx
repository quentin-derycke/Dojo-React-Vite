import { cn } from '@/lib/utils';

const colorMap = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  neutral: 'badge-neutral',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
};

const variantMap = {
  solid: '', // DaisyUI par défaut
  outline: 'badge-outline',
  ghost: 'badge-ghost',
};

const sizeMap = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: '', // défaut
  lg: 'badge-lg',
};

export function Badge({
  children,
  color = 'primary',
  variant = 'solid', // solid | outline | ghost
  size = 'md',
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'badge',
        colorMap[color],
        variantMap[variant],
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
