import { tv } from 'tailwind-variants';

const scrollAreaVariants = tv({
  base: [
    // 기본 스크롤 영역 스타일
    'relative overflow-hidden',
  ],
  variants: {
    variant: {
      default: '',
      bordered: 'border border-juiBorder-primary rounded-md',
      card: 'bg-juiBackground-paper border border-juiBorder-primary rounded-md',
    },
    size: {
      small: 'max-h-32',
      basic: 'max-h-48',
      medium: 'max-h-64',
      large: 'max-h-96',
      full: 'h-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'basic',
  },
});

export default scrollAreaVariants;
