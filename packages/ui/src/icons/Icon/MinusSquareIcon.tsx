import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const MinusSquarePath = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.66669 4.16667C1.66669 2.78596 2.78598 1.66667 4.16669 1.66667H15.8334C17.2141 1.66667 18.3334 2.78596 18.3334 4.16667V15.8333C18.3334 17.2141 17.2141 18.3333 15.8334 18.3333H4.16669C2.78598 18.3333 1.66669 17.2141 1.66669 15.8333V4.16667ZM4.16669 3.33334C3.70645 3.33334 3.33335 3.70643 3.33335 4.16667V15.8333C3.33335 16.2936 3.70645 16.6667 4.16669 16.6667H15.8334C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333V4.16667C16.6667 3.70643 16.2936 3.33334 15.8334 3.33334H4.16669Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.83331 10C5.83331 9.53977 6.20641 9.16667 6.66665 9.16667H13.3333C13.7936 9.16667 14.1666 9.53977 14.1666 10C14.1666 10.4602 13.7936 10.8333 13.3333 10.8333H6.66665C6.20641 10.8333 5.83331 10.4602 5.83331 10Z"
    />
  </>
);
/**
 * @component @name MinusSquareIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aAogICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgIGQ9Ik0xLjY2NjY5IDQuMTY2NjdDMS42NjY2OSAyLjc4NTk2IDIuNzg1OTggMS42NjY2NyA0LjE2NjY5IDEuNjY2NjdIMTUuODMzNEMxNy4yMTQxIDEuNjY2NjcgMTguMzMzNCAyLjc4NTk2IDE4LjMzMzQgNC4xNjY2N1YxNS44MzMzQzE4LjMzMzQgMTcuMjE0MSAxNy4yMTQxIDE4LjMzMzMgMTUuODMzNCAxOC4zMzMzSDQuMTY2NjlDMi43ODU5OCAxOC4zMzMzIDEuNjY2NjkgMTcuMjE0MSAxLjY2NjY5IDE1LjgzMzNWNC4xNjY2N1pNNC4xNjY2OSAzLjMzMzM0QzMuNzA2NDUgMy4zMzMzNCAzLjMzMzM1IDMuNzA2NDMgMy4zMzMzNSA0LjE2NjY3VjE1LjgzMzNDMy4zMzMzNSAxNi4yOTM2IDMuNzA2NDUgMTYuNjY2NyA0LjE2NjY5IDE2LjY2NjdIMTUuODMzNEMxNi4yOTM2IDE2LjY2NjcgMTYuNjY2NyAxNi4yOTM2IDE2LjY2NjcgMTUuODMzM1Y0LjE2NjY3QzE2LjY2NjcgMy43MDY0MyAxNi4yOTM2IDMuMzMzMzQgMTUuODMzNCAzLjMzMzM0SDQuMTY2NjlaIgogICAgLz4KICAgIDxwYXRoCiAgICAgIGZpbGxSdWxlPSJldmVub2RkIgogICAgICBjbGlwUnVsZT0iZXZlbm9kZCIKICAgICAgZD0iTTUuODMzMzEgMTBDNS44MzMzMSA5LjUzOTc3IDYuMjA2NDEgOS4xNjY2NyA2LjY2NjY1IDkuMTY2NjdIMTMuMzMzM0MxMy43OTM2IDkuMTY2NjcgMTQuMTY2NiA5LjUzOTc3IDE0LjE2NjYgMTBDMTQuMTY2NiAxMC40NjAyIDEzLjc5MzYgMTAuODMzMyAxMy4zMzMzIDEwLjgzMzNINi42NjY2NUM2LjIwNjQxIDEwLjgzMzMgNS44MzMzMSAxMC40NjAyIDUuODMzMzEgMTBaIgogICAgLz48L3N2Zz4=)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const MinusSquareIcon = (props: IconProps) =>
  CreateIcon({
    paths: MinusSquarePath,
    viewBox: '0 0 20 20',
    ...props,
  });
