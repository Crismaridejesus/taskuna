import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import FeatureSection from "./components/featuresSection/FeatureSection";
import HowItWorkSection from "./components/howItWorkSection/HowItWorkSection";
import PricingSection from "./components/pricingSection/PricingSection";
import Footer from "./components/footer/Footer";

export default function HomePage() {
    return (
        <div className="flex h-full flex-col gap-2 bg-blue-50">
            <Header />
            <HeroSection />
            <FeatureSection />
            <HowItWorkSection />
            <PricingSection />
            <Footer />
        </div>
    );
}
