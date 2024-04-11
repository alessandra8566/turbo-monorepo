import { forwardRef, useRef } from "react"
import { Input, InputProps } from "@ui/components/ui/input"
import { cn } from "@ui/utils/shadcn"

export type CustomInputProps = InputProps & {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  inputClass?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, startAdornment, endAdornment, inputClass, ...props }, ref) => {
    const myRef = useRef<HTMLInputElement | null>(null)
    return (
      <div
        className={cn(
          "focus-within:border-active flex items-center rounded border-[.5px] border-[#9B9B9B] bg-white",
          className,
        )}
      >
        {startAdornment && (
          <span className="mx-3" onClick={() => myRef.current?.focus()}>
            {startAdornment}
          </span>
        )}
        <Input
          {...props}
          ref={(node) => {
            myRef.current = node
            if (typeof ref === "function") ref(node)
            else if (ref) ref.current = node
          }}
          className={cn(
            "border-none text-base focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            inputClass,
          )}
        />
        {endAdornment && (
          <span className="mx-3" onClick={() => myRef.current?.focus()}>
            {endAdornment}
          </span>
        )}
      </div>
    )
  },
)

CustomInput.displayName = "CustomInput"

export { CustomInput }
