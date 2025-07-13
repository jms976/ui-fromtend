import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default async function Data5() {
  const data = await fetch5Sec();

  return <pre>{JSON.stringify(data)}</pre>;
}
