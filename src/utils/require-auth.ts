import { redirect } from "next/navigation";
import { auth } from "@/config/auth";

export default async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
}
