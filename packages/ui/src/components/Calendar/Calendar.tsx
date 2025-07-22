'use client';

import * as React from 'react';
import { DayButton, DayPicker, getDefaultClassNames, type DateRange } from 'react-day-picker';
import { ko } from 'date-fns/locale';

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@common/ui/icons';
import { Button, buttonVariants } from '../Button';
import { Select } from '../Select';
import { cn } from '../../lib/utils';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'transparent',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      locale={ko}
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn('flex gap-4 flex-col md:flex-row relative', defaultClassNames.months),
        month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
        nav: cn('flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between', defaultClassNames.nav),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn('absolute bg-popover inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none',
          defaultClassNames.weekday,
        ),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        week_number_header: cn('select-none w-(--cell-size)', defaultClassNames.week_number_header),
        week_number: cn('text-[0.8rem] select-none text-muted-foreground', defaultClassNames.week_number),
        day: cn(
          'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
          defaultClassNames.day,
        ),
        range_start: cn('rounded-l-md bg-accent', defaultClassNames.range_start),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn('text-muted-foreground aria-selected:text-muted-foreground', defaultClassNames.outside),
        disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...restRoot }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(rootClassName)} {...restRoot} />;
        },
        Chevron: ({ className: chevronClassName, orientation, ...restChevron }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('size-4', chevronClassName)} {...restChevron} />;
          }

          if (orientation === 'right') {
            return <ChevronRightIcon className={cn('size-4', chevronClassName)} {...restChevron} />;
          }

          return <ChevronDownIcon className={cn('size-4', chevronClassName)} {...restChevron} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...restWeekNumber }) => {
          return (
            <td {...restWeekNumber}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
            </td>
          );
        },
        Dropdown: ({ value, onChange, options }) => {
          const handleValueChange = (val: string) => {
            const syntheticEvent = {
              target: { value: val },
            } as React.ChangeEvent<HTMLSelectElement>;

            onChange?.(syntheticEvent); // ✅ DayPicker가 원하는 시그니처로 전달
          };

          return (
            <Select
              value={String(value)}
              onValueChange={handleValueChange}
              options={
                !options || options.length === 0
                  ? []
                  : options.map((opt) => ({
                      ...opt,
                      value: opt.value.toString(),
                    }))
              }
            />
          );
        },

        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="transparent"
      size="small"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        // ✅ 선택 상태
        'data-[selected-single=true]:bg-juiPrimary',
        'data-[selected-single=true]:hover:bg-juiPrimary/70',
        'light:data-[selected-single=true]:text-white',

        // ✅ range 상태
        'data-[range-middle=true]:bg-juiPrimary',
        'data-[range-middle=true]:hover:bg-juiPrimary/70',
        'light:data-[range-middle=true]:text-white',
        'data-[range-middle=true]:rounded-none',

        'data-[range-start=true]:bg-juiPrimary',
        'data-[range-start=true]:hover:bg-juiPrimary/70',
        'light:data-[range-start=true]:text-white',
        // 'data-[range-start=true]:rounded-md',
        'data-[range-start=true]:rounded-l-md',

        'data-[range-end=true]:bg-juiPrimary',
        'data-[range-end=true]:hover:bg-juiPrimary/70',
        'light:data-[range-end=true]:text-white',
        // 'data-[range-end=true]:rounded-md',
        'data-[range-end=true]:rounded-r-md',

        // ✅ 포커스 상태
        // 'group-data-[focused=true]/day:border-ring',
        // 'group-data-[focused=true]/day:ring-ring/50',
        'group-data-[focused=true]/day:relative',
        'group-data-[focused=true]/day:z-10',
        // 'group-data-[focused=true]/day:ring-[1px]',

        // ✅ 레이아웃 및 기본 스타일
        'flex',
        'border-0',
        'aspect-square',
        'size-auto',
        'w-full',
        'min-w-(--cell-size)',
        'flex-col',
        'gap-1',
        'leading-none',
        'font-normal',
        'hover:bg-current/10',
        'hover:roundded-full',
        'hover:border-0 focus-visible:border-1',

        // ✅ 자식 span 스타일
        '[&>span]:text-xs',
        '[&>span]:opacity-70',

        // ✅ 외부 전달 props
        defaultClassNames.day,
        'rounded-md',
        'data-[range-start=true]:rounded-r-none',
        'data-[range-end=true]:rounded-l-none',
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton, type DateRange };
