import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { FileText, FolderCheck, Star } from "lucide-react";
import React from "react";
import { Line, LineChart } from "recharts";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

const cardStatus = [
    {
        header: {
            icon: Star,
            title: "Task Completed",
            value: "08",
        },
        mainContent: {
            chartData: [{ value: 2 }, { value: 3 }, { value: 5 }, { value: 6 }, { value: 8 }],
            status: "10+ more from last week",
            strokeColor: "hsl(var(--primary))",
        },
    },
    {
        header: {
            icon: FileText,
            title: "New Task",
            value: "10",
        },
        mainContent: {
            chartData: [{ value: 3 }, { value: 5 }, { value: 4 }, { value: 7 }, { value: 10 }],
            status: "10+ more from last week",
            strokeColor: "#3b82f6",
        },
    },
    {
        header: {
            icon: FolderCheck,
            title: "Project Done",
            value: "10",
        },
        mainContent: {
            chartData: [{ value: 3 }, { value: 2 }, { value: 9 }, { value: 7 }, { value: 2 }],
            status: "08+ more from last week",
            strokeColor: "#ef4444",
        },
    },
];
export default function StatsCard() {
    return (
        <div className="flex w-full flex-1 justify-between gap-6">
            {cardStatus.map((card, index) => (
                <Card className="h-full max-h-[230px] flex-1 gap-0 py-2" key={index}>
                    <CardHeader className="h-full flex-1 grid-rows-1 gap-0">
                        <div className="flex h-full items-center justify-between text-2xl">
                            <div className="flex items-center gap-6">
                                <div>
                                    <card.header.icon className="h-7 w-7" />
                                </div>
                                <div>{card.header.title}</div>
                            </div>
                            <span className="text-4xl font-bold">{card.header.value}</span>
                        </div>
                    </CardHeader>
                    <Separator />
                    <CardContent className="flex flex-3">
                        <div className="w-50px flex-1">
                            <ChartContainer config={chartConfig} className="min-h-80px flex h-full w-40 items-center">
                                <LineChart data={card.mainContent.chartData} className="p-3">
                                    {/* Shadow definition */}
                                    <defs>
                                        <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feDropShadow
                                                dx="0"
                                                dy="10"
                                                stdDeviation="4"
                                                floodColor="hsl(var(--secondary))"
                                                floodOpacity="0.4"
                                            />
                                        </filter>
                                    </defs>
                                    <Line
                                        filter="url(#lineShadow)"
                                        strokeWidth={3}
                                        type="natural"
                                        dot={false}
                                        dataKey="value"
                                        fill={"var(--color-desktop)"}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                        <div className="flex flex-1 items-center">{card.mainContent.status}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
