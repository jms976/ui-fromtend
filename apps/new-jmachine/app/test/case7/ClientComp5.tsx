'use client';

import { use } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default function ClientComp5({ data }: { data: Promise<{ message: string }> }) {
  const initialData = use(data);

  const { data: queryData } = useSuspenseQuery({
    queryKey: ['case79'],
    queryFn: fetch5Sec,
    initialData,
  });

  return (
    <div>
      <div>ServerChild: {queryData.message}</div>
    </div>
  );
}
