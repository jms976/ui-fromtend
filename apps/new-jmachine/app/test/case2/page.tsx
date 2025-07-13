import { Suspense, use } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import ServerChild from './ServerChild';
import { Skeleton } from '@common/ui';
// import { fetch5Sec } from '../../../services/delayTest/fetch5sec';
// import Data3 from './Data3';
// import Data5 from './Data5';

export default function Page() {
  const data = use(fetch3Sec());
  // const data5 = use(fetch5Sec());

  return (
    <div>
      <h2>2. use() + Suspense</h2>
      {/* <Suspense fallback="3초">
        <Data3 />
      </Suspense>

      <Suspense fallback="5초">
        <Data5 />
      </Suspense> */}

      <pre>{JSON.stringify(data)}</pre>
      {/* <ServerChild /> */}
      <Suspense
        fallback={
          <div>
            <span>⌛ ServerChild 로딩 중...</span>
            <Skeleton />
          </div>
        }>
        <ServerChild />
      </Suspense>
    </div>
  );
}
