import React from "react";

import { cn } from "@/utils/cn";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex w-full rounded-lg border border-border bg-secondary p-4 outline-none placeholder:text-foreground-muted focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);
TextArea.displayName = "TextArea";

export { TextArea };
