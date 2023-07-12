import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableRootProps
  extends HTMLProps<HTMLTableElement>,
    HTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

export default function TableRoot({ children, ...rest }: TableRootProps) {
  return (
    <table className="w-full text-left" {...rest}>
      {children}
    </table>
  );
}
