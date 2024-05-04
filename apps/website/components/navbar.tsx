import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DiscordIcon from "@/public/icons/discord.svg";

export default function Navbar() {
    return (
        <nav className="absolute top-2 flex w-full flex-row items-center justify-between px-4 py-1 sm:px-6">
            <div className="flex flex-row items-center gap-2">
                <Image
                    src="/logo.png"
                    width={33}
                    height={33}
                    alt="Wrink Logo"
                    className="rounded-md border"
                />
                <p className="text-xl font-extrabold">Wrink</p>
            </div>

            <div className="hidden flex-row items-center gap-4 sm:flex">
                <ul className="flex flex-row items-center gap-4">
                    <li className="text-foreground/80 hover:text-foreground text-sm  transition-all duration-200 ease-in-out">
                        <Link href="https://github.com/wrinkapp" target="_blank">
                            GitHub
                        </Link>
                    </li>
                    {/* <li className="text-foreground/80 hover:text-foreground text-md  transition-all duration-200 ease-in-out">
                        <Link href="/pricing">Blog</Link>
                    </li>
                    <li className="text-foreground/80 hover:text-foreground text-md  transition-all duration-200 ease-in-out">
                        <Link href="/pricing">Pricing</Link>
                    </li> */}
                </ul>

                <Button className="flex h-fit min-h-0 py-[0.4rem]">
                    <Link
                        href="/discord"
                        target="_blank"
                        className="flex flex-row items-center gap-2"
                    >
                        <DiscordIcon className="fill-primary-foreground h-4 w-4" />
                        <p>Join our Discord</p>
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
