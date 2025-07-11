import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const EditPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.16666 3.33333C3.70643 3.33333 3.33333 3.70643 3.33333 4.16667V15.8333C3.33333 16.2936 3.70643 16.6667 4.16666 16.6667H15.8333C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333V11.3833C16.6667 10.9231 17.0398 10.55 17.5 10.55C17.9602 10.55 18.3333 10.9231 18.3333 11.3833V15.8333C18.3333 17.214 17.214 18.3333 15.8333 18.3333H4.16666C2.78595 18.3333 1.66666 17.214 1.66666 15.8333V4.16667C1.66666 2.78596 2.78595 1.66667 4.16666 1.66667H8.61666C9.0769 1.66667 9.45 2.03976 9.45 2.5C9.45 2.96024 9.0769 3.33333 8.61666 3.33333H4.16666Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 10.3452V12.5H9.65482L17.1548 5L15 2.84518L7.5 10.3452ZM15 0.833333C14.6746 0.833333 14.4107 1.07741 14.4107 1.07741L6.07741 9.41074C5.92113 9.56702 5.83334 9.77899 5.83334 10V13.3333C5.83334 13.7936 6.20643 14.1667 6.66667 14.1667H10C10.221 14.1667 10.433 14.0789 10.5893 13.9226L18.9226 5.58925C19.248 5.26382 19.248 4.73618 18.9226 4.41074L15.5893 1.07741C15.5893 1.07741 15.3254 0.833333 15 0.833333Z"
    />
  </>
);
/**
 * @component @name EditIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik00LjE2NjY2IDMuMzMzMzNDMy43MDY0MyAzLjMzMzMzIDMuMzMzMzMgMy43MDY0MyAzLjMzMzMzIDQuMTY2NjdWMTUuODMzM0MzLjMzMzMzIDE2LjI5MzYgMy43MDY0MyAxNi42NjY3IDQuMTY2NjYgMTYuNjY2N0gxNS44MzMzQzE2LjI5MzYgMTYuNjY2NyAxNi42NjY3IDE2LjI5MzYgMTYuNjY2NyAxNS44MzMzVjExLjM4MzNDMTYuNjY2NyAxMC45MjMxIDE3LjAzOTggMTAuNTUgMTcuNSAxMC41NUMxNy45NjAyIDEwLjU1IDE4LjMzMzMgMTAuOTIzMSAxOC4zMzMzIDExLjM4MzNWMTUuODMzM0MxOC4zMzMzIDE3LjIxNCAxNy4yMTQgMTguMzMzMyAxNS44MzMzIDE4LjMzMzNINC4xNjY2NkMyLjc4NTk1IDE4LjMzMzMgMS42NjY2NiAxNy4yMTQgMS42NjY2NiAxNS44MzMzVjQuMTY2NjdDMS42NjY2NiAyLjc4NTk2IDIuNzg1OTUgMS42NjY2NyA0LjE2NjY2IDEuNjY2NjdIOC42MTY2NkM5LjA3NjkgMS42NjY2NyA5LjQ1IDIuMDM5NzYgOS40NSAyLjVDOS40NSAyLjk2MDI0IDkuMDc2OSAzLjMzMzMzIDguNjE2NjYgMy4zMzMzM0g0LjE2NjY2WiIKICAgIC8+CiAgICA8cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik03LjUgMTAuMzQ1MlYxMi41SDkuNjU0ODJMMTcuMTU0OCA1TDE1IDIuODQ1MThMNy41IDEwLjM0NTJaTTE1IDAuODMzMzMzQzE0LjY3NDYgMC44MzMzMzMgMTQuNDEwNyAxLjA3NzQxIDE0LjQxMDcgMS4wNzc0MUw2LjA3NzQxIDkuNDEwNzRDNS45MjExMyA5LjU2NzAyIDUuODMzMzQgOS43Nzg5OSA1LjgzMzM0IDEwVjEzLjMzMzNDNS44MzMzNCAxMy43OTM2IDYuMjA2NDMgMTQuMTY2NyA2LjY2NjY3IDE0LjE2NjdIMTBDMTAuMjIxIDE0LjE2NjcgMTAuNDMzIDE0LjA3ODkgMTAuNTg5MyAxMy45MjI2TDE4LjkyMjYgNS41ODkyNUMxOS4yNDggNS4yNjM4MiAxOS4yNDggNC43MzYxOCAxOC45MjI2IDQuNDEwNzRMMTUuNTg5MyAxLjA3NzQxQzE1LjU4OTMgMS4wNzc0MSAxNS4zMjU0IDAuODMzMzMzIDE1IDAuODMzMzMzWiIKICAgIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const EditIcon = (props: IconProps) =>
  CreateIcon({
    paths: EditPath,
    viewBox: '0 0 20 20',
    ...props,
  });
