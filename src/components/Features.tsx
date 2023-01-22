import React from 'react';
import { Cards } from './Card';
import { Col } from './Col';
import { Container } from './Container';
import { Row } from './Row';

export namespace Feature {
  export function Grid({ children }: { children: JSX.Element[] }) {
    return (
      <section style={{ display: 'flex', alignItems: 'center', padding: '2rem 0', width: '100%' }}>
        <Container>
          <Row>{children}</Row>
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
      <Col col={6}>
        <center>
          <Cards.Card style={{ width: '50%' }}>
            <Cards.Image>
              <center>
                <div
                  style={{
                    background: 'var(--ifm-color-primary-dark)',
                    borderRadius: '10px',
                    width: 'fit-content',
                    display: 'flex',
                    padding: '5px',
                    margin: '20px',
                  }}
                >
                  {icon}
                </div>
              </center>
            </Cards.Image>
            <Cards.Header style={{ padding: '0' }}>
              <h3>{title}</h3>
            </Cards.Header>
            <Cards.Body>{description}</Cards.Body>
          </Cards.Card>
        </center>
      </Col>
    );
  }
}
