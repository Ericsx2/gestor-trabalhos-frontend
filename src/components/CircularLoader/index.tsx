import classNames from 'classnames';
import { HTMLAttributes, HTMLProps } from 'react';

interface CircularLoader
  extends HTMLProps<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement> {}

export default function CircularLoader(props: CircularLoader) {
  const style = classNames(
    `inline-block w-6 h-6 border-[5px] border-transparent border-b-blue-700 rounded-full animate-spin`,
    props.className
  );
  return <div {...props} className={style}></div>;
}
