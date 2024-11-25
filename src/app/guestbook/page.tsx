import { UserAvatar } from "@/components/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import db from "@/db";
import requireAuth from "@/utils/require-auth";
import GuestbookClient from "./page.client";

export default async function GuestBook() {
  await requireAuth();
  const entries = await db.query.guestbookEntries.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt);
    },
    with: {
      user: true,
    },
  });
  return (
    <Card className="mx-auto mt-4 max-w-4xl">
      <CardContent>
        <h1 className="text-center text-5xl">Feel free to leave a message!</h1>
        <GuestbookClient />
        {entries.map((entry) => (
          <Card key={entry.id} className="m-2">
            <CardHeader className="flex justify-between">
              <div className="flex gap-5">
                <UserAvatar src={entry.user.image} />
                <div className="flex flex-col items-start justify-center gap-1">
                  <h4 className="text-small text-default-600 font-semibold leading-none">{entry.user.name}</h4>
                  <h5 className="text-small text-default-400 tracking-tight">{entry.user.email}</h5>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-small text-default-400 px-3 py-0">
              <p>{entry.message}</p>
            </CardContent>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="text-small text-default-400">{entry.createdAt.toLocaleString()}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
