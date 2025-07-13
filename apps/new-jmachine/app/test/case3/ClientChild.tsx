'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ClientChild({ initialData }: { initialData?: any }) {
  const { data } = useSuspenseQuery({
    queryKey: ['data9'],
    queryFn: fetch3Sec,
    initialData,
  });

  return (
    <div>
      <h2>3. initialData + SuspenseQuery</h2>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
