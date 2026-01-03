import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlarmClock, Clock, MessageCircle, Play } from "lucide-react";
import Link from "next/link";
import React from "react";

const projectRecords = [
    {
        time: "9:00 AM",
        url: "https://example.com/project-idea",
        numberOfComments: 8,
        complete: 40,
    },
    {
        time: "10:00 AM",
        url: "https://example.com/project-idea",
        numberOfComments: 15,
        complete: 75,
    },
];
export default function ProjectRecords() {
    return (
        <div className="flex h-full w-full flex-1 flex-col gap-3">
            {projectRecords.map((record, index) => (
                <div className="flex-1 flex-col justify-between gap-2" key={index}>
                    <Card className="h-full gap-0 p-0 pt-2 pb-2">
                        <CardContent className="flex items-center gap-5">
                            <div className="flex flex-1 items-center gap-4">
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <Play className="h-4 w-4" />
                                </Button>
                                <div>
                                    <span className="text-lg">Start from</span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{record.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-2">
                                <span className="text-lg">Search Inspriration for project</span>
                                <div className="flex items-center gap-10">
                                    <div className="flex items-center gap-3">
                                        <Link href={record.url} className="h-4 w-4 truncate">
                                            {record.url}
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MessageCircle className="h-4 w-4" />
                                        <span className="text-sm">{record.numberOfComments} comments</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-center gap-3">
                                <span className="text-lg">{record.complete}% complete</span>
                                <Progress value={record.complete} className="w-48" />
                            </div>
                            <div className="flex flex-1 items-center justify-center">
                                <Button variant="default">
                                    <AlarmClock className="h-4 w-4" />
                                    Reminder
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}
