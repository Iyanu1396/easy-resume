"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@/_ui/Providers';
import './_styles/globals.css';

import { Montserrat, Inter } from 'next/font/google';


// export const metadata = {
//   title: 'InstantResume',
//   description: 'Craft professional-looking resumes without hassle',
// };

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize QueryClient inside the component
  const queryClient =  new QueryClient()

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <QueryClientProvider client={queryClient}>
        
            {children}
          <ToastProvider/>
        </QueryClientProvider>
      </body>
    </html>
  );
}
