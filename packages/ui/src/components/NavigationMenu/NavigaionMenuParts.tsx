import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib/utils';
import { ChevronDownIcon } from '@common/ui/icons';

function NavigationMenuRoot({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        // Layout
        'group/navigation-menu',
        'relative flex flex-1 justify-center items-center',
        'max-w-max',
        className,
      )}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        // Layout
        'group flex flex-1 list-none items-center justify-center',
        'space-x-1',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" className={cn('relative', className)} {...props} />
  );
}

const navigationMenuTriggerStyle = tv({
  base: [
    // Layout
    'group inline-flex items-center justify-center',
    'h-10 w-max px-4 py-2',
    'rounded-md',

    // Typography
    'text-sm font-medium',

    // Colors
    'bg-juiBackground-default',
    'text-juiText-primary',

    // Transitions
    'transition-colors',

    // Hover & Focus
    'hover:bg-juiBackground-input',
    'hover:text-juiText-secondary',
    'focus:bg-juiBackground-input',
    'focus:text-juiText-secondary',
    'focus:outline-none',
    'focus-visible:ring-2 focus-visible:ring-juiFocus-ring',

    // Disabled
    'disabled:pointer-events-none',
    'disabled:opacity-50',

    // Data states
    'data-[active]:bg-juiBackground-input/50',
    'data-[state=open]:bg-juiBackground-input/50',
  ],
});

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}>
      {children}{' '}
      <ChevronDownIcon
        className="relative top-px ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        // Layout & Positioning
        'absolute left-0 top-0 w-full',
        'md:relative md:w-auto',
        'p-2 pr-2.5',

        // Animations
        'data-[motion^=from-]:animate-in',
        'data-[motion^=to-]:animate-out',
        'data-[motion^=from-]:fade-in',
        'data-[motion^=to-]:fade-out',
        'data-[motion=from-end]:slide-in-from-right-52',
        'data-[motion=from-start]:slide-in-from-left-52',
        'data-[motion=to-end]:slide-out-to-right-52',
        'data-[motion=to-start]:slide-out-to-left-52',

        // Viewport specific styles (when viewport=false)
        'group-data-[viewport=false]/navigation-menu:bg-juiBackground-popover',
        'group-data-[viewport=false]/navigation-menu:text-juiText-popover-foreground',
        'group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in',
        'group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out',
        'group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95',
        'group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95',
        'group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0',
        'group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0',
        'group-data-[viewport=false]/navigation-menu:top-full',
        'group-data-[viewport=false]/navigation-menu:mt-1.5',
        'group-data-[viewport=false]/navigation-menu:overflow-hidden',
        'group-data-[viewport=false]/navigation-menu:rounded-md',
        'group-data-[viewport=false]/navigation-menu:border',
        'group-data-[viewport=false]/navigation-menu:border-juiBorder-primary',
        'group-data-[viewport=false]/navigation-menu:shadow-lg',
        'group-data-[viewport=false]/navigation-menu:duration-200',

        // Link specific styles within content
        '[&_a[data-slot=navigation-menu-link]]:focus:ring-0',
        '[&_a[data-slot=navigation-menu-link]]:focus:outline-none',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        // Layout & Positioning
        'absolute top-full left-0 z-50 flex justify-center',
        'isolate',
      )}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          // Layout & Sizing
          'relative mt-1.5',
          'h-[var(--radix-navigation-menu-viewport-height)] w-full',
          'md:w-[var(--radix-navigation-menu-viewport-width)]',
          'overflow-hidden rounded-md',

          // Colors & Borders
          'bg-juiBackground-popover',
          'text-juiText-popover-foreground',
          'border border-juiBorder-primary',
          'shadow-lg',

          // Animations
          'origin-top-center',
          'data-[state=open]:animate-in',
          'data-[state=closed]:animate-out',
          'data-[state=closed]:zoom-out-95',
          'data-[state=open]:zoom-in-90',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        // Layout
        'flex flex-col gap-1',
        'rounded-sm p-2',

        // Typography
        'text-sm',

        // Colors
        'text-juiText-primary',

        // Transitions
        'transition-all',

        // Hover & Focus
        'hover:bg-juiBackground-input',
        'hover:text-juiText-secondary',
        'focus:bg-juiBackground-input',
        'focus:text-juiText-secondary',
        'outline-none',
        'focus-visible:ring-2 focus-visible:ring-juiFocus-ring',

        // Active state
        'data-[active=true]:bg-juiBackground-input/50',
        'data-[active=true]:text-juiText-secondary',

        // SVG styling
        "[&_svg:not([class*='text-'])]:text-juiText-muted-foreground",
        "[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        // Layout & Positioning
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',

        // Animations
        'data-[state=visible]:animate-in',
        'data-[state=hidden]:animate-out',
        'data-[state=hidden]:fade-out',
        'data-[state=visible]:fade-in',
        className,
      )}
      {...props}>
      <div
        className={cn(
          // Layout & Sizing
          'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm',

          // Colors & Shadow
          'bg-juiBorder-primary',
          'shadow-md',
        )}
      />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
