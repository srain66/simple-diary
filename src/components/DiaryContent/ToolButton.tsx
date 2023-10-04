import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

export default function ToolButton({
  children,
  className,
  ...props
}: IProps): JSX.Element {
  return (
    <button className={`w-8 h-8 p-2 rounded-full ${className}`} {...props}>
      {children}
    </button>
  );
}
