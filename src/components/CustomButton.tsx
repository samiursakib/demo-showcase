import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { IconType } from "react-icons";

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
      <span className="mt-[3px]">{text}</span>
    </Button>
  );
};
