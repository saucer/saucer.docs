import clsx from 'clsx';
import React, { ComponentProps } from 'react';

interface ColProps extends ComponentProps<'div'> {
  col: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Col({ ...props }: ColProps) {
  return (
    <div className={clsx('col', `col--${props.col}`)} {...props}>
      {props.children}
    </div>
  );
}
