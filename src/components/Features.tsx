import React from 'react';
import { Cards } from './Card';
import { Container } from './Container';
import { LinkButton } from './LinkButton';

export namespace Feature {
  export function Grid({ children }: { children: JSX.Element[] }) {
    return (
      <Container style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>{children}</Container>
    );
  }

  export interface Feature {
    link: string;
    title: string;
    button: string;
    icon: JSX.Element;
    description: JSX.Element;
  }

  export function Item({ feature: { link, icon, button, title, description } }: { feature: Feature }) {
    return (
      <div
        style={{
          margin: 30,
          flexBasis: 'calc(50% - 60px)',
        }}
      >
        <Cards.Card
          style={{
            width: '20rem',
            height: '100%',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Cards.Image>
            <div
              style={{
                background: 'var(--ifm-color-primary-dark)',
                borderRadius: 10,
                display: 'flex',
                padding: 5,
                margin: 20,
              }}
            >
              {icon}
            </div>
          </Cards.Image>
          <Cards.Header style={{ padding: 0 }}>
            <h3>{title}</h3>
          </Cards.Header>
          <Cards.Body>{description}</Cards.Body>
          <Cards.Footer>
            <LinkButton to={link} outline>
              {button}
            </LinkButton>
          </Cards.Footer>
        </Cards.Card>
      </div>
    );
  }
}
