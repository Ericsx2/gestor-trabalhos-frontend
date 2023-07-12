import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableContainerProps
  extends HTMLProps<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export default function TableContainer({
  children,
  ...rest
}: TableContainerProps) {
  return (
    <div className="rounded border" {...rest}>
      {children}
    </div>
  );
}
