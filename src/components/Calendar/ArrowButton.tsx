import { ButtonHTMLAttributes } from "react";

export default function ArrowButton({
  children,
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      className="w-12 h-8 p-2 flex justify-center items-center rounded hover:bg-gray-100"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
