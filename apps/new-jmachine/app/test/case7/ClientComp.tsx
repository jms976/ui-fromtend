'use client';

import { use, useEffect } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';

export default function ClientComp({ data }: { data: Promise<{ message: string }> }) {
  const initialData = use(data);

  const { data: queryData, isFetching } = useSuspenseQuery({
    queryKey: ['case7'], // ✅ param 반영!
    queryFn: fetch3Sec,
    initialData,
  });

  useEffect(() => {
    // 이펙트는 param이 변경될 때마다 실행됩니다.
    // console.log(isFetching);
  }, [isFetching]);

  return (
    <div>
      <div>ServerChild: {queryData?.message ?? initialData.message}</div>
    </div>
  );
}
