import { IconFileUnknown } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="mx-auto mt-4 max-w-md">
      <div>
        <p className="flex items-center justify-center gap-2 text-2xl">
          <IconFileUnknown />
          This page cannot be found.
        </p>
      </div>
    </div>
  );
}
