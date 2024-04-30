import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="absolute top-2 flex w-full flex-row items-center justify-between px-6 py-1">
            <div className="flex flex-row items-center gap-2">
                <Image
                    src="/logo.png"
                    width={32}
                    height={32}
                    alt="Wrink Logo"
                    className="rounded border"
                />
                <p className="text-xl font-bold">Wrink</p>
            </div>

            <div className="flex flex-row items-center gap-4">
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

                <Button>Get Started</Button>
            </div>
        </nav>
    );
}
