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
  export function Header({  children, color, banner, ...props }: HeaderProps) {
    return (
      <header
        {...props}
        className={clsx('hero', { [`hero--${color}`]: color })}
        style={{
          ...(banner ? { padding: '4rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' } : {}),
          ...props.style,
        }}
      >
        {children}
      </header>
    );
  }

  export function Subtitle({ children, color, ...props }: SubtitleProps) {
    return (
      <p {...props} style={{ ...(color ? { color } : {}) }} className="hero__subtitle">
        {children}
      </p>
    );
  }
}

export { Hero };
