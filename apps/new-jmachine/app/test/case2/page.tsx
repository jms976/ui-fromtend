import { Suspense, use } from 'react';
import { fetch3Sec } from '../../../services/delayTest/fetch3sec';
import ServerChild from './ServerChild';
import { Skeleton } from '@common/ui';

export default function Page() {
  const data = use(fetch3Sec());

  return (
    <div>
      <h2>2. use() + Suspense</h2>
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
    </div>
  );
}
