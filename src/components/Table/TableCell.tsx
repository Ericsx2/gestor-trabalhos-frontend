import classNames from "classnames";
import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableCellProps
  extends HTMLProps<HTMLTableCellElement>,
    HTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
}

export default function TableCell({ children, className, ...rest }: TableCellProps) {
  return (
    <td scope="col" className={classNames('p-3 font-semibold', className)} {...rest}>
      {children}
    </td>
  );
}
