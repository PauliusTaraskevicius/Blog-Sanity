import Footer from "./_components/footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./_components/navbar"));
const ModalProvider = dynamic(() => import("@/components/modal-provider"));
const CookiesConsent = dynamic(() => import("@/components/cookies-consent"));

export default function LandingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <div className="h-full">
      <Navbar lang={params.lang} />
      <ModalProvider />
      <main className="h-full">{children}</main>
      <CookiesConsent />
      <Footer />
    </div>
  );
}
