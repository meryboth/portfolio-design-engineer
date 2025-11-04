import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from './components/nav';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Portfolio - Marilyn Botheatoz | AI Engineer',
    template: '',
  },
  description: 'AI Engineer and R&D Lead specializing in machine learning, LLMs, computer vision, and deep learning solutions.',
  openGraph: {
    title: 'Portfolio - Marilyn Botheatoz | AI Engineer',
    description:
      'AI Engineer and R&D Lead with expertise in machine learning, Large Language Models, computer vision, and deep learning. Passionate about building innovative AI solutions that create real-world impact.',
    url: baseUrl,
    siteName: 'portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        inter.variable
      )}
    >
      <head>
        <link rel='icon' href='/coffee-favicon.svg' type='image/svg+xml' />
      </head>
      <body className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
