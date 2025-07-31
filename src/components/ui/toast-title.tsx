"use client"

import * as React from "react"
import { ToastTitle as RadixToastTitle } from "@radix-ui/react-toast"

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof RadixToastTitle>,
  React.ComponentPropsWithoutRef<typeof RadixToastTitle>
>(({ className, ...props }, ref) => (
  <RadixToastTitle
    ref={ref}
    className="text-sm font-semibold [&+div]:text-xs"
    {...props}
  />
))

ToastTitle.displayName = RadixToastTitle.displayName

export { ToastTitle }