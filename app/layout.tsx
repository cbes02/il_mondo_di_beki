import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://il-mondo-di-rebi.greentoast4.chatgpt.site'),
  title: 'Il mondo di Rebi',
  description: 'La perla quotidiana di Moka: saggezza discutibile, ogni giorno.',
  openGraph: {
    title: 'Il mondo di Rebi',
    description: 'La perla quotidiana di Moka: saggezza discutibile, ogni giorno.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Il mondo di Rebi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Il mondo di Rebi',
    description: 'La perla quotidiana di Moka: saggezza discutibile, ogni giorno.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
