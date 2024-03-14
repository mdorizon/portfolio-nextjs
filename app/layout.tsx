import '@/app/style/global.scss';
import { inter } from '@/app/ui/fonts';

import { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/app/components/header/header';
import Footer from './components/footer/footer';
 
export const metadata: Metadata = {
  title: 'Maxence Dorizon',
  description: 'Portfolio de Maxence Dorizon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <SpeedInsights />
      <body className={`${inter.className} antialiased`}>
        <Header />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
