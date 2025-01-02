import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

interface HeaderProps extends ComponentProps<"header">
{
    color?: "primary" | "dark";
    banner?: boolean;
}

interface SubtitleProps extends ComponentProps<"p">
{
    color?: "dark" | "light";
}

namespace Hero
{
    export const Header = forwardRef<HTMLHeadingElement, HeaderProps>(({ children, color, banner, ...props }, ref) => (
        <header
            {...props}
            ref={ref}
            className={clsx("hero", { [`hero--${color}`]: color })}
            style={{
                ...(banner
                    ? { padding: "4rem 0", textAlign: "center", position: "relative", overflow: "hidden" }
                    : {}),
                ...props.style,
            }}
        >
            {children}
        </header>
    ));

    export const Subtitle = forwardRef<HTMLParagraphElement, SubtitleProps>(({ children, color, ...props }, ref) => (
        <p {...props} ref={ref} style={{ ...(color ? { color } : {}) }} className="hero__subtitle">
            {children}
        </p>
    ));
}

export { Hero };
