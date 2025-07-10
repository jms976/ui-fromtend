import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MainContent } from '../../../components/MainContent';

export const metadata: Metadata = {
  title: 'Fetch',
};

export default function systemLayout({ children }: { children: ReactNode }) {
  return <MainContent contentType="flex">{children}</MainContent>;
}
