import React from 'react'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next';

export default function Actions() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Button variant={"main"}>{t("become_a_partner")}</Button>
    </div>
  )
}

