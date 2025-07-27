import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const BluetoothPath = (
  <>
    <path d="m7 7 10 10-5 5V2l5 5L7 17" />
  </>
);
/**
 * @component @name BluetoothIcon
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Im03IDcgMTAgMTAtNSA1VjJsNSA1TDcgMTciIC8+PC9zdmc+)
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */

export const BluetoothIcon = (props: IconProps) =>
  CreateIcon({
    paths: BluetoothPath,
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'currentColor',
    ...props,
  });
