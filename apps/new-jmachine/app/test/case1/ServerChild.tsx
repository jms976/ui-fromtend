import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default async function ServerChild() {
  const data = await fetch5Sec();

  return <div>ServerChild: {data.message}</div>;
}
