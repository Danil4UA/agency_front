import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "./LoadingSpinner";

type tButtonWithLoader = {
  isLoading: boolean;
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  variant?: "default" | "outline" | "ghost" | "destructive" | "link" | "secondary";
} & React.ComponentProps<"button">
const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "border-white",
      destructive: "border-white",
      outline: "",
      secondary: "",
      ghost: "",
      link: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export default function ButtonWithLoader({
  isLoading,
  text,
  className,
  onClick,
  type = "submit",
  variant = "default",
  ...props
}: tButtonWithLoader) {
  return (
    <Button
      type={type}
      className={cn("flex cursor-pointer items-center gap-2", className)}
      disabled={isLoading}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {isLoading ? <LoadingSpinner className={buttonVariants({ variant })} size="small" /> : null}
      <span>{text}</span>
    </Button>
  );
}
