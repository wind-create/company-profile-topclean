import type { Metadata } from "next";
import MainLayout from "@/components/templates/MainLayout";
import Hero from "@/components/organisms/Hero";
import ServicesPreview from "@/components/organisms/ServicesPreview";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";
import Testimonials from "@/components/organisms/Testimonials";
import HomeCTA from "@/components/organisms/HomeCTA";
import GoogleMapsSection from "@/components/organisms/GoogleMapsSection";

export const metadata: Metadata = {
  title: "TOPCLEAN | Premium Car Wash & Polish",
  description:
    "TOPCLEAN provides professional car wash, and Polish services with premium results.",
};

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <GoogleMapsSection />
      <HomeCTA />
    </MainLayout>
  );
}
