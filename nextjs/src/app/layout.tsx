// nextjs/src/app/layout.tsx
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { MyFirebaseProvider } from "@/components/firebase-providers";
import { Toaster } from "@/components/ui/toaster";
import NavBarClient from "@/components/header";
import { Footer } from "@/components/footer";
import { ReactNode } from "react";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venefish | Vercel Next.JS Firebase Shadcn/ui Tailwind Boilerplate",
  description:
    "Venefish is a Vercel Next.JS Firebase Shadcn/ui Tailwind Boilerplate project to help you get started with your next project.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <MyFirebaseProvider>
          <div className="flex flex-col min-h-screen animate-in fade-in">
            <NavBarClient />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </MyFirebaseProvider>
      </body>
    </html>
  );
}
