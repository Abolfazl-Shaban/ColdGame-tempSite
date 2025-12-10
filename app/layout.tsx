import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  metadataBase: new URL('https://coldgame.ir'),
  title: {
    default: 'کولدگیم - برترین سرور ماینکرفت ایران',
    template: '%s | کولدگیم',
  },
  description:
    'به سرور ماینکرفت کولدگیم خوش آمدید! بهترین تجربه ماینکرفت را با دوستان خود در سرور ایرانی ColdGame تجربه کنید. آدرس سرور: Play.ColdGame.ir',
  keywords: [
    'ماینکرفت',
    'سرور ماینکرفت',
    'کولدگیم',
    'کولد گیم',
    'ColdGame',
    'Cold Game',
    'Minecraft Server',
    'بازی آنلاین',
    'سرور ایرانی ماینکرفت',
    'ماینکرفت رایگان',
    'ماینکرفت مولتی‌پلیر',
  ],
  authors: [{ name: 'ColdGame Team', url: 'https://coldgame.ir' }],
  creator: 'ColdGame',
  publisher: 'ColdGame',
  category: 'Gaming',
  applicationName: 'ColdGame Minecraft Server',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://coldgame.ir/',
  },
  openGraph: {
    title: 'کولدگیم - سرور ماینکرفت | ColdGame Minecraft Server',
    description:
      'به سرور ماینکرفت کولدگیم خوش آمدید! بهترین تجربه بازی ماینکرفت را با دوستان خود تجربه کنید.',
    url: 'https://coldgame.ir',
    siteName: 'ColdGame',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://coldgame.ir/logo.png',
        width: 512,
        height: 512,
        alt: 'کولدگیم - سرور ماینکرفت',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'کولدگیم - سرور ماینکرفت | ColdGame Minecraft Server',
    description:
      'به سرور ماینکرفت کولدگیم خوش آمدید! بهترین تجربه بازی ماینکرفت را با دوستان خود تجربه کنید.',
    images: ['https://coldgame.ir/logo.png'],
    site: '@ColdGame',
    creator: '@ColdGame',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  themeColor: '#00fbfb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f0f" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-darker-gray text-white font-vazir antialiased">
        {children}
      </body>
    </html>
  )
}