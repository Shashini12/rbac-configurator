"use client"

import * as React from "react"
import { ToastClose as RadixToastClose } from "@radix-ui/react-toast"

// Simple X icon component to replace lucide-react
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

// Simple cn utility implementation
function cn(...inputs: (string | undefined)[]): string {
  return inputs.filter(Boolean).join(' ')
}

const ToastClose = React.forwardRef<
  React.ElementRef<typeof RadixToastClose>,
  React.ComponentPropsWithoutRef<typeof RadixToastClose>
>(({ className, ...props }, ref) => (
  <RadixToastClose
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    )}
    toast-close=""
    {...props}
  >
    <XIcon />
  </RadixToastClose>
))

ToastClose.displayName = RadixToastClose.displayName

export { ToastClose }