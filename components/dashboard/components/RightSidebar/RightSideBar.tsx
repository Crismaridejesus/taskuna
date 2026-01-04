"use client";
import { LayoutGrid, Calendar1Icon, MoreVertical, PhoneCallIcon, XIcon, Plus, ChevronRightIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarMenuButton,
    SidebarFooter,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export const messages = [
    {
        id: 1,
        name: "Cris Morich l;fkdl;ksd;lfksd;fkfjglksdjgrigjrklgjdklf dfklgjfdlkgjrkl lkgjklbflkb",
        message: "Hi Angelina! How are you?",
        avatar: "https://github.com/shadcn.png",
    },
    {
        id: 2,
        name: "Charmie",
        message: "Do you need that design?",
        avatar: "https://github.com/maxleiter.png",
    },
    {
        id: 3,
        name: "Jason Mandala",
        message: "What is the price of hourly...",
        avatar: "https://github.com/evilrabbit.png",
    },
    {
        id: 4,
        name: "Charlie Chu",
        message: "Awesome design!!",
        avatar: "/Prince.jpg",
    },
];

const emojis = [" ", "🎉", "✨", "😍", "😄", "🔥", "😉", "😎", "🤔", "🥳", "😒", "💕", "🔒", " "];

export default function RightSideBar() {
    return (
        <div className="relative h-full w-full">
            <Sidebar collapsible="none" side="right" className="absolute h-full w-full p-6">
                <SidebarHeader>
                    <div className="flex items-center justify-between">
                        <span className="text-xl">
                            <strong>Today&apos;s Schedule</strong>
                        </span>
                        <div className="flex justify-around gap-1 rounded-full bg-gray-200 p-2">
                            <Button variant="ghost" className="h-4 w-4 cursor-pointer">
                                <LayoutGrid />
                            </Button>
                            <Button variant="ghost" className="h-4 w-4 cursor-pointer">
                                <Calendar1Icon />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Item variant="muted" className="px-0">
                            <ItemContent>
                                <ItemDescription className="text-secondary">
                                    30 minutes call with Client
                                </ItemDescription>
                                <ItemTitle className="text-lg">Project Discovery Call</ItemTitle>
                            </ItemContent>
                            <ItemActions>
                                <Button
                                    variant="link"
                                    size="sm"
                                    className="cursor-pointer text-blue-600 hover:no-underline"
                                >
                                    + Invite
                                </Button>
                            </ItemActions>
                        </Item>

                        <Item variant="default" className="bg-secondary text-secondary-foreground">
                            <ItemMedia>
                                <div className="*:data-[slot=avatar]:ring-secondary-foreground flex -space-x-2 *:data-[slot=avatar]:ring-2">
                                    <Avatar className="hidden sm:flex">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="hidden sm:flex">
                                        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                        <AvatarFallback>LR</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                        <AvatarFallback>ER</AvatarFallback>
                                    </Avatar>
                                </div>
                            </ItemMedia>
                            <ItemContent className="flex items-center justify-center">
                                <ItemTitle> 28:35 </ItemTitle>
                            </ItemContent>
                            <ItemActions>
                                <div>
                                    <Button size="sm" variant="ghost" className="p-0">
                                        <PhoneCallIcon />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="mr-0">
                                        <MoreVertical />
                                    </Button>
                                </div>
                            </ItemActions>
                        </Item>
                    </div>
                </SidebarHeader>
                <SidebarSeparator />
                <SidebarContent className="group-data-[collapsible=icon]/sidebar:px-2">
                    <SidebarGroup>
                        <SidebarGroupLabel className="m-3 ml-0 text-xl font-bold">Messages</SidebarGroupLabel>
                        <SidebarGroupContent className="w-full">
                            <SidebarMenu className="flex w-full flex-col">
                                {messages.map((message) => (
                                    <SidebarMenuItem key={message.id} className="w-full">
                                        <SidebarMenuButton asChild className="h-full w-full">
                                            <a
                                                href={"#message-" + message.id}
                                                className="flex w-full items-center gap-3"
                                            >
                                                <Avatar className="ratio-square relative h-12 w-12">
                                                    <div className="absolute inset-[0.7] z-10 rounded-full border-2 border-white"></div>
                                                    <AvatarImage
                                                        src={message.avatar}
                                                        alt={message.name}
                                                        className="object-cover"
                                                    />
                                                    <AvatarFallback>{message.name.slice(0, 2)}</AvatarFallback>
                                                </Avatar>

                                                <div className="flex w-full flex-col">
                                                    <span className="truncate font-bold">{message.name}</span>
                                                    <span>{message.message}</span>
                                                </div>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    <Card className="border-none p-0 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-gray-600">New Task</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <Label htmlFor="taskTitle">New Title</Label>
                                <Input
                                    type="text"
                                    placeholder="Create new"
                                    id="taskTitle"
                                    className="mt-2 bg-gray-200 p-2"
                                />
                            </form>
                            <div className="mt-3">
                                <Carousel
                                    opts={{
                                        align: "start",
                                        slidesToScroll: 5,
                                    }}
                                >
                                    <CarouselContent>
                                        {emojis.map((emoji, index) => (
                                            <CarouselItem
                                                key={index}
                                                className="flex basis-1/7 items-center justify-end"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center">
                                                    <Button variant="ghost" className="h-8 w-8 p-0 text-lg">
                                                        {emoji}
                                                    </Button>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="top-1/2 left-0 -translate-y-1/2" />
                                    <CarouselNext className="top-1/2 right-0 -translate-y-1/2" />
                                </Carousel>
                            </div>
                        </CardContent>
                    </Card>
                </SidebarContent>
                <SidebarSeparator />
                <SidebarFooter>
                    <p className="mb-2 text-sm">Add Collaborator</p>
                    <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-purple-300 text-purple-600">
                            <Avatar className="mr-2 h-6 w-6">
                                <AvatarImage src="/maribeth.jpg" alt="MB" />
                                <AvatarFallback>MB</AvatarFallback>
                            </Avatar>
                            <span>Maribeth</span>
                            <XIcon />
                        </Badge>

                        <Badge variant="outline" className="bg-green-300 text-green-600">
                            <Avatar className="mr-2 h-6 w-6">
                                <AvatarImage src="/prince.jpg" alt="PR" />
                                <AvatarFallback>PR</AvatarFallback>
                            </Avatar>
                            <span>Prince</span>
                            <XIcon />
                        </Badge>
                        <Button className="h-6 w-6 rounded-full">
                            <Plus />
                        </Button>
                        <Button className="h-7 w-7 rounded-full">
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}
