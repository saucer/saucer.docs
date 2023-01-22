import clsx from 'clsx';
import React from 'react';
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

  export function Item({ title, image, description }: { title: string; image: string; description: JSX.Element }) {
    return (
      <Col col={6}>
        <div className="text--center">
          <img src={image} width={200} height={200} />
        </div>
        <div className={clsx('text--center', 'padding-horiz--md')}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Col>
    );
  }
}
