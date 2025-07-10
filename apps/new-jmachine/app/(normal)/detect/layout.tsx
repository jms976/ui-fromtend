import { ReactNode } from 'react';
import { Metadata } from 'next';
import { MainContent } from '../../../components/MainContent';

export const metadata: Metadata = {
  title: 'Fetch',
};

export default function DetectLayout({ children }: { children: ReactNode }) {
  return <MainContent contentType="box">{children}</MainContent>;
}
