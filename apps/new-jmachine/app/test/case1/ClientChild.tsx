'use client';

import { useEffect, useState } from 'react';
import { fetch5Sec } from '../../../services/delayTest/fetch5sec';

export default function ClientChild5() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetch = async () => {
      const fData = await fetch5Sec();

      setData(fData);
    };

    fetch();
  }, []);

  return (
    <div>
      <h2>slow query</h2>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
