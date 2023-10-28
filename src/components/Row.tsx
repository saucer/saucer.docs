import React, { ComponentProps } from "react";

export function Row({ ...props }: ComponentProps<"div">)
{
    return (
        <div className="row" {...props}>
            {props.children}
        </div>
    );
}
