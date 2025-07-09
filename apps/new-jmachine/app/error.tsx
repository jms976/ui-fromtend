'use client';

import Link from 'next/link';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h2>문제가 발생했습니다</h2>
        <pre>{error.message}</pre>
        <Link href="/login">홈으로</Link>
      </body>
    </html>
  );
}
