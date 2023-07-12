import { HTMLAttributes, HTMLProps, ReactNode } from 'react';

interface TableHeaderProps
  extends HTMLProps<HTMLTableSectionElement>,
    HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export default function TableHeader({ children, ...rest }: TableHeaderProps) {
  return (
    <thead className="border-b bg-slate-200" {...rest}>
      {children}
    </thead>
  );
}
