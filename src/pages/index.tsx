import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { Container } from '../components/Container';
import { Feature } from '../components/Features';
import { Hero } from '../components/Hero';
import { LinkButton } from '../components/LinkButton';

function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Hero.Header color="dark" banner>
      <Container>
        <img src="/img/logo.gif" height={350} />
        <Hero.Subtitle>{siteConfig.tagline}</Hero.Subtitle>
        <LinkButton color="primary" size="lg" white>
          Get Started
        </LinkButton>
      </Container>
    </Hero.Header>
  );
}

const Features = [
  {
    title: 'Easy to Use',
    image: '/undraw/setup.svg',
    description: (
      <>
        Don't bother with platform specific code or other shenanigans for your frontend anymore! Just build it once with
        your favorite web framework
      </>
    ),
  },
  {
    title: 'Powerful Interoperability',
    image: '/undraw/strong.svg',
    description: <>Easily expose your native functionality to JavaScript and vice versa</>,
  },
  {
    title: 'Simple Deployment',
    image: '/undraw/package.svg',
    description: (
      <>
        Embed all your frontend code into saucer with ease and ship a contained binary that's ready to run out of the
        box without additional dependency installation <i>(on most platforms)</i>
      </>
    ),
  },
  {
    title: 'Customizability',
    image: '/undraw/taken.svg',
    description: (
      <>
        Plugins and Modules allow you to easily extend saucers capabilities, create plugins to automate certain tasks or
        access underlying platform specific objects to tinker the library to your hearts content
      </>
    ),
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title}>
      <Header />
      <main>
        <Feature.Grid>
          {Features.map(x => (
            <Feature.Item key={x.title} description={x.description} image={x.image} title={x.title} />
          ))}
        </Feature.Grid>
      </main>
    </Layout>
  );
}
