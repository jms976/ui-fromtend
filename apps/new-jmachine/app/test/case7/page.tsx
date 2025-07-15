import { Suspense } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { CardSkeleton } from '@common/ui';
import ClientComp from './ClientComp';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';
import { fetch1Sec } from '../../../services/delayTest/fetch1sec';
import ClientComp5 from './ClientComp5';

export default async function Page() {
  await fetch1Sec();

  const data3 = fetch3Sec();
  const data5 = fetch5Sec();

  return (
    <div>
      <h2>7. tanstackQuery + use() : html stream</h2>

      <div className="flex h-96 w-full gap-4">
        <div className="w-1/2 h-full border">
          <Suspense
            fallback={
              <div>
                <span>⌛ Client 3초 로딩 중...</span>
                <CardSkeleton />
              </div>
            }>
            <ClientComp data={data3} />
          </Suspense>
        </div>

        <div className="w-1/2 h-full border">
          <Suspense
            fallback={
              <div>
                <span>⌛ Client 5초 로딩 중...</span>
                <CardSkeleton />
              </div>
            }>
            <ClientComp5 data={data5} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
