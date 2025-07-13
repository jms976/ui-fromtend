import { use } from 'react';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default function Data5() {
  const data = use(fetch5Sec());

  return <pre>{JSON.stringify(data)}</pre>;
}
