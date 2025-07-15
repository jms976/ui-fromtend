'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ClientChild({ initialData }: { initialData?: any }) {
  const [key, setKey] = useState(0);

  const { data } = useSuspenseQuery({
    queryKey: ['data9', key],
    queryFn: fetch3Sec,
    initialData,
  });

  return (
    <div>
      <h2>3. initialData + SuspenseQuery</h2>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={() => setKey((k) => k + 1)}>🔁 리패치</button>
    </div>
  );
}
