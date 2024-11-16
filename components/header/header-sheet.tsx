"use client";
import {
  PanelLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import NLink from "../link";
import { useTranslation } from "react-i18next";
import LogoSvg from "@/public/logo-96x96-skyblue.svg";
import Image from "next/image";

export const sidebar_items = [
  {
    label: "home",
    href: "/",
  },

  {
    label: "add_your_restaurant",
    href: "/add-your-restaurant",
  },
  {
    label: "contact_us",
    href: "/contact-us",
  },
  {
    label: "faq",
    href: "/faq",
  },
  {
    label: "terms_of_service",
    href: "/terms-of-service",
  },
  {
    label: "privacy_policy",
    href: "/privacy-policy",
  },
]



export default function HeaderSheet() {
  const { t } = useTranslation("common");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <NLink
            key={"1"}
            href="/"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:text-base"
          >
            <div className="flex">
              <Image
                priority
                src={LogoSvg}
                width={32}
                height={32}
                alt="Qnan Icon"
                className=""
              />
            </div>

          </NLink>
          {sidebar_items.map((item) => {

            return (
              <NLink
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                {t(item.label)}
              </NLink>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
