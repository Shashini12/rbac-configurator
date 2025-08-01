"use client"

import * as React from "react"
import { ToastAction as RadixToastAction } from "@radix-ui/react-toast"


const ToastAction = React.forwardRef<
  React.ElementRef<typeof RadixToastAction>,
  React.ComponentPropsWithoutRef<typeof RadixToastAction>
>(({ className, ...props }, ref) => (
  <RadixToastAction
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
))

ToastAction.displayName = RadixToastAction.displayName

export { ToastAction }

function cn(...inputs: (string | undefined)[]): string {
    return inputs.filter(Boolean).join(' ')
  }
