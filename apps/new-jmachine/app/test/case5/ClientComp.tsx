'use client';

import { use } from 'react';

export default function ClientComp({ data }: { data: Promise<{ message: string }> }) {
  const resolveData = use(data);

  return <div>ServerChild: {resolveData.message}</div>;
}
