import clsx from 'clsx';
import React, { ComponentProps } from 'react';

interface HeaderProps extends ComponentProps<'header'> {
  color?: 'primary' | 'dark';
  banner?: boolean;
}

interface SubtitleProps extends ComponentProps<'p'> {
  color?: 'dark' | 'light';
}

namespace Hero {
  export function Header({ ...props }: HeaderProps) {
    return (
      <header
        {...props}
        className={clsx('hero', `hero--${props.color || 'primary'}`)}
        style={{
          ...(props.banner ? { padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' } : {}),
        }}
      >
        {props.children}
      </header>
    );
  }

  export function Subtitle({ ...props }: SubtitleProps) {
    return (
      <p {...props} style={{ ...(props.color ? { color: props.color } : {}) }} className="hero__subtitle">
        {props.children}
      </p>
    );
  }
}

export { Hero };
