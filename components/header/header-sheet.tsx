"use client";
import Link from "next/link"
import {
  BellDot,
  Crown,
  Home,
  LayoutDashboard,
  Package2,
  PanelLeft,
  ShoppingCart,
  StoreIcon,
  Ticket,
  Truck,
  Tv2,
  Users2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export const sidebar_items = [
  {
    header_label: "Dashboard",
    items: [
      {
        label: "Overview",
        href: "/dashboard",
        icon: (
          <Home className="h-5 w-5" />
        )
      },

      {
        label: "Orders",
        href: "/dashboard/orders",
        icon: (
          <ShoppingCart className="h-5 w-5" />
        )
      },
      {
        label: "Restaurants",
        href: "/dashboard/restaurants",
        icon: (
          <StoreIcon className="h-5 w-5" />
        )
      },
      {
        label: "Deliveries",
        href: "/dashboard/deliveries",
        icon: (
          <Truck className="h-5 w-5" />
        )
      },
      {
        label: "Users",
        href: "/dashboard/users",
        icon: (
          <Users2 className="h-5 w-5" />
        )
      },
      {
        label: "Messaging",
        href: "/dashboard/notifications",
        icon: (
          <BellDot className="h-5 w-5" />
        )
      },
      {
        label: "Coupons",
        href: "/dashboard/coupons",
        icon: (
          <Ticket className="h-5 w-5" />
        )
      },
      {
        label: "Banners",
        href: "/dashboard/banners",
        icon: (
          <Tv2 className="h-5 w-5" />
        )
      },
      {
        label: "Featured rows",
        href: "/dashboard/featured",
        icon: (
          <Crown className="h-5 w-5" />
        )
      },
      {
        label: "Categories",
        href: "/dashboard/categories",
        icon: (
          <LayoutDashboard className="h-5 w-5" />
        )
      },
    ],
  }
]



export default function HeaderSheet() {
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
          <Link
            key={"1"}
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {sidebar_items[0].items.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
