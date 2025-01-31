"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HomeIcon, BarChart2, Settings, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const menuItems = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Analytics",
    icon: BarChart2,
    href: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Profile",
    icon: UserCircle,
    href: "/profile",
  },
];

interface NavMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavMenu({ className, ...props }: NavMenuProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            Menu
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href &&
                      "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
