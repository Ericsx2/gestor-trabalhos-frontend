import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableRowProps
  extends HTMLProps<HTMLTableRowElement>,
    HTMLAttributes<HTMLTableRowElement> {
  children?: ReactNode;
}

export default function TableRow({ children, ...rest }: TableRowProps) {
  return (
    <tr
      className="border-b transition-all last:border-none"
      {...rest}
    >
      {children}
    </tr>
  );
}
