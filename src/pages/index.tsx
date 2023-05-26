import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconAdjustments,
  IconBarbell,
  IconChartArrowsVertical,
  IconHandLittleFinger,
  IconPackage,
  IconScale,
} from '@tabler/icons';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Container } from '../components/Container';
import { Feature } from '../components/Features';
import { Hero } from '../components/Hero';
import { LinkButton } from '../components/LinkButton';
import exampleCode from './example.cpp';

const features: Feature.Feature[] = [
  {
    title: 'Easy to Use',
    button: 'Getting Started',
    link: '/docs/getting-started',
    icon: <IconChartArrowsVertical color="white" size={45} />,
    description: (
      <>Don't bother with platform specific code anymore! Just build your frontend once and use it in saucer</>
    ),
  },
  {
    title: 'Interoperability',
    button: 'Exposing Functions',
    icon: <IconBarbell color="white" size={45} />,
    link: '/docs/getting-started/interoperability',
    description: <>Easily expose your native functionality to JavaScript and vice versa</>,
  },
  {
    title: 'Simple Deployment',
    button: 'Embedding',
    link: '/docs/getting-started/embedding',
    icon: <IconPackage color="white" size={45} />,
    description: <>Embed all your frontend code into saucer with ease and ship a contained binary</>,
  },
  {
    title: 'Customizability',
    button: 'Modules & Plugins',
    link: '/docs/advanced/modules',
    icon: <IconAdjustments color="white" size={45} />,
    description: (
      <>Plugins and Modules allow extensive customization and access to underlying platform specific implementations</>
    ),
  },
  {
    title: 'Small',
    button: 'Learn more',
    link: '/docs/getting-started/dependencies',
    icon: <IconHandLittleFinger color="white" size={45} />,
    description: (
      <>
        By using the OS' native web renderer* it's possible to produce binaries that are just ~700KB
        <br />
        <sup>
          <sub>
            <i>* or a commonly used one</i>
          </sub>
        </sup>{' '}
      </>
    ),
  },
  {
    title: 'FOSS',
    button: 'See License',
    link: 'https://github.com/saucer/saucer/blob/dev/LICENSE',
    icon: <IconScale color="white" size={45} />,
    description: (
      <>
        Saucer is, and will always be, Free and Open Source <br />
        <br />
        <i>Licensed under MIT where applicable</i>
      </>
    ),
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const mobileCodeBlock = useMediaQuery('(min-width: 500px)');

  return (
    <Layout title={siteConfig.title}>
      <Hero.Header banner>
        <Container>
          <img src="/img/logo.gif" height={350} />
          <Hero.Subtitle>{siteConfig.tagline}</Hero.Subtitle>
          <LinkButton color="primary" size="lg" white to="/docs/getting-started">
            Get Started
          </LinkButton>
        </Container>
      </Hero.Header>
      <Hero.Header banner style={{ backgroundColor: 'var(--hero-banner-ternary)' }}>
        <Feature.Grid>
          {features.map(feature => (
            <Feature.Item key={feature.title} feature={feature} />
          ))}
        </Feature.Grid>
      </Hero.Header>
      <Hero.Header banner>
        <Container>
          <TypeAnimation
            wrapper="h1"
            deletionSpeed={10}
            sequence={['Code Example', 5000, 'Your first application', 2000, 'Code Example']}
          />
          <Hero.Subtitle>A basic saucer application which exposes a native function</Hero.Subtitle>
          <div style={{ margin: 'auto', width: mobileCodeBlock ? 'fit-content' : undefined, textAlign: 'left' }}>
            <CodeBlock language="cpp">{exampleCode}</CodeBlock>
          </div>
        </Container>
      </Hero.Header>
    </Layout>
  );
}
