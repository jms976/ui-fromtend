import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const XPath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5892 4.41076C15.9147 4.7362 15.9147 5.26384 15.5892 5.58928L5.58922 15.5893C5.26378 15.9147 4.73614 15.9147 4.4107 15.5893C4.08527 15.2638 4.08527 14.7362 4.4107 14.4108L14.4107 4.41076C14.7361 4.08533 15.2638 4.08533 15.5892 4.41076Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.4107 4.41076C4.73614 4.08533 5.26378 4.08533 5.58922 4.41076L15.5892 14.4108C15.9147 14.7362 15.9147 15.2638 15.5892 15.5893C15.2638 15.9147 14.7361 15.9147 14.4107 15.5893L4.4107 5.58928C4.08527 5.26384 4.08527 4.7362 4.4107 4.41076Z"
    />
  </>
);
/**
 * @component @name XIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0xNS41ODkyIDQuNDEwNzZDMTUuOTE0NyA0LjczNjIgMTUuOTE0NyA1LjI2Mzg0IDE1LjU4OTIgNS41ODkyOEw1LjU4OTIyIDE1LjU4OTNDNS4yNjM3OCAxNS45MTQ3IDQuNzM2MTQgMTUuOTE0NyA0LjQxMDcgMTUuNTg5M0M0LjA4NTI3IDE1LjI2MzggNC4wODUyNyAxNC43MzYyIDQuNDEwNyAxNC40MTA4TDE0LjQxMDcgNC40MTA3NkMxNC43MzYxIDQuMDg1MzMgMTUuMjYzOCA0LjA4NTMzIDE1LjU4OTIgNC40MTA3NloiCiAgICAvPgogICAgPHBhdGgKICAgICAgZmlsbFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGNsaXBSdWxlPSJldmVub2RkIgogICAgICBkPSJNNC40MTA3IDQuNDEwNzZDNC43MzYxNCA0LjA4NTMzIDUuMjYzNzggNC4wODUzMyA1LjU4OTIyIDQuNDEwNzZMMTUuNTg5MiAxNC40MTA4QzE1LjkxNDcgMTQuNzM2MiAxNS45MTQ3IDE1LjI2MzggMTUuNTg5MiAxNS41ODkzQzE1LjI2MzggMTUuOTE0NyAxNC43MzYxIDE1LjkxNDcgMTQuNDEwNyAxNS41ODkzTDQuNDEwNyA1LjU4OTI4QzQuMDg1MjcgNS4yNjM4NCA0LjA4NTI3IDQuNzM2MiA0LjQxMDcgNC40MTA3NloiCiAgICAvPjwvc3ZnPg==)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const XIcon = (props: IconProps) =>
  CreateIcon({
    paths: XPath,
    viewBox: '0 0 20 20',
    ...props,
  });
