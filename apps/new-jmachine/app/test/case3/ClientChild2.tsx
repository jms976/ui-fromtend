'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch4Sec } from '../../../services/delayTest/fetch4sec';

export default function ClientChild2() {
  const { data } = useSuspenseQuery({
    queryKey: ['data92'],
    queryFn: fetch4Sec,
  });

  return (
    <div>
      <h2>3. initialData + SuspenseQuery</h2>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
