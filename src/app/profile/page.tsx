import { Mail, MapPin } from "lucide-react";
import { UserAvatar } from "@/components/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { auth, signOut } from "@/config/auth";
import requireAuth from "@/utils/require-auth";

export default async function Profile() {
  await requireAuth();
  const session = (await auth())!;
  const { name, email, image } = session.user;

  return (
    <div className="flex items-center justify-center px-8 pt-20">
      <Card className="w-full max-w-md border shadow-2xl transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-4 pb-2">
          <UserAvatar src={image || ""} alt={name ?? ""} className="h-24 w-24" />
          <h3 className="text-2xl font-bold text-foreground">{name ?? "Anonymous"}</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 text-foreground">
            <Mail className="h-5 w-5" />
            <span>{email}</span>
          </div>
          <div className="flex items-center space-x-2 text-foreground">
            <MapPin className="h-5 w-5" />
            <span>Earth, Milky Way</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          ></form>
        </CardFooter>
      </Card>
    </div>
  );
}
