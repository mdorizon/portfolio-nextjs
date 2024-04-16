import { SpeedInsights } from '@vercel/speed-insights/next';
import { poppins } from '@/src/style/_0_utils/fonts';
import '@/src/style/main.scss';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Maxence Dorizon',
  description: '👋 Je suis Maxence Dorizon, étudiant passionné par l\'informatique à Bordeaux, explorant activement le développement et la sécurité numérique. 🚀💻',
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
