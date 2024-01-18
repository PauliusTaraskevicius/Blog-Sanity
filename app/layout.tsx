import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ToastProvider from "@/components/providers/toaster-provider";

const noto_sans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PaulyDev",
  description: "Articles, tips, projects on software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html rel="stylesheet" lang="lt" suppressHydrationWarning>
      <ToastProvider />

      <body className={noto_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="blog-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
