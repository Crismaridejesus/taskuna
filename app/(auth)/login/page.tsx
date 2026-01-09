import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SiGoogle } from "react-icons/si";

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 48 48">
        <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.9 2.4 30.4 0 24 0 14.6 0 6.5 5.4 2.6 13.3l8.4 6.5C13.1 13 18.1 9.5 24 9.5z"
        />
        <path
            fill="#4285F4"
            d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.7c-.6 3-2.4 5.6-5.1 7.3l7.9 6.1c4.6-4.2 6.6-10.4 6.6-17z"
        />
        <path
            fill="#FBBC05"
            d="M11 28.9c-.5-1.5-.8-3.1-.8-4.9s.3-3.4.8-4.9l-8.4-6.5C.9 16.1 0 19.9 0 24s.9 7.9 2.6 11.4l8.4-6.5z"
        />
        <path
            fill="#34A853"
            d="M24 48c6.4 0 11.9-2.1 15.9-5.7l-7.9-6.1c-2.2 1.5-5 2.4-8 2.4-5.9 0-10.9-3.5-13-8.4l-8.4 6.5C6.5 42.6 14.6 48 24 48z"
        />
    </svg>
);

export default function loginPage() {
    return (
        <div className="mx-auto flex h-screen w-1/4 items-center justify-center">
            <Card className="h-content text-muted-foreground w-full space-y-4 p-10 shadow-xl/30">
                <div className="mx-auto text-center">
                    <h1 className="font-inter text-muted-foreground mb-2 text-2xl">Welcome back to Taskuna</h1>
                    <p>Sign in to manage your tasks efficiently</p>
                </div>
                <div className="mx-auto w-full text-center">
                    <Button variant="outline" className="font-inter text-md text-md mb-3 w-full py-5 shadow-lg">
                        <GoogleIcon />
                        Continue with Google
                    </Button>
                    <div className="flex w-full items-center justify-center gap-2">
                        <Separator className="flex-1 bg-gray-400" />
                        <p className="text-sm">OR</p>
                        <Separator className="flex-1 bg-gray-400" />
                    </div>
                </div>
                <form>
                    <FieldSet>
                        <FieldGroup className="my-3">
                            <Field>
                                <FieldLabel htmlFor="email" className="font-semibold">
                                    <Mail size={18} />
                                    Email
                                </FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    className="border-gray-400 p-5"
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password" className="font-semibold">
                                    <Lock size={18} />
                                    Password
                                </FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Your password"
                                    className="border-gray-400 p-5"
                                />
                            </Field>
                            <Field className="mt-5">
                                <Button
                                    type="submit"
                                    className="bg-secondary cursor-pointer p-6 text-lg shadow-lg inset-shadow-sm inset-shadow-indigo-800 hover:bg-blue-900"
                                >
                                    Sign in
                                </Button>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
                <p className="mx-auto">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blue-700 hover:underline">
                        Sign up
                    </Link>
                </p>
            </Card>
        </div>
    );
}
