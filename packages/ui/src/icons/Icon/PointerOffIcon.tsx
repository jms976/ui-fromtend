import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const PointerOffIconPath = (
  <>
    <path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" />
    <path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" />
    <path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" />
    <path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" />
    <path d="M6 6v8" />
    <path d="m2 2 20 20" />
  </>
);
/**
 * @component @name PointerOffIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMCA0LjVWNGEyIDIgMCAwIDAtMi40MS0xLjk1NyIgLz4KICAgIDxwYXRoIGQ9Ik0xMy45IDguNGEyIDIgMCAwIDAtMS4yNi0xLjI5NSIgLz4KICAgIDxwYXRoIGQ9Ik0yMS43IDE2LjJBOCA4IDAgMCAwIDIyIDE0di0zYTIgMiAwIDEgMC00IDB2LTFhMiAyIDAgMCAwLTMuNjMtMS4xNTgiIC8+CiAgICA8cGF0aCBkPSJtNyAxNS0xLjgtMS44YTIgMiAwIDAgMC0yLjc5IDIuODZMNiAxOS43YTcuNzQgNy43NCAwIDAgMCA2IDIuM2gyYTggOCAwIDAgMCA1LjY1Ny0yLjM0MyIgLz4KICAgIDxwYXRoIGQ9Ik02IDZ2OCIgLz4KICAgIDxwYXRoIGQ9Im0yIDIgMjAgMjAiIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const PointerOffIcon = (props: IconProps) =>
  CreateIcon({
    paths: PointerOffIconPath,
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'currentColor',
    ...props,
  });
