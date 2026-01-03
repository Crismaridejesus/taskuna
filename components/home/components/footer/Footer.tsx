import { Button } from "@/components/ui/button";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex h-50 w-full flex-col items-center justify-evenly bg-white px-35">
            <div className="flex items-center justify-center gap-4">
                <p className="text-muted-foreground">&copy; {currentYear} Taskuna. All rights reserved.</p>
                <span className="text-bold text-secondary text-4xl">&middot;</span>
                <Link href="#" className="text-secondary">
                    Privacy Policy
                </Link>
                <span className="text-bold text-secondary text-4xl">&middot;</span>
                <Link href="#" className="text-secondary">
                    Terms of Service
                </Link>
            </div>
            <div className="flex gap-2 self-end">
                <Button
                    variant="ghost"
                    className="bg-secondary text-secondary-foreground aspect-square rounded-full p-6 hover:bg-gray-300"
                >
                    <FaFacebookF className="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    className="bg-secondary-foreground text-secondary rounded-full p-6 hover:bg-gray-300"
                >
                    <FaTwitter className="size-6" />
                </Button>
                <Button
                    variant="ghost"
                    className="bg-secondary text-secondary-foreground rounded-full p-6 hover:bg-gray-300"
                >
                    <FaLinkedin className="size-6" />
                </Button>
            </div>
        </div>
    );
}
