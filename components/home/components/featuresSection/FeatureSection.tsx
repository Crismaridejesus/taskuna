import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const featureCardData = [
    {
        src: "/icons/todolist-icon.png",
        alt: "To-do List Icon",
        title: "Easy Task Management",
        description: "Organize and prioritize your tasks with ease.",
    },
    {
        src: "/icons/team-collaboration-icon.svg",
        alt: "Team Collaboration Icon",
        title: "Collaborate with Your Team",
        description: "Work together seamlessly with your team.",
    },
    {
        src: "/icons/progress-tracker-icon.svg",
        alt: "Progress Tracker Icon",
        title: "Track Your Progress",
        description: "Monitor your progress and hit your deadlines.",
    },
];

export default function FeatureSection() {
    return (
        <div className="flex justify-between bg-white px-35">
            {featureCardData.map((card, index) => (
                <Card
                    key={index}
                    className="m-4 flex flex-1 flex-col items-center gap-4 border-0 p-6 text-center text-xl shadow-none outline-0"
                >
                    <Image src={card.src} alt={card.alt} width={100} height={100} />
                    <h3 className="mt-4 text-3xl font-semibold">{card.title}</h3>
                    <p className="text-muted-foreground mb-2 w-65">{card.description}</p>
                </Card>
            ))}
        </div>
    );
}
