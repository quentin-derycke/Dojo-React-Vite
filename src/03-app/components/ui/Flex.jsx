import { cn } from '@/lib/utils';

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const directionMap = {
  row: 'flex-row',
  col: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'col-reverse': 'flex-col-reverse',
};

const wrapMap = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  reverse: 'flex-wrap-reverse',
};

const gapMap = {
  '0': 'gap-0',
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
  '10': 'gap-10',
  '12': 'gap-12',
  '16': 'gap-16',
  '20': 'gap-20',
  '24': 'gap-24',
};

export function Flex({
  children,
  className = '',
  justify = '',
  align = '',
  direction = 'row',
  wrap = '',
  gap = '',
  ...props
}) {
  return (
    <div
      className={cn(
        'flex',
        justifyMap[justify],
        alignMap[align],
        directionMap[direction],
        wrapMap[wrap],
        gapMap[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
