"use client";

import React from "react";
import MainContainer from "@/components/dashboard/components/MainContainer/MainContainer";
import RightSideBar from "@/components/dashboard/components/RightSidebar/RightSideBar";

function DashboardPage() {
    return (
        <>
            <div className="grid-rows-auto grid h-full w-full grid-cols-[1fr_400px]">
                <main className="col-span-1 row-span-1">
                    <MainContainer />
                </main>

                <aside className="col-span-1 col-start-2">
                    <RightSideBar />
                </aside>
            </div>
        </>
    );
}

export default DashboardPage;
