import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import StickyWhatsApp from "../organisms/StickyWhatsApp";
import ScrollToTopButton from "../molecules/ScrollToTopButton";

export default function MainLayout({
  children,
  waPage = "home",
}: {
  children: React.ReactNode;
  waPage?: "home" | "services" | "contact";
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* Floating Actions */}
      <ScrollToTopButton />
      <StickyWhatsApp page="home" />
    </>
  );
}