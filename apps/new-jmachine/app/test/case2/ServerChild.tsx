import { use } from 'react';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default function ServerChild() {
  const data = use(fetch5Sec());

  return <div>ServerChild: {data.message}</div>;
}
