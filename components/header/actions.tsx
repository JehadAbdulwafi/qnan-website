import React from 'react'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import i18nextConfig from "@/next-i18next.config";
import LangSwitcher from '../langSwitcher';
import Link from 'next/link';

export default function Actions() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  return (
    <div className="hidden sm:flex flex-row items-center gap-1">
      <Link href={"https://play.google.com/store/apps/details?id=com.qnan.businessapp"} passHref target={"_blank"}>
        <Button variant={"main"}>
          {t("download_app")}
        </Button>
      </Link>
      {i18nextConfig.i18n.locales.map((locale) => {
        if (locale === currentLocale) return null;
        return <LangSwitcher locale={locale} key={locale} />;
      })}
    </div>
  )
}

