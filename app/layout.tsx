import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'NextJS Dashboard',
  },
  description: 'Wakusay NextJS Training DashBoard with login.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
