import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Todo Application',
  description: 'Generated by create next app',
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className='w-full max-w-lg mx-auto p-6 space-y-4'>{children}</div>
        {modal}
      </body>
    </html>
  );
}
