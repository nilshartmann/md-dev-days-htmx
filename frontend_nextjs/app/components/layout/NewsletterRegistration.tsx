"use client";
import React, { useState, useTransition } from "react";
import { Button } from "@/app/components/Button.tsx";
import { Input } from "@/app/components/Input.tsx";
import LogoLoadingIndicator from "@/app/components/layout/LogoLoadingIndicator.tsx";
import { subscribeToNewsletter } from "@/app/components/layout/newsletter-actions.ts";

export function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [isTransition, startTransition] = useTransition();

  const buttonDisabled = isTransition || email.trim().length < 3;

  const handleEmailChange = (e: string) => {
    setEmail(e);
    setStatus(null);
  };

  const handleSubmit = () => {
    startTransition(async () => {
      // 'subscribeToNewsletter' ist eine SERVER-Funktion,
      //  das ist eine Art RPC
      await subscribeToNewsletter(email);
      setEmail("");
      setStatus("success");
    });
  };

  return (
    <div
      className={"max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"}
    >
      <div>Don't miss new recipes. Subscribe to newsletter</div>
      <div className={"max-w-64"}>
        <Input
          value={email}
          disabled={isTransition}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button disabled={buttonDisabled}>
          {isTransition ? (
            <LogoLoadingIndicator />
          ) : (
            <button disabled={buttonDisabled} onClick={handleSubmit}>
              Subscribe
            </button>
          )}
        </Button>
      </div>
      <div>{status === "success" && "Subscribed!"}</div>
    </div>
  );
}
