import clsx from "clsx";
import React, { ComponentProps } from "react";

interface ColProps extends ComponentProps<"div"> {
  col: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Col({ col, children, ...props }: ColProps)
{
    return (
        <div className={clsx("col", `col--${col}`)} {...props}>
            {children}
        </div>
    );
}
