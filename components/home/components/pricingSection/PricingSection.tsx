import { Button } from "@/components/ui/button";
import React from "react";

export default function PricingSection() {
    return (
        <div className="flex flex-col items-center justify-center px-35 py-20">
            <h2 className="font-inter text-center text-5xl">Boost Your Productivity Today!</h2>
            <p className="mt-3 mb-12 text-center text-xl">
                Join Taskuna and take control of your tasks like never before.
            </p>
            <Button className="bg-secondary mx-auto p-8 text-center text-3xl">Get Started Free</Button>
        </div>
    );
}
