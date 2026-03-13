import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Altus Cloud | AWS Authorized Reseller & FinOps Practice',
  description: 'Altus Cloud helps engineering and finance teams optimize AWS spend and maximize ROI.',
  keywords: 'AWS reseller, FinOps, cloud cost optimization, AWS consulting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
