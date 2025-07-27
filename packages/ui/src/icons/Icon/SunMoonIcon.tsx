import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const SunMoonPath = (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2v2" />
    <path fillRule="evenodd" clipRule="evenodd" d="M13 8.129A4 4 0 0 1 15.873 11" />
    <path fillRule="evenodd" clipRule="evenodd" d="m19 5-1.256 1.256" />
    <path fillRule="evenodd" clipRule="evenodd" d="M20 12h2" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9 8a5 5 0 1 0 7 7 7 7 0 1 1-7-7" />
  </>
);
/**
 * @component @name SunMoonIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTEyIDJ2MiIgLz4KICAgIDxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTEzIDguMTI5QTQgNCAwIDAgMSAxNS44NzMgMTEiIC8+CiAgICA8cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Im0xOSA1LTEuMjU2IDEuMjU2IiAvPgogICAgPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIiBkPSJNMjAgMTJoMiIgLz4KICAgIDxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTkgOGE1IDUgMCAxIDAgNyA3IDcgNyAwIDEgMS03LTciIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const SunMoonIcon = (props: IconProps) =>
  CreateIcon({
    paths: SunMoonPath,
    fill: 'none',
    width: '20',
    height: '20',
    strokeWidth: '2',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
    ...props,
  });
