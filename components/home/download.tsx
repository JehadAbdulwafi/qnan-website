import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

import googlePlayBadge from "../../public/images/stores/google-play-badge.svg";
import appleStoreBadge from "../../public/images/stores/app-store-badge.svg";
import { cn } from "@/lib/utils";

export default function Download() {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";

  return (
    <section>
      <div className="container">
        <div className="flex flex-row bg-white">
          <div className="flex flex-1 flex-col gap-3">
            <div className="pb-2">
              <h2 className="section-title">{t("app-not-downloaded")}</h2>
              <p className="mt-4 text-pretty text-md font-medium">
                {t("app-not-downloaded")}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src={googlePlayBadge}
                alt="google play badge"
                width={140}
              />
              <Image
                src={appleStoreBadge}
                alt="apple store badge"
                width={140}
              />
            </div>
          </div>
          <div className="min-h-[200px] flex-1 relative hidden md:block">
            <Image
              src={require("../../public/images/iphone-1.webp")}
              alt="iphone"
              width={800}
              height={800}
              className={cn("absolute -top-10 z-[0] left-0 w-full h-auto", {
                "transform scale-x-[-1]": isEnglish,
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
