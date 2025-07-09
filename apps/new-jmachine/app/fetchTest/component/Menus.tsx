'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { fetchClientApi } from '../../../lib/fetch/clientApi';

type MenuRequestParms = {
  menuDvn: string;
};

export default function Menus() {
  const [data, setData] = useState('');

  const { data: session } = useSession();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchClientApi<Record<string, unknown>, MenuRequestParms>('/get/menus', {
        menuDvn: 'JM',
      });

      setData(JSON.stringify(response.data, null, 2));
    }

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <span>{session?.user?.userNm}</span>
      <button
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
        로그아웃
      </button>
      <h2 className="text-lg font-bold">클라이언트 패치 결과</h2>
      <pre className="text-sm p-2 mt-2">{data ? data : '불러오는 중...'}</pre>
    </div>
  );
}
