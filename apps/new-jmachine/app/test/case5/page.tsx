import { Suspense } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { CardSkeleton } from '@common/ui';
import ClientComp from './ClientComp';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';
import { fetch1Sec } from '../../../services/delayTest/fetch1sec';

export default async function Page() {
  await fetch1Sec();

  const data3 = fetch3Sec();
  const data5 = fetch5Sec();

  return (
    <div>
      <h2>5. client 컴포넌트 + use() : html stream</h2>

      <div className="flex gap-4 h-96 w-96">
        <div className="w-48 h-full border">
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

        <div className="w-48 h-full border">
          <Suspense
            fallback={
              <div>
                <span>⌛ Client 5초 로딩 중...</span>
                <CardSkeleton />
              </div>
            }>
            <ClientComp data={data5} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
