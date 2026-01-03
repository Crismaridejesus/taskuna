import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "lucide-react";

import React from "react";
import HeroCarousel from "./heroCarousel/HeroCarousel";

export default function HeroSection() {
    return (
        <div className="flex bg-blue-50 px-35">
            <div className="flex-2">
                <h1 className="font-inter mt-20 flex w-full flex-col text-6xl">
                    Organize Your Work,<span className="font-inter">Achieve Your Goals</span>
                </h1>
                <p className="my-10 flex flex-col text-3xl text-violet-900">
                    The ultimate task management tool <span>to boost your productivity.</span>
                </p>
                <div className="flex w-full gap-4 p-2 px-0">
                    <Button className="bg-secondary p-8 text-center text-xl">Get Started Free</Button>
                    <Button
                        variant="outline"
                        className="border-secondary text-secondary border-2 py-[30px] text-center text-xl has-[>svg]:px-8"
                    >
                        <PlayCircleIcon className="text-secondary size-8" />
                        Watch Demo
                    </Button>
                </div>
            </div>
            <div className="flex min-w-200 flex-3 shrink-0 items-center justify-center p-10">
                <HeroCarousel />
            </div>
        </div>
    );
}
