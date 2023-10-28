import Link, { Props } from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

interface LinkButtonsProps extends Props {
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "link";
  background?: string;
  size?: "sm" | "lg";
  disabled?: boolean;
  outline?: boolean;
  white?: boolean;
}

export function LinkButton({
    color,
    background,
    size,
    disabled,
    outline,
    white,
    children,
    ...props
}: LinkButtonsProps)
{
    return (
        <Link
            {...props}
            className={clsx("button", `button--${color || "primary"}`, {
                ["disabled"]       : disabled,
                [`button--${size}`]: size,
                ["button--outline"]: outline,
            })}
            style={{
                ...(white ? { color: "white" } : {}),
                ...(background ? { background: background } : {}),
            }}
        >
            {children}
        </Link>
    );
}
