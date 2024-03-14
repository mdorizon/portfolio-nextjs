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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css" />
      <body className={`${inter.className} antialiased`}>
        <Header />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
