import { ButtonProps } from "@design-system/core";

export function Button({ label, isDisabled }: ButtonProps) {
  return (
    <button disabled={isDisabled}>{label}</button>
  )
}
