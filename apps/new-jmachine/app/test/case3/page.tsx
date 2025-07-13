import { Suspense } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { Skeleton } from '@common/ui';
import ClientChild from './ClientChild';
import ClientChild5 from './ClientChild5';
import ClientChild2 from './ClientChild2';

export default async function Page() {
  const data = await fetch3Sec();

  return (
    <div className="flex flex-col gap-4">
      <h2>3. useSuspenseQuery + initialData</h2>
      {/* <pre>{JSON.stringify(data)}</pre> */}

      <Suspense
        fallback={
          <div>
            <span>⌛ react query 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ClientChild initialData={data} />
      </Suspense>

      <Suspense
        fallback={
          <div>
            <span>⌛ react query 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ClientChild2 />
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
    </div>
  );
}
