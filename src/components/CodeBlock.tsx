import CodeBlock, { Props } from "@theme/CodeBlock";
import React, { useEffect, useState } from "react";

export function VersionedCode({ children, ...props }: Props)
{
    const [version, setVersion] = useState("v5.0.0");

    useEffect(() =>
    {
        fetch("https://api.github.com/repos/saucer/saucer/releases/latest", {
            headers: [
                ["Accept", "application/vnd.github+json"],
                ["X-GitHub-Api-Version", "2022-11-28"],
            ],
        }).then(data =>
        {
            data.json().then(json =>
            {
                setVersion(json["tag_name"] ?? version);
            });
        });
    }, []);

    return (
        <CodeBlock {...props}>
            {children.toString().replace("$VERSION$", version.replace(/[^0-9.]/, ""))}
        </CodeBlock>
    );
}
