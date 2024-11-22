"use client";

import { Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Button isLoading variant="ghost">
        Loading...
      </Button>
    );
  }

  if (session) {
    return (
      <Button variant="ghost" onClick={() => signOut()}>
        Sign Out
      </Button>
    );
  }

  return (
    <Button variant="ghost" onClick={() => signIn()}>
      Sign In
    </Button>
  );
}
