import MainPage from "@/components/MainPage";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://coldgame.ir'),
  title: 'کولدگیم - سرور ماینکرفت ایرانی',
  description:
    'به سرور ماینکرفت کولدگیم خوش آمدید! در بهترین سرور ایرانی ماینکرفت، مودهای بقا، اسکای‌بلاک و مینی‌گیم را با دوستان خود تجربه کنید. آدرس: Play.ColdGame.ir',
  keywords: [
    'ماینکرفت',
    'سرور ماینکرفت',
    'کولدگیم',
    'کولد گیم',
    'ColdGame',
    'Cold Game',
    'ماینکرفت ایرانی',
    'ماینکرفت آنلاین',
    'Minecraft Server',
    'Skyblock',
    'Survival',
  ],
  authors: [{ name: 'ColdGame Team', url: 'https://coldgame.ir' }],
  creator: 'ColdGame',
  publisher: 'ColdGame',
  alternates: {
    canonical: 'https://coldgame.ir/',
  },
  openGraph: {
    title: 'کولدگیم - سرور ماینکرفت ایرانی | ColdGame Minecraft Server',
    description:
      'به سرور ماینکرفت کولدگیم خوش آمدید! بهترین سرور ایرانی با مودهای بقا، اسکای‌بلاک و ایونت‌های جذاب.',
    url: 'https://coldgame.ir',
    siteName: 'ColdGame',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://coldgame.ir/logo.png',
        width: 512,
        height: 512,
        alt: 'کولدگیم - سرور ماینکرفت ایرانی',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'کولدگیم - سرور ماینکرفت ایرانی | ColdGame Minecraft Server',
    description:
      'به سرور ماینکرفت کولدگیم خوش آمدید! بهترین تجربه ماینکرفت را با دوستان خود در ColdGame تجربه کنید.',
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
  themeColor: '#00fbfb', //
}

export default function HomePage() {
  return (<MainPage /> )
}