import React from "react";
import { useTranslation } from "react-i18next";
import { FeaturedCarousel } from "./featured-carousel";

export default function Featured() {
  const { t } = useTranslation("common");
  return (
    <section className="section-dark">
      <div className="container">
        <div className="pb-2">
          <h2 className="section-title">{t("featured-title")}</h2>
          <p className="mt-4 text-pretty text-md font-medium text-white">
            {t("featured-desc")}
          </p>
        </div>
        <FeaturedCarousel />
      </div>
    </section>
  );
}
