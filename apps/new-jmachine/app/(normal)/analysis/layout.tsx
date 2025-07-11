import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MainContent } from '../../../components/MainContent';

export const metadata: Metadata = {
  title: 'analysis',
};

export default function AnalysisLayout({ children }: { children: ReactNode }) {
  return <MainContent contentType="flex">{children}</MainContent>;
}
