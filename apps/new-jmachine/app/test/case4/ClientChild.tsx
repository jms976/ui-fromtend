'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { useState } from 'react';

export default function ClientChild() {
  const [key, setKey] = useState(0);
  const { data } = useSuspenseQuery({
    queryKey: ['data3', key],
    queryFn: fetch3Sec,
  });

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={() => setKey((k) => k + 1)}>🔁 리패치</button>
    </div>
  );
}
