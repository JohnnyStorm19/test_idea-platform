import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { label, className, checked } = props;
  return (
    <label
      className={twMerge(
        `flex gap-2 items-center flex-1 select-none`,
        className
      )}
    >
      <input
        type="checkbox"
        {...props}
        checked={checked}
        className="h-5 w-5 rounded-md text-black outline-none"
      />
      {label}
    </label>
  );
};
