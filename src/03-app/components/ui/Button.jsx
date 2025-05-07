import { cn } from '../../lib/utils';

const baseStyles = 'btn';
const variantMap = {
  default: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  accent: 'btn-accent',
  success: 'btn-success',
  error: 'btn-error',
  warning: 'btn-warning',
  info: 'btn-info',
  outline: 'btn-outline',
  link: 'btn-link',
};
const sizeMap = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  wide: 'btn-wide',
};

export function Button({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(baseStyles, variantMap[variant], sizeMap[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
