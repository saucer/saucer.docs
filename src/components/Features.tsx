import React from 'react';
import { Cards } from './Card';
import { Container } from './Container';

export namespace Feature {
  export function Grid({ children }: { children: JSX.Element[] }) {
    return (
      <section style={{ display: 'flex', alignItems: 'center', padding: '2rem 0', width: '100%' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', placeItems: 'center' }}>
            {children}
          </div>
        </Container>
      </section>
    );
  }

  export interface Feature {
    title: string;
    icon: JSX.Element;
    description: JSX.Element;
  }

  export function Item({ feature: { icon, title, description } }: { feature: Feature }) {
    return (
      <Cards.Card
        style={{
          width: '400px',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Cards.Image>
          <div
            style={{
              background: 'var(--ifm-color-primary-dark)',
              borderRadius: '10px',
              width: 'fit-content',
              display: 'flex',
              padding: '5px',
              margin: '20px'
            }}
          >
            {icon}
          </div>
        </Cards.Image>
        <Cards.Header style={{ padding: '0' }}>
          <h3>{title}</h3>
        </Cards.Header>
        <Cards.Body>{description}</Cards.Body>
      </Cards.Card>
    );
  }
}
