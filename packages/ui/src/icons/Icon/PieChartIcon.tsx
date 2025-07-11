import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const PieChartPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.43045 2.02504C7.61453 2.44686 7.42179 2.93804 6.99997 3.12212C3.911 4.47009 2.10055 7.713 2.57406 11.0498C3.04758 14.3867 5.68876 16.9979 9.0308 17.4333C12.3728 17.8687 15.5949 16.0213 16.9075 12.9171C17.0867 12.4932 17.5757 12.2949 17.9996 12.4741C18.4235 12.6534 18.6218 13.1423 18.4425 13.5662C16.8382 17.3602 12.9002 19.6181 8.8155 19.086C4.73078 18.5538 1.50267 15.3624 0.923927 11.284C0.345184 7.20564 2.55796 3.24209 6.33337 1.59456C6.75519 1.41049 7.24637 1.60322 7.43045 2.02504Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.4107 1.07741C9.56698 0.921126 9.77895 0.833328 9.99996 0.833328C12.4311 0.833328 14.7627 1.7991 16.4818 3.51818C18.2009 5.23727 19.1666 7.56884 19.1666 9.99999C19.1666 10.4602 18.7935 10.8333 18.3333 10.8333H9.99996C9.53972 10.8333 9.16663 10.4602 9.16663 9.99999V1.66666C9.16663 1.44565 9.25442 1.23369 9.4107 1.07741ZM10.8333 2.54641V9.16666H17.4535C17.2655 7.48415 16.5119 5.90538 15.3033 4.69669C14.0946 3.488 12.5158 2.73447 10.8333 2.54641Z"
    />
  </>
);
/**
 * @component @name PieChartIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik03LjQzMDQ1IDIuMDI1MDRDNy42MTQ1MyAyLjQ0Njg2IDcuNDIxNzkgMi45MzgwNCA2Ljk5OTk3IDMuMTIyMTJDMy45MTEgNC40NzAwOSAyLjEwMDU1IDcuNzEzIDIuNTc0MDYgMTEuMDQ5OEMzLjA0NzU4IDE0LjM4NjcgNS42ODg3NiAxNi45OTc5IDkuMDMwOCAxNy40MzMzQzEyLjM3MjggMTcuODY4NyAxNS41OTQ5IDE2LjAyMTMgMTYuOTA3NSAxMi45MTcxQzE3LjA4NjcgMTIuNDkzMiAxNy41NzU3IDEyLjI5NDkgMTcuOTk5NiAxMi40NzQxQzE4LjQyMzUgMTIuNjUzNCAxOC42MjE4IDEzLjE0MjMgMTguNDQyNSAxMy41NjYyQzE2LjgzODIgMTcuMzYwMiAxMi45MDAyIDE5LjYxODEgOC44MTU1IDE5LjA4NkM0LjczMDc4IDE4LjU1MzggMS41MDI2NyAxNS4zNjI0IDAuOTIzOTI3IDExLjI4NEMwLjM0NTE4NCA3LjIwNTY0IDIuNTU3OTYgMy4yNDIwOSA2LjMzMzM3IDEuNTk0NTZDNi43NTUxOSAxLjQxMDQ5IDcuMjQ2MzcgMS42MDMyMiA3LjQzMDQ1IDIuMDI1MDRaIgogICAgLz4KICAgIDxwYXRoCiAgICAgIGZpbGxSdWxlPSJldmVub2RkIgogICAgICBjbGlwUnVsZT0iZXZlbm9kZCIKICAgICAgZD0iTTkuNDEwNyAxLjA3NzQxQzkuNTY2OTggMC45MjExMjYgOS43Nzg5NSAwLjgzMzMyOCA5Ljk5OTk2IDAuODMzMzI4QzEyLjQzMTEgMC44MzMzMjggMTQuNzYyNyAxLjc5OTEgMTYuNDgxOCAzLjUxODE4QzE4LjIwMDkgNS4yMzcyNyAxOS4xNjY2IDcuNTY4ODQgMTkuMTY2NiA5Ljk5OTk5QzE5LjE2NjYgMTAuNDYwMiAxOC43OTM1IDEwLjgzMzMgMTguMzMzMyAxMC44MzMzSDkuOTk5OTZDOS41Mzk3MiAxMC44MzMzIDkuMTY2NjMgMTAuNDYwMiA5LjE2NjYzIDkuOTk5OTlWMS42NjY2NkM5LjE2NjYzIDEuNDQ1NjUgOS4yNTQ0MiAxLjIzMzY5IDkuNDEwNyAxLjA3NzQxWk0xMC44MzMzIDIuNTQ2NDFWOS4xNjY2NkgxNy40NTM1QzE3LjI2NTUgNy40ODQxNSAxNi41MTE5IDUuOTA1MzggMTUuMzAzMyA0LjY5NjY5QzE0LjA5NDYgMy40ODggMTIuNTE1OCAyLjczNDQ3IDEwLjgzMzMgMi41NDY0MVoiCiAgICAvPjwvc3ZnPg==)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const PieChartIcon = (props: IconProps) =>
  CreateIcon({
    paths: PieChartPath,
    viewBox: '0 0 20 20',
    ...props,
  });
