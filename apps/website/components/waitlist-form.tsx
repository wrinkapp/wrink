"use client";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
    email: z
        .string()
        .min(2, "Email must be at least 2 characters.")
        .max(256, "Email must not be longer than 256 characters.")
        .email("Invalid email.")
});

export default function WaitlistForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("You've been added to the waitlist!");
        // reset form
        form.reset();
    }

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full flex-row items-start justify-center gap-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email."
                                        className="py-4"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="relative top-0 text-red-400" />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Join Waitlist</Button>
                </form>
            </Form>
        </div>
    );
}
