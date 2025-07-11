import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MainContent } from '../../../components/MainContent';

export const metadata: Metadata = {
  title: 'dashboard',
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <MainContent contentType="flex">{children}</MainContent>;
}
