import { Locale, i18n } from "@/i18n.config";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function LandingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <div className="h-full" lang={params.lang}>
      <Navbar lang={params.lang} />
      <main className="h-full">{children}</main>
      <Footer lang={params.lang} />
    </div>
  );
}
