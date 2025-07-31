"use client"

import * as React from "react"
import { ToastDescription as RadixToastDescription } from "@radix-ui/react-toast"

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof RadixToastDescription>,
  React.ComponentPropsWithoutRef<typeof RadixToastDescription>
>(({ className, ...props }, ref) => (
  <RadixToastDescription
    ref={ref}
    className="text-sm opacity-90"
    {...props}
  />
))

ToastDescription.displayName = RadixToastDescription.displayName

export { ToastDescription }