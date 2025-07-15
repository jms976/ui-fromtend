'use client';

import { use, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Button } from '@common/ui';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default function ClientComp5({ data }: { data: Promise<{ message: string }> }) {
  const initialData = use(data);

  const [param, setParam] = useState(0);

  const { data: queryData } = useSuspenseQuery({
    queryKey: [param, 'case79'],
    queryFn: fetch5Sec,
    initialData,
  });

  return (
    <div>
      <Button
        variant="gradient"
        onClick={() => {
          setParam((k) => k + 1);
        }}>
        Refetch
      </Button>
      <div>ServerChild: {queryData.message}</div>
    </div>
  );
}
