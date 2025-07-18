import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const ArrowUpPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99996 2.5C10.4602 2.5 10.8333 2.8731 10.8333 3.33333V16.6667C10.8333 17.1269 10.4602 17.5 9.99996 17.5C9.53972 17.5 9.16663 17.1269 9.16663 16.6667V3.33333C9.16663 2.8731 9.53972 2.5 9.99996 2.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.4107 2.74408C9.73614 2.41864 10.2638 2.41864 10.5892 2.74408L15.5892 7.74408C15.9147 8.06951 15.9147 8.59715 15.5892 8.92259C15.2638 9.24803 14.7361 9.24803 14.4107 8.92259L9.99996 4.51184L5.58922 8.92259C5.26378 9.24803 4.73614 9.24803 4.4107 8.92259C4.08527 8.59715 4.08527 8.06951 4.4107 7.74408L9.4107 2.74408Z"
    />
  </>
);
/**
 * @component @name ArrowUpIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik05Ljk5OTk2IDIuNUMxMC40NjAyIDIuNSAxMC44MzMzIDIuODczMSAxMC44MzMzIDMuMzMzMzNWMTYuNjY2N0MxMC44MzMzIDE3LjEyNjkgMTAuNDYwMiAxNy41IDkuOTk5OTYgMTcuNUM5LjUzOTcyIDE3LjUgOS4xNjY2MyAxNy4xMjY5IDkuMTY2NjMgMTYuNjY2N1YzLjMzMzMzQzkuMTY2NjMgMi44NzMxIDkuNTM5NzIgMi41IDkuOTk5OTYgMi41WiIKICAgIC8+CiAgICA8cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik05LjQxMDcgMi43NDQwOEM5LjczNjE0IDIuNDE4NjQgMTAuMjYzOCAyLjQxODY0IDEwLjU4OTIgMi43NDQwOEwxNS41ODkyIDcuNzQ0MDhDMTUuOTE0NyA4LjA2OTUxIDE1LjkxNDcgOC41OTcxNSAxNS41ODkyIDguOTIyNTlDMTUuMjYzOCA5LjI0ODAzIDE0LjczNjEgOS4yNDgwMyAxNC40MTA3IDguOTIyNTlMOS45OTk5NiA0LjUxMTg0TDUuNTg5MjIgOC45MjI1OUM1LjI2Mzc4IDkuMjQ4MDMgNC43MzYxNCA5LjI0ODAzIDQuNDEwNyA4LjkyMjU5QzQuMDg1MjcgOC41OTcxNSA0LjA4NTI3IDguMDY5NTEgNC40MTA3IDcuNzQ0MDhMOS40MTA3IDIuNzQ0MDhaIgogICAgLz48L3N2Zz4=)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const ArrowUpIcon = (props: IconProps) =>
  CreateIcon({
    paths: ArrowUpPath,
    viewBox: '0 0 20 20',
    ...props,
  });
