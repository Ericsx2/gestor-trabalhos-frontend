'use client';
import * as Label from '@radix-ui/react-label';
import { ForwardedRef, HTMLAttributes, HTMLProps, forwardRef } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = forwardRef(function Input(
  { label, ...rest }: InputProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="flex flex-col">
      <Label.Root htmlFor={rest.id}>{label}</Label.Root>
      <input
        className="border border-gray-300 rounded-md p-2 transition-all focus:outline-blue-500 focus:border-blue-500"
        ref={forwardedRef}
        {...rest}
      />
    </div>
  );
});

export default Input;
