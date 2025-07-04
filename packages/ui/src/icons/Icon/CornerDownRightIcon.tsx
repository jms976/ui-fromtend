import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const CornerDownRightPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9107 7.74408C12.2362 7.41864 12.7638 7.41864 13.0892 7.74408L17.2559 11.9107C17.5813 12.2362 17.5813 12.7638 17.2559 13.0893L13.0892 17.2559C12.7638 17.5814 12.2362 17.5814 11.9107 17.2559C11.5853 16.9305 11.5853 16.4028 11.9107 16.0774L15.4881 12.5L11.9107 8.92259C11.5853 8.59715 11.5853 8.06951 11.9107 7.74408Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.33333 2.5C3.79357 2.5 4.16667 2.8731 4.16667 3.33333V9.16667C4.16667 10.5474 5.28595 11.6667 6.66667 11.6667H16.6667C17.1269 11.6667 17.5 12.0398 17.5 12.5C17.5 12.9602 17.1269 13.3333 16.6667 13.3333H6.66667C4.36548 13.3333 2.5 11.4679 2.5 9.16667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5Z"
    />
  </>
);
/**
 * @component @name CornerDownRightIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0xMS45MTA3IDcuNzQ0MDhDMTIuMjM2MiA3LjQxODY0IDEyLjc2MzggNy40MTg2NCAxMy4wODkyIDcuNzQ0MDhMMTcuMjU1OSAxMS45MTA3QzE3LjU4MTMgMTIuMjM2MiAxNy41ODEzIDEyLjc2MzggMTcuMjU1OSAxMy4wODkzTDEzLjA4OTIgMTcuMjU1OUMxMi43NjM4IDE3LjU4MTQgMTIuMjM2MiAxNy41ODE0IDExLjkxMDcgMTcuMjU1OUMxMS41ODUzIDE2LjkzMDUgMTEuNTg1MyAxNi40MDI4IDExLjkxMDcgMTYuMDc3NEwxNS40ODgxIDEyLjVMMTEuOTEwNyA4LjkyMjU5QzExLjU4NTMgOC41OTcxNSAxMS41ODUzIDguMDY5NTEgMTEuOTEwNyA3Ljc0NDA4WiIKICAgIC8+CiAgICA8cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0zLjMzMzMzIDIuNUMzLjc5MzU3IDIuNSA0LjE2NjY3IDIuODczMSA0LjE2NjY3IDMuMzMzMzNWOS4xNjY2N0M0LjE2NjY3IDEwLjU0NzQgNS4yODU5NSAxMS42NjY3IDYuNjY2NjcgMTEuNjY2N0gxNi42NjY3QzE3LjEyNjkgMTEuNjY2NyAxNy41IDEyLjAzOTggMTcuNSAxMi41QzE3LjUgMTIuOTYwMiAxNy4xMjY5IDEzLjMzMzMgMTYuNjY2NyAxMy4zMzMzSDYuNjY2NjdDNC4zNjU0OCAxMy4zMzMzIDIuNSAxMS40Njc5IDIuNSA5LjE2NjY3VjMuMzMzMzNDMi41IDIuODczMSAyLjg3MzEgMi41IDMuMzMzMzMgMi41WiIKICAgIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const CornerDownRightIcon = (props: IconProps) =>
  CreateIcon({
    paths: CornerDownRightPath,
    viewBox: '0 0 20 20',
    ...props,
  });
