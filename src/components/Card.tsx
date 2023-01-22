import React, { ComponentProps } from 'react';

export namespace Cards {
  export function Card({ children, ...props }: ComponentProps<'div'>) {
    return (
      <div {...props} className="card">
        {children}
      </div>
    );
  }

  export function Image({ children, ...props }: ComponentProps<'div'>) {
    return (
      <div {...props} className="card__image">
        {children}
      </div>
    );
  }

  export function Header({ children, ...props }: ComponentProps<'div'>) {
    return (
      <div {...props} className="card__header">
        {children}
      </div>
    );
  }

  export function Body({ children, ...props }: ComponentProps<'div'>) {
    return (
      <div {...props} className="card__body">
        {children}
      </div>
    );
  }

  export function Footer({ children, ...props }: ComponentProps<'div'>) {
    return (
      <div {...props} className="card__footer">
        {children}
      </div>
    );
  }
}
