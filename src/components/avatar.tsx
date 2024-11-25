import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  className?: string;
}

export function UserAvatar({ src, alt, className }: AvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src ?? undefined} alt={alt} />
      <AvatarFallback>{alt ? alt[0].toUpperCase() : <User className="h-6 w-6" />}</AvatarFallback>
    </Avatar>
  );
}
