import React from "react";
import { BellIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Notification() {
    return (
        <div className="relative flex h-10 w-10 items-center justify-center">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <Badge className="absolute top-1 right-1 z-10 h-4 w-4 px-3 text-xs">99+</Badge>
        </div>
    );
}
