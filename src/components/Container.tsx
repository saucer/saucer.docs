import React, { ComponentProps } from 'react';

export function Container({ ...props }: ComponentProps<'div'>) {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  );
}
