import { useTranslation } from 'react-i18next'
import { Footer } from './footer'
import localFont from "next/font/local";
import { Header } from './header'
import { dir } from 'i18next';

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const { t, i18n } = useTranslation(['common'])

  return (
    <div dir={dir(i18n.language)} className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header heading={t('h1')} title={t('title')} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}




