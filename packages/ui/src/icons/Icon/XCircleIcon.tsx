import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const XCirclePath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.833313 9.99998C0.833313 4.93737 4.93737 0.833313 9.99998 0.833313C15.0626 0.833313 19.1666 4.93737 19.1666 9.99998C19.1666 15.0626 15.0626 19.1666 9.99998 19.1666C4.93737 19.1666 0.833313 15.0626 0.833313 9.99998ZM9.99998 2.49998C5.85784 2.49998 2.49998 5.85784 2.49998 9.99998C2.49998 14.1421 5.85784 17.5 9.99998 17.5C14.1421 17.5 17.5 14.1421 17.5 9.99998C17.5 5.85784 14.1421 2.49998 9.99998 2.49998Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0893 6.91076C13.4147 7.2362 13.4147 7.76384 13.0893 8.08928L8.08928 13.0893C7.76384 13.4147 7.2362 13.4147 6.91076 13.0893C6.58533 12.7638 6.58533 12.2362 6.91076 11.9108L11.9108 6.91076C12.2362 6.58533 12.7638 6.58533 13.0893 6.91076Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.91076 6.91076C7.2362 6.58533 7.76384 6.58533 8.08928 6.91076L13.0893 11.9108C13.4147 12.2362 13.4147 12.7638 13.0893 13.0893C12.7638 13.4147 12.2362 13.4147 11.9108 13.0893L6.91076 8.08928C6.58533 7.76384 6.58533 7.2362 6.91076 6.91076Z"
    />
  </>
);
/**
 * @component @name XCircleIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0wLjgzMzMxMyA5Ljk5OTk4QzAuODMzMzEzIDQuOTM3MzcgNC45MzczNyAwLjgzMzMxMyA5Ljk5OTk4IDAuODMzMzEzQzE1LjA2MjYgMC44MzMzMTMgMTkuMTY2NiA0LjkzNzM3IDE5LjE2NjYgOS45OTk5OEMxOS4xNjY2IDE1LjA2MjYgMTUuMDYyNiAxOS4xNjY2IDkuOTk5OTggMTkuMTY2NkM0LjkzNzM3IDE5LjE2NjYgMC44MzMzMTMgMTUuMDYyNiAwLjgzMzMxMyA5Ljk5OTk4Wk05Ljk5OTk4IDIuNDk5OThDNS44NTc4NCAyLjQ5OTk4IDIuNDk5OTggNS44NTc4NCAyLjQ5OTk4IDkuOTk5OThDMi40OTk5OCAxNC4xNDIxIDUuODU3ODQgMTcuNSA5Ljk5OTk4IDE3LjVDMTQuMTQyMSAxNy41IDE3LjUgMTQuMTQyMSAxNy41IDkuOTk5OThDMTcuNSA1Ljg1Nzg0IDE0LjE0MjEgMi40OTk5OCA5Ljk5OTk4IDIuNDk5OThaIgogICAgLz4KICAgIDxwYXRoCiAgICAgIGZpbGxSdWxlPSJldmVub2RkIgogICAgICBjbGlwUnVsZT0iZXZlbm9kZCIKICAgICAgZD0iTTEzLjA4OTMgNi45MTA3NkMxMy40MTQ3IDcuMjM2MiAxMy40MTQ3IDcuNzYzODQgMTMuMDg5MyA4LjA4OTI4TDguMDg5MjggMTMuMDg5M0M3Ljc2Mzg0IDEzLjQxNDcgNy4yMzYyIDEzLjQxNDcgNi45MTA3NiAxMy4wODkzQzYuNTg1MzMgMTIuNzYzOCA2LjU4NTMzIDEyLjIzNjIgNi45MTA3NiAxMS45MTA4TDExLjkxMDggNi45MTA3NkMxMi4yMzYyIDYuNTg1MzMgMTIuNzYzOCA2LjU4NTMzIDEzLjA4OTMgNi45MTA3NloiCiAgICAvPgogICAgPHBhdGgKICAgICAgZmlsbFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGNsaXBSdWxlPSJldmVub2RkIgogICAgICBkPSJNNi45MTA3NiA2LjkxMDc2QzcuMjM2MiA2LjU4NTMzIDcuNzYzODQgNi41ODUzMyA4LjA4OTI4IDYuOTEwNzZMMTMuMDg5MyAxMS45MTA4QzEzLjQxNDcgMTIuMjM2MiAxMy40MTQ3IDEyLjc2MzggMTMuMDg5MyAxMy4wODkzQzEyLjc2MzggMTMuNDE0NyAxMi4yMzYyIDEzLjQxNDcgMTEuOTEwOCAxMy4wODkzTDYuOTEwNzYgOC4wODkyOEM2LjU4NTMzIDcuNzYzODQgNi41ODUzMyA3LjIzNjIgNi45MTA3NiA2LjkxMDc2WiIKICAgIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const XCircleIcon = (props: IconProps) =>
  CreateIcon({
    paths: XCirclePath,
    viewBox: '0 0 20 20',
    ...props,
  });
