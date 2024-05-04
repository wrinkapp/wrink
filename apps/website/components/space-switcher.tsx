"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "./ui/label";

// Mock data, later will be in a store
const spaces = [
    {
        value: "outgone",
        label: "Outgone",
        icon: "https://outgone.app/logo.png"
    },
    {
        value: "tip-dev",
        label: "tip.dev",
        icon: "https://tip.dev/images/webp/logo-rounded-corner.webp"
    },
    {
        value: "wrink",
        label: "Wrink",
        icon: "https://wrink.app/logo.png"
    }
];

export default function SpaceSwitcher() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(spaces[0].value);

    return (
        <div className="flex w-full flex-col gap-1">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        role="combobox"
                        aria-expanded={open}
                        className="flex w-full justify-between gap-2 px-2 font-bold"
                    >
                        <div className="flex flex-row items-center gap-2 overflow-hidden">
                            <Image
                                src={
                                    spaces.find((spaces) => spaces.value === value)?.icon as string
                                }
                                className="h-5 w-5 rounded"
                                width={18}
                                height={18}
                                alt={`${spaces.find((spaces) => spaces.value === value)?.label} icon`}
                            />
                            <p className="truncate">
                                {value
                                    ? spaces.find((spaces) => spaces.value === value)?.label
                                    : "Select a space..."}
                            </p>
                        </div>
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandList>
                            <CommandEmpty>No spaces found.</CommandEmpty>
                            <CommandGroup>
                                {spaces.map((spaces) => (
                                    <CommandItem
                                        key={spaces.value}
                                        value={spaces.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Image
                                            src={spaces.icon}
                                            className="mr-2 h-4 w-4 rounded"
                                            width={16}
                                            height={16}
                                            alt={`${spaces.label} icon`}
                                        />
                                        {spaces.label}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                value === spaces.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
