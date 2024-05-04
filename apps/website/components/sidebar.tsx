"use client";

import Link from "next/link";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    InboxIcon,
    ListTodoIcon,
    MessagesSquareIcon,
    UsersIcon
} from "lucide-react";
import { Button } from "./ui/button";
import SpaceSwitcher from "./space-switcher";
import { Separator } from "./ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useEffect, useState } from "react";

export default function Sidebar() {
    return (
        <aside className="inset-y-0 left-0 z-10 hidden flex-col items-start px-2 sm:flex">
            <div className="flex w-full flex-col items-center gap-2 sm:py-4">
                <SpaceSwitcher />
                <div className="mt-4 flex w-full flex-col items-center justify-start gap-1">
                    <SidebarTab
                        icon={<InboxIcon className="w-4" />}
                        label="My Inbox"
                        href="/"
                        isActive={true}
                    />
                    <SidebarTab
                        icon={<ListTodoIcon className="w-4" />}
                        label="My Tasks"
                        href="/"
                        isActive={false}
                    />
                </div>

                <Separator className="my-4" />

                <div className=" flex w-full flex-col items-center justify-start gap-1">
                    <SidebarTabWithDropdown
                        label="Space"
                        defaultOpen
                        tabs={[
                            {
                                icon: <MessagesSquareIcon className="w-4" />,
                                label: "Chats",
                                href: "/",
                                isActive: false
                            },
                            {
                                icon: <UsersIcon className="w-4" />,
                                label: "Teams",
                                href: "/",
                                isActive: false
                            }
                        ]}
                    />
                    <SidebarTabWithDropdown
                        label="My Teams"
                        tabs={[
                            {
                                icon: <InboxIcon className="w-4" />,
                                label: "Label 1",
                                href: "/",
                                isActive: false
                            },
                            {
                                icon: <InboxIcon className="w-4" />,
                                label: "Label 2",
                                href: "/",
                                isActive: false
                            }
                        ]}
                    />
                </div>
            </div>
            {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Link>
            </nav> */}
        </aside>
    );
}

function SidebarTab({
    icon,
    label,
    href,
    isActive
}: {
    icon: React.ReactNode;
    label: string;
    href: string;
    isActive: boolean;
}) {
    return (
        <Button
            asChild
            variant={isActive ? "secondary" : "ghost"}
            className={`flex w-full justify-start gap-2 px-2
                    ${isActive ? "text-foreground" : "text-muted-foreground"}
                `}
        >
            <Link href={href}>
                {icon}
                <p className="text-sm font-normal">{label}</p>
            </Link>
        </Button>
    );
}

function SidebarTabWithDropdown({
    label,
    tabs,
    defaultOpen = false
}: {
    label: string;
    tabs: {
        icon: React.ReactNode;
        label: string;
        href: string;
        isActive: boolean;
    }[];
    defaultOpen?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <Collapsible
            defaultOpen={defaultOpen}
            className="w-full"
            onOpenChange={(e: any) => {
                setIsOpen(e);
            }}
        >
            <CollapsibleTrigger className="w-full">
                <>
                    <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground flex h-fit w-full justify-between px-2 py-1"
                    >
                        <div className="flex w-full justify-between">
                            <p className="font-normal">{label}</p>
                            {isOpen ? (
                                <ChevronUpIcon className="w-3" />
                            ) : (
                                <ChevronDownIcon className="w-3" />
                            )}
                        </div>
                    </Button>
                </>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-2">
                {tabs.map((tab, index) => (
                    <SidebarTab key={index} {...tab} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}
