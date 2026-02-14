import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { Button } from "./ui/button";

export const CustomButton = ({
  className,
  Icon,
  text,
  variant,
  onClick,
}: {
  className?: string;
  Icon?: IconType;
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  onClick?: () => void;
}) => {
  return (
    <Button
      variant={variant}
      className={cn([
        className,
        {
          "p-2 w-9": Icon !== undefined && text === undefined,
          "px-4 gap-2": Icon !== undefined && text !== undefined,
        },
      ])}
      onClick={onClick}
    >
      {Icon !== undefined && <Icon className="text-lg" />}
      <span>{text}</span>
    </Button>
  );
};

export const SideMenuButton = ({
  isSidebarOpen,
  Icon,
  text,
}: {
  isSidebarOpen: boolean;
  Icon: IconType;
  text?: string;
}) => {
  return (
    <CustomButton
      className={cn([
        "w-full justify-start",
        {
          "rounded-full": !isSidebarOpen,
        },
      ])}
      Icon={Icon}
      variant={"ghost"}
      text={isSidebarOpen ? text : undefined}
    />
  );
};
