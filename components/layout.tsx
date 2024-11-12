import { useTranslation } from 'react-i18next'
import { Footer } from './footer'
import localFont from "next/font/local";
import { Header } from './header'

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
  const { t } = useTranslation(['common'])

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header heading={t('h1')} title={t('title')} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}




