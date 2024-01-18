import { Locale, i18n } from "@/i18n.config";

import Footer from "./_components/footer";
// import Navbar from "./_components/navbar";
// import ModalProvider from "@/components/modal-provider";
// import CookiesConsent from "@/components/cookies-consent";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./_components/navbar")) 
const ModalProvider = dynamic(() => import("@/components/modal-provider")) 
const CookiesConsent = dynamic(() => import("@/components/cookies-consent")) 

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
      <ModalProvider />
      <main className="h-full">{children}</main>
      <CookiesConsent />
      <Footer lang={params.lang} />
    </div>
  );
}
