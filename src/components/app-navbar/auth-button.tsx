import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LoadingSpinner } from "../ui/loading-spinner";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return <LoadingSpinner aria-label="Loading authentication status..." />;
  }

  if (status === "authenticated") {
    const signOutClick = () =>
      signOut({
        callbackUrl: "/",
      });
    if (minimal) {
      return (
        <Button onClick={signOutClick} variant="ghost">
          <IconBrandGoogle />
          Sign Out
        </Button>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="transition-transform" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOutClick}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/profile",
        })
      }
      variant="ghost"
    >
      <IconBrandGoogle />
      Sign In
    </Button>
  );
}
