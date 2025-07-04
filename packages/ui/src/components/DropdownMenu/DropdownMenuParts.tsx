'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon } from '@common/ui/icons';

import { cn } from '../../lib/utils';

function DropdownMenuRoot({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  alignOffset = 0,
  align = 'start',
  side = 'bottom',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        align={align}
        side={side}
        className={cn(
          // Layout
          'z-50 min-w-[8rem] max-h-(--radix-dropdown-menu-content-available-height) overflow-x-hidden overflow-y-auto',
          'rounded-md border p-1 shadow-md',

          // State transition (open/close)
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',

          // Slide-in animation based on side
          'data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',

          // Color scheme
          'bg-juiBackground-tooltip light:bg-juiBackground-default text-juiText-primary',

          // Transform origin
          'origin-(--radix-dropdown-menu-content-transform-origin)',

          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        'relative flex items-center gap-2 px-2 py-1.5 text-sm select-none outline-hidden cursor-default',
        'rounded-sm',
        'data-[inset]:pl-8',
        'focus:bg-current/10 focus:text-juiText-primary',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'data-[variant=destructive]:text-juiScore-alert',
        'data-[variant=destructive]:focus:bg-juiError/10',
        'data-[variant=destructive]:focus:text-juiError',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        '[&_svg:not([class*="text-"])]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        'relative flex items-center gap-2 pl-8 pr-2 py-1.5 text-sm select-none outline-hidden cursor-default rounded-sm',
        'focus:bg-current/10 focus:text-juiText-primary',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        className,
      )}
      checked={checked}
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-juiBorder-primary my-1 h-px', className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn('text-juiText-secondary ml-auto text-xs tracking-widest', className)}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'flex items-center px-2 py-1.5 text-sm select-none outline-hidden cursor-default rounded-sm',
        'focus:bg-current/10 focus:text-juiText-primary',
        'data-[state=open]:bg-juiPrimary/15',
        'data-[inset]:pl-8',
        className,
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
        'bg-juiBackground-tooltip light:bg-juiBackground-default text-juiText-primary',
        'origin-(--radix-dropdown-menu-content-transform-origin)',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
        className,
      )}
      {...props}
    />
  );
}

export {
  DropdownMenuRoot,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
