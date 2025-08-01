// components/ui/toast/types.ts
import { Toast as RadixToast } from "@radix-ui/react-toast"
import { ToastAction } from "./toast-action"

export type ToastActionElement = React.ReactElement<typeof ToastAction>

export type ToastVariant = "default" | "destructive"

export interface ToastProps extends React.ComponentPropsWithoutRef<typeof RadixToast> {
  variant?: ToastVariant
}

export interface ToastOptions {
  id?: string
  title?: string
  description?: string
  action?: ToastActionElement
  variant?: ToastVariant
  duration?: number
}