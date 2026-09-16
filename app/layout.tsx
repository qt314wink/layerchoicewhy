import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LayerChoiceWhy — A framework decision, in one line.',
  description: 'An evidence-linked framework decision ledger.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
