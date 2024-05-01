import Link from "next/link";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    InboxIcon,
    LineChart,
    ListFilter,
    ListTodoIcon,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2
} from "lucide-react";
import { Button } from "./ui/button";

export default function Sidebar() {
    return (
        <aside className=" fixed inset-y-0 left-0 z-10 hidden w-[14%] flex-col items-start border-r sm:flex">
            <nav className="flex w-full flex-col items-center gap-2 px-2 sm:py-4">
                <SidebarTab
                    icon={<img src="https://outgone.app/logo.png" alt="Outgone" className="h-5" />}
                    label="Outgone"
                    href="/"
                    isActive={false}
                />
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
            </nav>
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
                <p className="font-bold">{label}</p>
            </Link>
        </Button>
    );
}
