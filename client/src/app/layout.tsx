import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard-TextifyAI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <SidebarProvider>
          <div className="flex h-screen w-screen">
            <DashboardSidebar />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
