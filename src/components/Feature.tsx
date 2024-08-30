import { IconArrowRight } from "@tabler/icons-react";
import { Cards } from "./Card";
import { LinkButton } from "./LinkButton";
import Heading from "@theme/Heading";

export namespace Feature
{
    export interface Feature
    {
        title: string;

        link?: string;
        button?: string;

        description: JSX.Element;
        icon: JSX.Element;
    }

    export function Item({ feature: { link, icon, button, title, description } }: { feature: Feature })
    {
        return (
            <Cards.Card
                style={{
                    width: "20rem",
                    height: "20rem",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Cards.Image>
                    <div
                        style={{
                            background: "var(--ifm-color-primary-dark)",
                            borderRadius: 10,
                            display: "flex",
                            padding: 5,
                            margin: 20,
                        }}
                    >
                        {icon}
                    </div>
                </Cards.Image>

                <Cards.Header style={{ padding: 0 }}>
                    <Heading as="h3">{title}</Heading>
                </Cards.Header>

                <Cards.Body style={{ textAlign: "center" }}>
                    {description}
                </Cards.Body>

                {link && (
                    <Cards.Footer style={{ justifySelf: "flex-end" }}>
                        <LinkButton to={link} outline>
                            {button} <IconArrowRight />
                        </LinkButton>
                    </Cards.Footer>
                )}
            </Cards.Card>
        );
    }
}
