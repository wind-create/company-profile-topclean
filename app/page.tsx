import type { Metadata } from "next";
import MainLayout from "@/components/templates/MainLayout";
import Hero from "@/components/organisms/Hero";
import ServicesPreview from "@/components/organisms/ServicesPreview";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";
import Testimonials from "@/components/organisms/Testimonials";
import HomeCTA from "@/components/organisms/HomeCTA";
import GoogleMapsSection from "@/components/organisms/GoogleMapsSection";

export const metadata: Metadata = {
  title: "SG Auto Care | Premium Car Wash & Detailing",
  description:
    "SG Auto Care provides professional car wash, detailing, and coating services with premium results.",
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
