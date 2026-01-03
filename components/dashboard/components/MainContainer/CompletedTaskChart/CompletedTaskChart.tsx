import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
export const taskDoneMonthlyData = [
    { month: "May", seriesA: 40, seriesB: 80 },
    { month: "Jun", seriesA: 120, seriesB: 160 },
    { month: "Jul", seriesA: 230, seriesB: 110 },
    { month: "Aug", seriesA: 310, seriesB: 390 },
    { month: "Sep", seriesA: 190, seriesB: 260 },
    { month: "Oct", seriesA: 220, seriesB: 180 },
    { month: "Nov", seriesA: 30, seriesB: 230 },
    { month: "Dec", seriesA: 60, seriesB: 140 },
    { month: "Jan", seriesA: 40, seriesB: 290 },
    { month: "Feb", seriesA: 80, seriesB: 320 },
    { month: "Mar", seriesA: 160, seriesB: 260 },
    { month: "Apr", seriesA: 110, seriesB: 60 },
];
export default function CompletedTaskChart() {
    return (
        <div className="h-full w-full">
            <Card className="h-full w-full">
                <CardHeader className="flex items-center justify-between">
                    <span className="text-4xl font-bold">Task Done</span>
                    <div>
                        <Button variant="ghost" size="sm" className="mr-2">
                            Daily
                        </Button>
                        <Button variant="ghost" size="sm" className="mr-2">
                            Monthly
                        </Button>
                        <Button variant="ghost" size="sm" className="mr-2">
                            Yearly
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="relative h-full w-full px-0">
                    <ChartContainer config={chartConfig} className="min-h-80px absolute h-full w-full">
                        <AreaChart data={taskDoneMonthlyData} accessibilityLayer className="h-full w-full p-4">
                            <CartesianGrid vertical={false} stroke="gray" />
                            <XAxis dataKey="month" />
                            <YAxis width={2} />
                            <Area dataKey="seriesA" type="natural" dot={true} />
                            <Area dataKey="seriesB" type="natural" dot={true} />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}
