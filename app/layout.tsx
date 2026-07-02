import '@/app/globals.css';
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Huiwu Yu',
  description: 'Personal website.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head/>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;
