import { SpeedInsights } from '@vercel/speed-insights/next';
import { poppins } from '@/src/style/_0_utils/fonts';
import '@/src/style/main.scss';
import { Metadata } from 'next';
 
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
    <html lang="fr" className={`${poppins.className} antialiased`}>
      <SpeedInsights />
      {children}
    </html>
  );
}
