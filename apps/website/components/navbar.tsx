import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="absolute top-2 flex w-full flex-row items-center justify-between px-4 py-1 sm:px-6">
            <div className="flex flex-row items-center gap-2">
                <Image
                    src="/logo.png"
                    width={35}
                    height={35}
                    alt="Wrink Logo"
                    className="rounded border"
                />
                <p className="text-xl font-extrabold">Wrink</p>
            </div>

            <div className="hidden flex-row items-center gap-4 sm:flex">
                <ul className="flex flex-row items-center gap-4">
                    <li className="text-foreground/80 hover:text-foreground text-md  transition-all duration-200 ease-in-out">
                        <Link href="/pricing">Developers</Link>
                    </li>
                    <li className="text-foreground/80 hover:text-foreground text-md  transition-all duration-200 ease-in-out">
                        <Link href="/pricing">Blog</Link>
                    </li>
                    <li className="text-foreground/80 hover:text-foreground text-md  transition-all duration-200 ease-in-out">
                        <Link href="/pricing">Pricing</Link>
                    </li>
                </ul>

                <Button className="h-fit min-h-0 py-[0.4rem]">Get Started</Button>
            </div>
        </nav>
    );
}
