import { use } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';

export default function Data3() {
  const data = use(fetch3Sec());

  return <pre>{JSON.stringify(data)}</pre>;
}
