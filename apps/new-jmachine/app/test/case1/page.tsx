import { Suspense } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import ServerChild from './ServerChild';
import { Skeleton } from '@common/ui';
import ClientChild from './ClientChild';

// import Data3 from './Data3';
// import Data5 from './Data5';

export default async function Page() {
  const data = await fetch3Sec();

  return (
    <div className="flex flex-col gap-4">
      <h2>1. 서버 렌더 + 스트리밍</h2>
      {/* <Suspense fallback="3초">
        <Data3 />
      </Suspense>

      <Suspense fallback="5초">
        <Data5 />
      </Suspense> */}

      {/* <ServerChild /> */}

      <pre>{JSON.stringify(data)}</pre>
      <Suspense
        fallback={
          <div>
            <span>⌛ ServerChild 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ServerChild />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <span>⌛ ClientChild 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ClientChild />
      </Suspense>
    </div>
  );
}
