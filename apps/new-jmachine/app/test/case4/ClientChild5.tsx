'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';
import { useState } from 'react';

export default function ClientChild5() {
  const [key, setKey] = useState(0);

  const { data: data5 } = useSuspenseQuery({
    queryKey: ['qq', key],
    queryFn: fetch5Sec,
  });

  return (
    <div>
      <h2>slow query</h2>
      <pre>{JSON.stringify(data5)}</pre>
      <button onClick={() => setKey((k) => k + 1)}>🔁 리패치</button>
    </div>
  );
}
