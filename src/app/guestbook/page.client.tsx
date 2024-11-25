"use client";

import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { InsertGuestbookEntrySchema } from "@/db/schema/guestbook-entries";
import { createGuestbookEntry } from "./actions";

export default function GuestbookClient() {
  const [lastResult, action] = useActionState(createGuestbookEntry);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: InsertGuestbookEntrySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate className="mt-4 flex flex-col gap-2 py-4">
      <div className="space-y-6 py-4">
        <Textarea
          key={fields.message.key}
          name={fields.message.name}
          placeholder="Enter your message"
          className={`w-full ${fields.message.valid ? "" : "border-destructive"}`}
        />
        {!fields.message.valid && <p className="text-sm text-destructive">{fields.message.errors}</p>}
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
}
