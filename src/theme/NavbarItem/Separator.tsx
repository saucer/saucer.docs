import { IconMinusVertical } from "@tabler/icons-react";

export interface SeparatorProps
{
    margin: number;
}

export default function Separator({ margin }: SeparatorProps)
{
    return <IconMinusVertical color="gray" stroke={1} style={{ margin: margin }} />;
}
