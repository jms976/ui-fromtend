'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '../../lib/utils';

function ScrollAreaRoot({ className, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative overflow-hidden', className)}
      {...props}
    />
  );
}

function ScrollAreaViewport({ className, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>) {
  return (
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      className={cn('h-full w-full rounded-[inherit]', className)}
      {...props}
    />
  );
}

function ScrollAreaScrollbar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        [
          // 기본 스크롤바 스타일
          'flex touch-none select-none transition-colors',

          // 수직 스크롤바
          orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',

          // 수평 스크롤바
          orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        ],
        className,
      )}
      {...props}
    />
  );
}

function ScrollAreaThumb({ className, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Thumb>) {
  return (
    <ScrollAreaPrimitive.Thumb
      data-slot="scroll-area-thumb"
      className={cn(
        [
          // 썸 스타일
          'relative flex-1 rounded-full',

          // 배경색 및 호버 효과
          'bg-juiGrey-400 hover:bg-juiGrey-300',

          // 트랜지션
          'transition-colors duration-200',
        ],
        className,
      )}
      {...props}
    />
  );
}

function ScrollAreaCorner({ className, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Corner>) {
  return (
    <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" className={cn('bg-juiGrey-400', className)} {...props} />
  );
}

export { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner };
