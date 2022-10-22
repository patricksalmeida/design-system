import { ButtonProps } from "packages/core/src";

export function Button({ label, isDisabled }: ButtonProps) {
  return (
    <button disabled={isDisabled}>{label}</button>
  )
}
