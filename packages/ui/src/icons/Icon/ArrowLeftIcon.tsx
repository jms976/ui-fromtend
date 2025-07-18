import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const ArrowLeftPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 9.99999C2.5 9.53975 2.8731 9.16666 3.33333 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 9.99999Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.92259 4.41073C9.24803 4.73617 9.24803 5.26381 8.92259 5.58925L4.51184 9.99999L8.92259 14.4107C9.24803 14.7362 9.24803 15.2638 8.92259 15.5892C8.59715 15.9147 8.06951 15.9147 7.74408 15.5892L2.74408 10.5892C2.41864 10.2638 2.41864 9.73617 2.74408 9.41073L7.74408 4.41073C8.06951 4.0853 8.59715 4.0853 8.92259 4.41073Z"
    />
  </>
);
/**
 * @component @name ArrowLeftIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0yLjUgOS45OTk5OUMyLjUgOS41Mzk3NSAyLjg3MzEgOS4xNjY2NiAzLjMzMzMzIDkuMTY2NjZIMTYuNjY2N0MxNy4xMjY5IDkuMTY2NjYgMTcuNSA5LjUzOTc1IDE3LjUgOS45OTk5OUMxNy41IDEwLjQ2MDIgMTcuMTI2OSAxMC44MzMzIDE2LjY2NjcgMTAuODMzM0gzLjMzMzMzQzIuODczMSAxMC44MzMzIDIuNSAxMC40NjAyIDIuNSA5Ljk5OTk5WiIKICAgIC8+CiAgICA8cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik04LjkyMjU5IDQuNDEwNzNDOS4yNDgwMyA0LjczNjE3IDkuMjQ4MDMgNS4yNjM4MSA4LjkyMjU5IDUuNTg5MjVMNC41MTE4NCA5Ljk5OTk5TDguOTIyNTkgMTQuNDEwN0M5LjI0ODAzIDE0LjczNjIgOS4yNDgwMyAxNS4yNjM4IDguOTIyNTkgMTUuNTg5MkM4LjU5NzE1IDE1LjkxNDcgOC4wNjk1MSAxNS45MTQ3IDcuNzQ0MDggMTUuNTg5MkwyLjc0NDA4IDEwLjU4OTJDMi40MTg2NCAxMC4yNjM4IDIuNDE4NjQgOS43MzYxNyAyLjc0NDA4IDkuNDEwNzNMNy43NDQwOCA0LjQxMDczQzguMDY5NTEgNC4wODUzIDguNTk3MTUgNC4wODUzIDguOTIyNTkgNC40MTA3M1oiCiAgICAvPjwvc3ZnPg==)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const ArrowLeftIcon = (props: IconProps) =>
  CreateIcon({
    paths: ArrowLeftPath,
    viewBox: '0 0 20 20',
    ...props,
  });
