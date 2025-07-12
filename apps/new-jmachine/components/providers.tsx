'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DndContext } from '@dnd-kit/core';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '../lib/query/queryClient';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <DndContext>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            enableColorScheme>
            {children}
          </NextThemesProvider>
        </DndContext>
      </SessionProvider>
    </QueryClientProvider>
  );
}
