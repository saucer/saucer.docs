import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IconAdjustments, IconChartArrowsVertical, IconPackage, IconWeight } from '@tabler/icons';
import Layout from '@theme/Layout';
import React from 'react';
import { Container } from '../components/Container';
import { Feature } from '../components/Features';
import { Hero } from '../components/Hero';
import { LinkButton } from '../components/LinkButton';

const features: Feature.Feature[] = [
  {
    title: 'Easy to Use',
    icon: <IconChartArrowsVertical color="white" size={45} />,
    description: (
      <>Don't bother with platform specific code anymore! Just build it once with your favorite web framework</>
    )
  },
  {
    title: 'Interoperability',
    icon: <IconWeight color="white" size={45} />,
    description: <>Easily expose your native functionality to JavaScript and vice versa</>
  },
  {
    title: 'Simple Deployment',
    icon: <IconPackage color="white" size={45} />,
    description: <>Embed all your frontend code into saucer with ease and ship a contained binary</>
  },
  {
    title: 'Customizability',
    icon: <IconAdjustments color="white" size={45} />,
    description: (
      <>Plugins and Modules allow extensive customization and access to underlying platform specific implementations</>
    )
  }
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title}>
      <Hero.Header banner>
        <Container>
          <img src="/img/logo.gif" height={350} />
          <Hero.Subtitle>{siteConfig.tagline}</Hero.Subtitle>
          <LinkButton color="primary" size="lg" white>
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
    </Layout>
  );
}
