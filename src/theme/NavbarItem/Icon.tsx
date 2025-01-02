import Link from "@docusaurus/Link";
import { IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";

export interface IconProps
{
    name: "Discord" | "GitHub";
    link: string;
}

export default function Icon({ name, link }: IconProps)
{
    const Icon = name === "Discord" ? IconBrandDiscord : IconBrandGithub;

    return (
        <Link className="navbar__item navbar__link" href={link} target="_blank" rel="noopener noreferrer" title={name}>
            <div
                style={{ display: "flex", alignItems: "center" }}
            >
                <Icon />
            </div>
        </Link>
    );
}
