import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YingzhouJ",
  description: "The connected workspace wher better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head /> */}
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="jotion-theme"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
