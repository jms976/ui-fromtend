import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const AlignCenterVerticalPath = (
  <>
    <path d="M12 2v20" />
    <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
    <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
    <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
    <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
  </>
);
/**
 * @component @name AlignCenterVerticalIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAydjIwIiAvPgogICAgPHBhdGggZD0iTTggMTBINGEyIDIgMCAwIDEtMi0yVjZjMC0xLjEuOS0yIDItMmg0IiAvPgogICAgPHBhdGggZD0iTTE2IDEwaDRhMiAyIDAgMCAwIDItMlY2YTIgMiAwIDAgMC0yLTJoLTQiIC8+CiAgICA8cGF0aCBkPSJNOCAyMEg3YTIgMiAwIDAgMS0yLTJ2LTJjMC0xLjEuOS0yIDItMmgxIiAvPgogICAgPHBhdGggZD0iTTE2IDE0aDFhMiAyIDAgMCAxIDIgMnYyYTIgMiAwIDAgMS0yIDJoLTEiIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const AlignCenterVerticalIcon = (props: IconProps) =>
  CreateIcon({
    paths: AlignCenterVerticalPath,
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'currentColor',
    ...props,
  });
