import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "rounded-md bg-muted opacity-0 [animation:skeleton-fade-in_200ms_ease-out_200ms_forwards,pulse_2s_cubic-bezier(0.4,0,0.6,1)_400ms_infinite]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
