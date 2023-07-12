import { HTMLAttributes, HTMLProps, ReactNode } from "react";

interface TableHeadProps
  extends HTMLProps<HTMLTableCellElement>,
    HTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
}

export default function TableHead({ children, ...rest }: TableHeadProps) {
  return (
    <th scope="col" className="p-3 font-semibold" {...rest}>
      {children}
    </th>
  );
}
