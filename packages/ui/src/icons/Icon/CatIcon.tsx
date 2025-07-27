import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const CatPath = (
  <>
    <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
    <path d="M8 14v.5" />
    <path d="M16 14v.5" />
    <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
  </>
);
/**
 * @component @name CatIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiA1Yy42NyAwIDEuMzUuMDkgMiAuMjYgMS43OC0yIDUuMDMtMi44NCA2LjQyLTIuMjYgMS40LjU4LS40MiA3LS40MiA3IC41NyAxLjA3IDEgMi4yNCAxIDMuNDRDMjEgMTcuOSAxNi45NyAyMSAxMiAyMXMtOS0zLTktNy41NmMwLTEuMjUuNS0yLjQgMS0zLjQ0IDAgMC0xLjg5LTYuNDItLjUtNyAxLjM5LS41OCA0LjcyLjIzIDYuNSAyLjIzQTkuMDQgOS4wNCAwIDAgMSAxMiA1WiIgLz4KICAgIDxwYXRoIGQ9Ik04IDE0di41IiAvPgogICAgPHBhdGggZD0iTTE2IDE0di41IiAvPgogICAgPHBhdGggZD0iTTExLjI1IDE2LjI1aDEuNUwxMiAxN2wtLjc1LS43NVoiIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const CatIcon = (props: IconProps) =>
  CreateIcon({
    paths: CatPath,
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'currentColor',
    ...props,
  });
