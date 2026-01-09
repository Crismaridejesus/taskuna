import { LayoutGrid, BookOpen, Settings, Send, FolderPlus, AlignCenterHorizontalIcon } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutGrid,
    },
    {
        title: "Timeline",
        url: "/timeline",
        icon: AlignCenterHorizontalIcon,
    },
    {
        title: "Tasks",
        url: "#",
        icon: BookOpen,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Messages",
        url: "#",
        icon: Send,
    },
    {
        title: "Files",
        url: "#",
        icon: FolderPlus,
    },
];

export default function SidebarLeft() {
    return (
        <Sidebar collapsible="icon" side="left">
            <SidebarHeader className="flex h-17.5 justify-center pl-4 group-data-[collapsible=icon]:pl-0">
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-transform duration-200 ease-linear group-data-[collapsible=icon]:translate-x-[calc(50%-20px)]"
                >
                    <Image src="/taskuna-logo.png" alt="Logo" width={40} height={40} className="flex-none" />
                    <span className="text-2xl font-bold whitespace-nowrap text-blue-600 group-data-[collapsible=icon]:hidden">
                        Taskuna
                    </span>
                </Link>
            </SidebarHeader>
            <SidebarSeparator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex flex-col gap-10">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="flex items-center justify-center">
                                    <SidebarMenuButton
                                        asChild
                                        className="focus:bg-secondary group focus:text-secondary-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0"
                                    >
                                        <a href={item.url} className="flex items-center">
                                            <item.icon />

                                            <span className="group-focus:text-secondary-foreground pl-2 text-lg text-gray-700 group-data-[collapsible=icon]:pl-0">
                                                {item.title}
                                            </span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
