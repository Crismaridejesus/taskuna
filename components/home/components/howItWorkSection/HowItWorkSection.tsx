import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const stepsData = [
    {
        id: 1,
        title: "Create Tasks",
        src: "/create-task.svg",
        alt: "Create Tasks Illustration",
        description: "Add your tasks and set deadlines.",
    },
    {
        id: 2,
        title: "Manage & Assign",
        src: "/manage-asign.svg",
        alt: "Manage and Assign Illustration",
        description: "Assign tasks and track progress.",
    },
    {
        id: 3,
        title: "Stay on Track",
        src: "/track-progress.svg",
        alt: "Stay on Track Illustration",
        description: "View your progress and achieve your goals.",
    },
];

export default function HowItWorkSection() {
    return (
        <div className="px-35 py-20">
            <h2 className="font-inter text-center text-5xl">How Taskuna Works</h2>
            <p className="mt-3 mb-12 text-center text-xl">Get more than in just a few simple steps</p>
            <div className="flex justify-between">
                {stepsData.map((step) => (
                    <Card key={step.id} className="m-4 flex flex-1 items-center p-6">
                        <h3 className="font-inter text-3xl">{step.title}</h3>
                        <Image src={step.src} alt={step.alt} width={400} height={200} className="mx-auto mb-4" />
                        <p className="text-muted-foreground text-xl">{step.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
