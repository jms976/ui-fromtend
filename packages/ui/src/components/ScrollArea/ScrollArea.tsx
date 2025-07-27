'use client';

import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from './ScrollAreaParts';
import scrollAreaVariants from './scrollAreaVariants';
import { cn } from '../../lib/utils';

type ScrollAreaProps = React.ComponentProps<typeof ScrollAreaRoot> &
  VariantProps<typeof scrollAreaVariants> & {
    children: React.ReactNode;
  };

function ScrollArea({ className, variant, size, children, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaRoot className={cn(scrollAreaVariants({ variant, size }), className)} {...props}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
}

export default ScrollArea;
