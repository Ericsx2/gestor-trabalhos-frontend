import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableFooterProps
  extends HTMLProps<HTMLTableSectionElement>,
    HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export default function TableFooter({ children, ...rest }: TableFooterProps) {
  return <tfoot {...rest}>{children}</tfoot>;
}
