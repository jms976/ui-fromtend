import { Suspense, use } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import { CardSkeleton } from '@common/ui';
import ClientComp from './ClientComp';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default function Page() {
  // export default async function Page() {
  // const data3 = await fetch3Sec();
  // const data5 = await fetch5Sec();
  const data3 = use(fetch3Sec());
  const data5 = use(fetch5Sec());

  return (
    <div>
      <h2>6. client 컴포넌트 + 밖 use: no Stream(서스팬스 안먹음)</h2>

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
            <ClientComp data={data5} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
