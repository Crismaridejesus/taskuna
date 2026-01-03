import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Car } from "lucide-react";

const heroCarouselData = [
    {
        id: 1,
        src: "/dashboard.png",
        alt: "Dashboard Image",
        width: 800,
        height: 400,
        caption: "Dashboard Overview",
    },
    {
        id: 2,
        src: "/timeline.png",
        alt: "Timeline Image",
        width: 800,
        height: 400,
        caption: "Timeline Overview",
    },
    {
        id: 3,
        src: "/task.png",
        alt: "Task Image",
        width: 800,
        height: 400,
        caption: "Task Overview",
    },
    {
        id: 4,
        src: "/files.png",
        alt: "Files Image",
        width: 800,
        height: 400,
        caption: "Files Overview",
    },
    {
        id: 5,
        src: "/settings.png",
        alt: "Settings Image",
        width: 800,
        height: 400,
        caption: "Settings Overview",
    },
    {
        id: 6,
        src: "/messages.png",
        alt: "Messages Image",
        width: 800,
        height: 400,
        caption: "Messages Overview",
    },
];

export default function HeroCarousel() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Carousel
                opts={{
                    align: "start",
                }}
                orientation="horizontal"
                className="w-220"
            >
                <CarouselContent className="-mt-1 h-[600px]">
                    {heroCarouselData.map((slider, index) => (
                        <CarouselItem key={index} className="pt-1 lg:basis-1/1">
                            <div className="flex w-full flex-col items-center justify-center p-1">
                                <Image
                                    src={slider.src}
                                    alt={slider.alt}
                                    width={slider.width}
                                    height={slider.height}
                                    className="rounded-md"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="h-15 w-15" />
                <CarouselNext className="h-15 w-15" />
            </Carousel>
        </div>
    );
}
