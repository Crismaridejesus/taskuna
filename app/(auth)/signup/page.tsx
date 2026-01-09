import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LockKeyhole, Mail, User } from "lucide-react";
import Link from "next/link";
import React from "react";

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

export default function signUpPage() {
    return (
        <div className="mx-auto flex h-screen w-1/4 items-center justify-center">
            <Card className="h-content w-full p-10 shadow-xl/30">
                <div className="mx-auto text-center">
                    <h1 className="font-inter text-2xl">Create your Taskuna account</h1>
                    <p>Sign up to start managing your tasks efficiently</p>
                </div>

                <div>
                    <Button variant="outline" className="font-inter mb-2 w-full p-5 shadow-sm">
                        <GoogleIcon /> Sign up with Google
                    </Button>
                    <div className="flex w-full items-center justify-center gap-2">
                        <Separator className="flex-1 bg-black" />
                        <Badge>Or</Badge>
                        <Separator className="flex-1 bg-black" />
                    </div>
                </div>

                <form>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">
                                    <User size={18} />
                                    Name
                                </FieldLabel>
                                <Input id="name" type="text" placeholder="Your full name" className="p-5" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">
                                    <Mail size={18} /> Email{" "}
                                </FieldLabel>
                                <Input id="email" type="email" placeholder="you@example.com" className="p-5" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">
                                    <LockKeyhole size={18} /> Password{" "}
                                </FieldLabel>
                                <Input id="password" type="password" placeholder="Create a password" className="p-5" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirm-password">
                                    <LockKeyhole size={18} /> Confirm Password{" "}
                                </FieldLabel>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="p-5"
                                />
                            </Field>
                            <Field className="mt-4">
                                <Button
                                    type="submit"
                                    className="bg-secondary cursor-pointer p-6 text-lg shadow-lg inset-shadow-sm inset-shadow-indigo-800 hover:bg-blue-900"
                                >
                                    Sign Up
                                </Button>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </form>
                <p className="mx-auto">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </Card>
        </div>
    );
}
