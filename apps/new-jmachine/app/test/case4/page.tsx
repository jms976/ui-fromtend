import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import ClientChild from './ClientChild';
import { Suspense } from 'react';
import { Skeleton } from '@common/ui';
import { getQueryClient } from '../../../lib/query/queryClient';
import ClientChild5 from './ClientChild5';
// import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['data3', 0],
    queryFn: fetch3Sec,
  });

  // await Promise.all([
  //   queryClient.prefetchQuery({
  //     queryKey: ['data3', 0],
  //     queryFn: fetch3Sec,
  //   }),
  //   queryClient.prefetchQuery({
  //     queryKey: ['qq', 0],
  //     queryFn: fetch5Sec,
  //   }),
  // ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h2>4. prefetch + hydrate</h2>
      <Suspense
        fallback={
          <div>
            <span>⌛ react query 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ClientChild />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <span>⌛ react query 느린데이터 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ClientChild5 />
      </Suspense>
    </HydrationBoundary>
  );
}
