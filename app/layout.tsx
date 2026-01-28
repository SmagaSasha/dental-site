// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css'; 

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Стоматологія DentalCare',
  description: 'Запис до стоматолога онлайн',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="uk">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}