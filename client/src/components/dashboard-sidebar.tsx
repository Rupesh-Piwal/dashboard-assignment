"use client";

import { BarChart2, Home, Settings, User, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: User, label: "Profile", href: "/profile" },
];

interface NavigationContentProps {
  pathname: string;
}

const NavigationContent = ({ pathname }: NavigationContentProps) => (
  <div className="h-full bg-white dark:bg-gray-950">
    <div className="flex h-14 items-center border-b px-6">
      <span className="text-lg font-semibold">MyDashboard</span>
    </div>
    <div className="px-2 py-2">
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-2 mb-1 rounded-md transition-colors ${
              pathname === item.href
                ? "bg-gray-100 dark:bg-gray-800"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <item.icon className="mr-3 h-4 w-4" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  </div>
);

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:block w-64 border-r bg-white dark:bg-gray-950">
        <div className="fixed w-64 h-full">
          <NavigationContent pathname={pathname} />
        </div>
      </aside>

      <div className="fixed md:hidden top-0 left-0 right-0 z-20 bg-white dark:bg-gray-950 border-b">
        <div className="flex items-center h-14 px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-4">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access navigation links and dashboard sections
              </SheetDescription>
              <NavigationContent pathname={pathname} />
            </SheetContent>
          </Sheet>
          <span className="text-lg font-semibold">MyDashboard</span>
        </div>
      </div>

      <div className="md:hidden h-14" />
    </div>
  );
}
