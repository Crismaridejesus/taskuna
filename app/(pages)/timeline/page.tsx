import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function timelinePage() {
    return (
        <div className="bg-muted h-full w-full p-10">
            <div className="flex items-center justify-between p-2">
                <div className="flex flex-1 items-center justify-between">
                    <h2 className="font-inter text-2xl">Timeline</h2>
                    <div className="flex gap-2">
                        <Badge className="bg-secondary p-2">Tuesday</Badge>
                        <Badge variant="outline" className="border-muted-foreground text-muted-foreground px-2 py-1">
                            <ChevronLeft /> June 20 2026 <ChevronRight />
                        </Badge>
                    </div>
                </div>

                <div className="flex flex-2 items-center justify-end gap-5 pr-12">
                    <Button className="bg-secondary px-6">+Invite</Button>
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
}
