'use client';

import { use, useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Button } from '@common/ui';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { fetch4Sec } from '../../../services/delayTest/fetch4sec';

export default function ClientComp({ data }: { data: Promise<{ message: string }> }) {
  const initialData = use(data);

  const [param, setParam] = useState('init');

  const {
    data: queryData,
    refetch,
    isFetching,
  } = useSuspenseQuery({
    queryKey: ['case7', param], // ✅ param 반영!
    queryFn: param === 'init' ? fetch3Sec : fetch4Sec,
    initialData,
  });

  useEffect(() => {
    // 이펙트는 param이 변경될 때마다 실행됩니다.
    // console.log(isFetching);
  }, [isFetching]);

  return (
    <div>
      <Button
        variant="gradient"
        onClick={() => {
          setParam((prev) => (prev === 'init' ? 'update' : 'init'));
        }}>
        Refetch with param
      </Button>
      <Button
        variant="gradient"
        onClick={() => {
          refetch();
        }}>
        Refetch
      </Button>
      <div>ServerChild: {queryData?.message}</div>
    </div>
  );
}
