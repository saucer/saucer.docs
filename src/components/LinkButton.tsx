import Link, { Props } from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';

interface LinkButtonsProps extends Props {
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
  background?: string;
  size?: 'sm' | 'lg';
  disabled?: boolean;
  outline?: boolean;
  white?: boolean;
}

export function LinkButton({ ...props }: LinkButtonsProps) {
  return (
    <Link
      {...props}
      className={clsx('button', `button--${props.color || 'primary'}`, {
        [`button--${props.size}`]: props.size,
        ['button--outline']: props.outline,
        disabled: props.disabled,
      })}
      style={{
        border: 'none',
        ...(props.white ? { color: 'white' } : {}),
        ...(props.background ? { background: props.background } : {}),
      }}
    >
      {props.children}
    </Link>
  );
}
