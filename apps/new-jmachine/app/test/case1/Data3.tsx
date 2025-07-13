import { fetch3Sec } from '../../../services/delayTest/fetch3sec';

export default async function Data3() {
  const data = await fetch3Sec();

  return <pre>{JSON.stringify(data)}</pre>;
}
