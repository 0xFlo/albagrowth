"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

// Extending the AvatarRoot props to include common img attributes
type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  src?: string;
  alt?: string;
};

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, alt, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {/* Conditionally render AvatarImage if src is provided */}
    {src && (
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="aspect-square h-full w-full"
      />
    )}
    {/* Fallback content can be placed here if needed */}
  </AvatarPrimitive.Root>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar };
