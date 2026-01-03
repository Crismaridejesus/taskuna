import React from "react";
import StatsCard from "./StatsCard/StatsCard";
import CompletedTaskChart from "./CompletedTaskChart/CompletedTaskChart";
import ProjectRecords from "./ProjectRecords/ProjectRecords";

export default function MainContainer() {
    return (
        <div className="flex h-full w-full flex-col gap-5 bg-gray-100 px-12 py-8">
            <StatsCard />

            <div className="flex-2">
                <CompletedTaskChart />
            </div>

            <div className="flex max-h-[200px] flex-1 flex-col">
                <span className="py-2 text-2xl">Task</span>
                <ProjectRecords />
            </div>
        </div>
    );
}
