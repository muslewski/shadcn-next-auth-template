"use client";

import MagicLink from "@/components/auth/magic-link";
import OAuth from "@/components/auth/oauth";
import { Card, Divider, CardHeader, CardBody, CardFooter } from "@heroui/react";

export default function LoginCard() {
  return (
    <Card className="border-2 border-default bg-gradient-to-tr from-content1 to-content2">
      <CardHeader className="flex flex-col items-start">
        <h2 className="text-lg font-bold">Let&apos;s Get Started</h2>
        <p className="text-sm text-default-foreground">
          Pick a sign-in method that works best for you:
        </p>
      </CardHeader>
      <Divider />
      <CardBody className="space-y-6 py-10 px-12">
        <OAuth callbackUrl="/" />
      </CardBody>
      <Divider />
      <CardFooter className="space-y-6 py-10 px-12">
        <MagicLink callbackUrl="/" />
      </CardFooter>
    </Card>
  );
}
