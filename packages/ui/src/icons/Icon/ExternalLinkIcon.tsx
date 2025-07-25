import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const ExternalLinkPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.16667 5.83333C3.70643 5.83333 3.33334 6.20643 3.33334 6.66667V15.8333C3.33334 16.2936 3.70643 16.6667 4.16667 16.6667H13.3333C13.7936 16.6667 14.1667 16.2936 14.1667 15.8333V10.8333C14.1667 10.3731 14.5398 10 15 10C15.4602 10 15.8333 10.3731 15.8333 10.8333V15.8333C15.8333 17.214 14.7141 18.3333 13.3333 18.3333H4.16667C2.78596 18.3333 1.66667 17.214 1.66667 15.8333V6.66667C1.66667 5.28595 2.78596 4.16667 4.16667 4.16667H9.16667C9.62691 4.16667 10 4.53976 10 5C10 5.46024 9.62691 5.83333 9.16667 5.83333H4.16667Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6667 2.5C11.6667 2.03976 12.0398 1.66667 12.5 1.66667H17.5C17.9602 1.66667 18.3333 2.03976 18.3333 2.5V7.5C18.3333 7.96024 17.9602 8.33333 17.5 8.33333C17.0398 8.33333 16.6667 7.96024 16.6667 7.5V3.33333H12.5C12.0398 3.33333 11.6667 2.96024 11.6667 2.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0893 1.91074C18.4147 2.23618 18.4147 2.76382 18.0893 3.08926L8.92259 12.2559C8.59715 12.5814 8.06951 12.5814 7.74408 12.2559C7.41864 11.9305 7.41864 11.4028 7.74408 11.0774L16.9107 1.91074C17.2362 1.58531 17.7638 1.58531 18.0893 1.91074Z"
    />
  </>
);
/**
 * @component @name ExternalLinkIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik00LjE2NjY3IDUuODMzMzNDMy43MDY0MyA1LjgzMzMzIDMuMzMzMzQgNi4yMDY0MyAzLjMzMzM0IDYuNjY2NjdWMTUuODMzM0MzLjMzMzM0IDE2LjI5MzYgMy43MDY0MyAxNi42NjY3IDQuMTY2NjcgMTYuNjY2N0gxMy4zMzMzQzEzLjc5MzYgMTYuNjY2NyAxNC4xNjY3IDE2LjI5MzYgMTQuMTY2NyAxNS44MzMzVjEwLjgzMzNDMTQuMTY2NyAxMC4zNzMxIDE0LjUzOTggMTAgMTUgMTBDMTUuNDYwMiAxMCAxNS44MzMzIDEwLjM3MzEgMTUuODMzMyAxMC44MzMzVjE1LjgzMzNDMTUuODMzMyAxNy4yMTQgMTQuNzE0MSAxOC4zMzMzIDEzLjMzMzMgMTguMzMzM0g0LjE2NjY3QzIuNzg1OTYgMTguMzMzMyAxLjY2NjY3IDE3LjIxNCAxLjY2NjY3IDE1LjgzMzNWNi42NjY2N0MxLjY2NjY3IDUuMjg1OTUgMi43ODU5NiA0LjE2NjY3IDQuMTY2NjcgNC4xNjY2N0g5LjE2NjY3QzkuNjI2OTEgNC4xNjY2NyAxMCA0LjUzOTc2IDEwIDVDMTAgNS40NjAyNCA5LjYyNjkxIDUuODMzMzMgOS4xNjY2NyA1LjgzMzMzSDQuMTY2NjdaIgogICAgLz4KICAgIDxwYXRoCiAgICAgIGZpbGxSdWxlPSJldmVub2RkIgogICAgICBjbGlwUnVsZT0iZXZlbm9kZCIKICAgICAgZD0iTTExLjY2NjcgMi41QzExLjY2NjcgMi4wMzk3NiAxMi4wMzk4IDEuNjY2NjcgMTIuNSAxLjY2NjY3SDE3LjVDMTcuOTYwMiAxLjY2NjY3IDE4LjMzMzMgMi4wMzk3NiAxOC4zMzMzIDIuNVY3LjVDMTguMzMzMyA3Ljk2MDI0IDE3Ljk2MDIgOC4zMzMzMyAxNy41IDguMzMzMzNDMTcuMDM5OCA4LjMzMzMzIDE2LjY2NjcgNy45NjAyNCAxNi42NjY3IDcuNVYzLjMzMzMzSDEyLjVDMTIuMDM5OCAzLjMzMzMzIDExLjY2NjcgMi45NjAyNCAxMS42NjY3IDIuNVoiCiAgICAvPgogICAgPHBhdGgKICAgICAgZmlsbFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGNsaXBSdWxlPSJldmVub2RkIgogICAgICBkPSJNMTguMDg5MyAxLjkxMDc0QzE4LjQxNDcgMi4yMzYxOCAxOC40MTQ3IDIuNzYzODIgMTguMDg5MyAzLjA4OTI2TDguOTIyNTkgMTIuMjU1OUM4LjU5NzE1IDEyLjU4MTQgOC4wNjk1MSAxMi41ODE0IDcuNzQ0MDggMTIuMjU1OUM3LjQxODY0IDExLjkzMDUgNy40MTg2NCAxMS40MDI4IDcuNzQ0MDggMTEuMDc3NEwxNi45MTA3IDEuOTEwNzRDMTcuMjM2MiAxLjU4NTMxIDE3Ljc2MzggMS41ODUzMSAxOC4wODkzIDEuOTEwNzRaIgogICAgLz48L3N2Zz4=)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const ExternalLinkIcon = (props: IconProps) =>
  CreateIcon({
    paths: ExternalLinkPath,
    viewBox: '0 0 20 20',
    ...props,
  });
