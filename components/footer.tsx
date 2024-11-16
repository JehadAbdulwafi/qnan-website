import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LangSwitcher from "./langSwitcher";

import i18nextConfig from "../next-i18next.config";
import Image from "next/image";
import googlePlayBadge from "@/public/images/stores/google-play-badge.svg";
import appleStoreBadge from "@/public/images/stores/app-store-badge.svg";
import { Facebook, Instagram, Twitter } from "lucide-react";
import NLink from "./link";
import Link from "next/link";

const data = [
  {
    title: "about",
    links: [
      {
        title: "add_your_restaurant",
        href: "/add-your-restaurant",
      }, {
        title: "contact_us",
        href: "/contact-us",
      },
      {
        title: "faq",
        href: "/faq",
      }
    ],
  },
  {
    title: "legal",
    links: [
      {
        title: "terms_of_service",
        href: "/terms-of-service",
      }, {
        title: "privacy_policy",
        href: "/privacy-policy",
      }
    ],
  },
]

export const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col z-50">
      {/* Upper Section with Logo and Description */}
      <div className="bg-[#0b1121] z-50 py-10">
        <div className="flex flex-col container z-50 md:flex-row items-start gap-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-4 flex-1 text-white">
            <div className="flex flex-1 flex-col gap-3">
              <h5 className="text-xl pb-4 text-white">Download Qnan</h5>
              <Link href={"https://play.google.com/store/apps/details?id=com.qnan.businessapp"} passHref target={"_blank"}>
                <Image
                  src={googlePlayBadge}
                  alt="google play badge"
                  width={140}
                />
              </Link>
              <Image
                src={appleStoreBadge}
                alt="apple store badge"
                width={140}
              />
            </div>
            {data.map((item) => (
              <div key={item.title} className="col-span-1">
                <h5 className="text-xl pb-4">{t(item.title)}</h5>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link) => (
                    <NLink key={link.href} href={link.href}>
                      <li className="text-sm" key={link.title}>
                        {t(link.title)}
                      </li>
                    </NLink>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-1">
              <h3 className="text-xl pb-4">{t("follow_us")}</h3>
              <div className="flex flex-row gap-2">
                <Facebook size={24} className="fill-white stroke-0" />
                <Instagram size={24} />
                <Twitter size={24} className="fill-white stroke-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lower */}
      <div className="bg-[#060913]">
        <div className="flex flex-row container items-center py-2 justify-between flex-1 text-white">
          <p className="text-sm">{t("copyright", { year })}</p>
          <p>
            {i18nextConfig.i18n.locales.map((locale) => {
              if (locale === currentLocale) return null;
              return <LangSwitcher locale={locale} key={locale} />;
            })}
          </p>
        </div>
      </div>
    </footer >
  );
};
