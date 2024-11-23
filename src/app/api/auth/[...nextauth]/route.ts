import NextAuth, { AuthOptions } from "next-auth";
import options from "@/config/auth";

const handler = NextAuth(options as AuthOptions);

export { handler as GET, handler as POST };
