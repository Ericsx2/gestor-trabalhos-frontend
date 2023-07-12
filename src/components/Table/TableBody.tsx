import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableBodyProps
  extends HTMLProps<HTMLTableSectionElement>,
    HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export default function TableBody({ children, ...rest }: TableBodyProps) {
  return (
    <tbody className="border-b" {...rest}>
      {children}
    </tbody>
  );
}
