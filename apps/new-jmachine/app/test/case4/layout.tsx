import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MainContent } from '../../../components/MainContent';

export const metadata: Metadata = {
  title: 'case1',
};

export default function AnalysisLayout({ children }: { children: ReactNode }) {
  return <MainContent contentType="inBox">{children}</MainContent>;
}
