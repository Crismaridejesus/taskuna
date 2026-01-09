import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <>
            <div className="flex h-24 w-full items-center justify-between px-35">
                <div className="flex flex-1 items-center gap-3">
                    <Image src="/taskuna-logo.png" alt="logo" width={48} height={48} />
                    <div className="font-inter text-4xl font-bold text-blue-600">Taskuna</div>
                </div>

                <div className="flex h-full flex-1 items-center justify-between gap-20">
                    <div className="font-400 flex flex-1 items-center justify-between gap-14 text-[20px]">
                        <Link href="#">Feature</Link>
                        <Link href="#">How It Works</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="/login">Login</Link>
                        <Link href="/signup">
                            <Button variant="default" className="bg-secondary rounded-lg px-8 py-7 text-xl">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
