import Navbar from "./_components/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <main className="h-full ">{children}</main>
    </div>
  );
}
