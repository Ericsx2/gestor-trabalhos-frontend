'use client';
import React, {
  ForwardedRef,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
} from 'react';
import * as SelectComponent from '@radix-ui/react-select';
import { Root as LabelRoot } from '@radix-ui/react-label';
import classnames from 'classnames';
import { Check, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface SelectItemProps
  extends HTMLProps<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

interface OptionData {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: OptionData[];
  onchange: (value: string) => void;
}

const SelectItem = React.forwardRef(function SelectItem(
  { children, className, ...props }: SelectItemProps,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  return (
    <SelectComponent.Item
      className={classnames(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <SelectComponent.ItemText>{children}</SelectComponent.ItemText>
      <SelectComponent.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <Check />
      </SelectComponent.ItemIndicator>
    </SelectComponent.Item>
  );
});

const Select = ({ label, options, placeholder, onchange }: SelectProps) => (
  <SelectComponent.Root onValueChange={onchange}>
    <LabelRoot>{label}</LabelRoot>
    <SelectComponent.Trigger
      className="inline-flex items-center justify-between rounded border p-2 border-gray-300"
      aria-label="Food"
    >
      <SelectComponent.Value placeholder={placeholder || 'Selecione'} />
      <SelectComponent.Icon className="text-violet11">
        <ChevronDownIcon />
      </SelectComponent.Icon>
    </SelectComponent.Trigger>
    <SelectComponent.Portal>
      <SelectComponent.Content className="overflow-hidden bg-white border rounded-md shadow-lg">
        <SelectComponent.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronUpIcon />
        </SelectComponent.ScrollUpButton>
        <SelectComponent.Viewport className="p-[5px]">
          <SelectComponent.Group>
            {options.map((option, i) => {
              return (
                <SelectItem
                  className="text-base hover:bg-gray-200"
                  key={`${option.label}-${i}`}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectComponent.Group>
        </SelectComponent.Viewport>
        <SelectComponent.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronDownIcon />
        </SelectComponent.ScrollDownButton>
      </SelectComponent.Content>
    </SelectComponent.Portal>
  </SelectComponent.Root>
);

export default Select;
