import { IconMinusVertical } from "@tabler/icons-react";

export interface SeparatorProps
{
    margin: number;
}

export default function Separator({ margin }: SeparatorProps)
{
    return (
        // <div  style={{ display: "flex", alignItems: "center" }}>
        <IconMinusVertical
            className="navbar__item"
            color="gray"
            stroke={1}
            style={{ margin: margin, padding: 0 }}
        />
        // </div>
    );
}
