import React, { ComponentProps } from 'react';

interface ContainerProps extends ComponentProps<'div'> {
  degree?: number;
}

export function Container({ children, degree, ...props }: ContainerProps) {
  return (
    <div className="container" style={{ ...(degree ? { transform: `skewY(${degree}deg)` } : {}) }} {...props}>
      {children}
    </div>
  );
}
