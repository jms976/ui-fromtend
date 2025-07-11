import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MainContent } from '../../../components/MainContent';

export const metadata: Metadata = {
  title: 'Response',
};

export default function ResponseLayout({ children }: { children: ReactNode }) {
  return <MainContent contentType="flex">{children}</MainContent>;
}
