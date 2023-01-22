/*
<div class="card">
    <div class="card__image">
      <img
        src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt="Image alt text"
        title="Logo Title Text 1" />
    </div>
    <div class="card__body">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
    <div class="card__footer">
      <button class="button button--primary button--block">Visit</button>
    </div>
  </div>
*/

import React from 'react';
import { ComponentProps } from 'react';

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
