import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Profile() {
    return (
        <div className="flex h-10 w-10 items-center justify-center">
            <Avatar className="h-full w-full">
                <AvatarImage src="/maribeth.jpg" />
                <AvatarFallback>N</AvatarFallback>
            </Avatar>
        </div>
    );
}
