"use client";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { dir } from "i18next";
import { cn } from "@/lib/utils";
import NLink from "../link";

export default function NavList() {
  const { t, i18n } = useTranslation("common");
  return (
    <NavigationMenu dir={dir(i18n.language)} className={cn("hidden md:flex")}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NLink href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("home")}
            </NavigationMenuLink>
          </NLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NLink href="/add-your-restaurant" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("add_your_restaurant")}
            </NavigationMenuLink>
          </NLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NLink href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("contact_us")}
            </NavigationMenuLink>
          </NLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
