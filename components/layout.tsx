import { useTranslation } from 'react-i18next'
import { Footer } from './footer'
import localFont from "next/font/local";
import { dir } from 'i18next';
import Header from './header';
import { useEffect, useState } from 'react';

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
  const { i18n } = useTranslation(['common'])
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div dir={dir(i18n.language)} className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}




