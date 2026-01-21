import { cn } from "@/lib/utils";
import CustomAvatar from "../avatars/CustomAvatar";

interface UserInfoProps {
  user: {
    id: string | number;
    name: string;
    email: string;
  };
  variant?: "desktop" | "mobile";
  className?: string;
}

export default function UserInfo({
  user,
  variant = "desktop",
  className,
}: UserInfoProps) {


    const isDesktop = variant === "desktop";

    return (
        <div
            className={cn(
                "flex items-center gap-3",
                isDesktop ? "min-w-max" : "",
                className
            )}
            >
            <CustomAvatar
                name={user.name}
                id={user.id as string}
                size={isDesktop ? "size-30 shrink-0" : "size-8"}
            />

            <div className={cn(isDesktop ? "whitespace-nowrap" : "flex-1 min-w-0")}>
                <p
                    className={cn(
                        "text-secondary-9",
                        isDesktop ? "text-xs" : "font-semibold text-sm"
                    )}
                >
                    {user.name}
                </p>
                <p
                    className={cn(
                        isDesktop
                        ? "text-[11px] text-secondary-9 font-bold"
                        : "text-xs text-neutral-6 truncate"
                    )}
                >
                    {user.email}
                </p>
            </div>
        </div>
    )
}