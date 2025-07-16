'use client';

import ThemeToggle from './ThemeToggle';
import { signOut, useSession } from 'next-auth/react';
import { SidebarTrigger, Skeleton, Tooltip } from '@common/ui';
import { UserRoundXIcon } from 'lucide-react';
import { cn } from '@common/ui/lib/utils';

export function Header() {
  const { data, status } = useSession();
  const { userNm, loginDt } = data?.user ?? { userNm: '-', loginDt: '-' };

  return (
    <header
      className={cn(
        'sticky top-0 z-1 flex h-12 shrink-0 items-center px-4',
        'bg-juiBackground-input light:bg-juiBackground-paper',
      )}>
      <SidebarTrigger variant="primary" className="aspect-square p-0 rounded-full" />
      <div className="flex gap-4 ml-auto h-full items-center px-8">
        {status === 'loading' ? (
          <div className="flex flex-col items-end gap-1">
            <Skeleton className="w-24 h-2" />
            <Skeleton className="w-40 h-2" />
          </div>
        ) : (
          <div className="flex flex-col items-end gap-1">
            <span>{userNm}님 환영합니다.</span>
            <span className="text-juiText-blue font-bold">Last Access {loginDt}</span>
          </div>
        )}

        <Tooltip contents={'Logout'}>
          <div className="cursor-pointer hover:text-juiText-secondary">
            <UserRoundXIcon onClick={() => signOut({ callbackUrl: '/login' })} />
          </div>
        </Tooltip>
        <ThemeToggle />
      </div>
    </header>
  );
}
