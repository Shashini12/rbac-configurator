"use client"

import * as React from "react"
import { ToastClose as RadixToastClose } from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <X className="h-4 w-4" />
  </RadixToastClose>
))

ToastClose.displayName = RadixToastClose.displayName

export { ToastClose }