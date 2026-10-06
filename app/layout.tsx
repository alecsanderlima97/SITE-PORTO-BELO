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
  metadataBase: new URL('https://portobelofretes.com.br'),
  title: 'Porto Belo Transportes | Fretes locais e interestaduais',
  description:
    'Fretes comerciais e residenciais com base em Sorocaba/SP. Porto Belo Transportes atende rotas locais, regionais e interestaduais sob consulta.',
  keywords: [
    'frete até 5 toneladas',
    'transporte de cargas',
    'fretes em Sorocaba',
    'fretes no interior de São Paulo',
    'frete para outros estados',
    'frete comercial e residencial',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portobelofretes.com.br/',
    siteName: 'Porto Belo Transportes',
    title: 'Porto Belo Transportes | Fretes locais e interestaduais',
    description:
      'Transporte de cargas de até 5 toneladas, com atendimento local, regional e interestadual sob consulta.',
    images: ['/frota-industrial-adesivada.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'cTntCPGfK4x_qQNNJrxgtIjooMXMK4vA-v8bB8j4JsE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
