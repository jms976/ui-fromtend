'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { cn } from '../../lib/utils';
import { DialogRoot, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../Dialog';

function CommandRoot({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'bg-juiBackground-default text-juiText-secondary shadow-md flex h-full w-full flex-col p-2 overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  trigger,
  ...props
}: React.ComponentProps<typeof DialogRoot> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
  trigger?: React.ReactNode;
}) {
  return (
    <DialogRoot {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        open
        className={cn('overflow-hidden p-0 border-none', className)}
        showCloseButton={showCloseButton}>
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <CommandRoot className="[&_[cmdk-group-heading]]:text-juiText-secondary **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </CommandRoot>
      </DialogContent>
    </DialogRoot>
  );
}

function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-juiText-secondary flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn('max-h-96 min-w-32 scroll-py-1 overflow-x-hidden overflow-y-auto my-1.5', className)}
      {...props}
    />
  );
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center w-full text-juiText-secondary"
      {...props}
    />
  );
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        '[&_[cmdk-group-heading]]:text-juiText-secondary overflow-hidden [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('bg-juiBorder-primary pointer-events-none my-1 h-px', className)}
      {...props}
    />
  );
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        // 상태 기반 스타일
        'data-[selected=true]:bg-current/10',
        'data-[disabled=true]:cursor-not-allowed',
        'data-[disabled=true]:opacity-50',

        // SVG 스타일
        '[&_svg]:pointer-events-none',
        '[&_svg]:shrink-0',
        "[&_svg:not([class*='size-'])]:size-4",
        "[&_svg:not([class*='text-'])]:text-juiText-secondary",

        // 레이아웃 및 기본 스타일
        'cursor-pointer',
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',

        className,
      )}
      {...props}
    />
  );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn('text-juiText-secondary ml-auto text-xs tracking-widest', className)}
      {...props}
    />
  );
}

export {
  CommandRoot,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
