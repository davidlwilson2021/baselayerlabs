import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Custom geometric button styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group"
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(201,169,110,0.15)] hover:shadow-[0_0_25px_rgba(201,169,110,0.3)]",
      outline: "border border-border bg-transparent hover:border-primary hover:text-primary",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }
    
    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {/* Subtle geometric hover effect for default/outline */}
        {(variant === 'default' || variant === 'outline') && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
        )}
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
