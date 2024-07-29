import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    IconAdjustments,
    IconArrowLeftRight,
    IconArrowRight,
    IconBook,
    IconClipboard,
    IconCpu2,
    IconCrystalBall,
    IconFeather,
    IconPackage,
    IconPlugConnected,
    IconScale,
    IconTimeline,
} from "@tabler/icons-react";
import Layout from "@theme/Layout";
import { Feature } from "../components/Feature";
import { Hero } from "../components/Hero";
import { LinkButton } from "../components/LinkButton";
import Logo from "../components/Logo";
import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

const features: Feature.Feature[] = [
    {
        title: "Easy to Use",
        button: "Getting Started",
        link: "/docs/getting-started",
        icon: <IconTimeline color="white" size={45} />,
        description: (
            <>
                Don't bother with platform specific code anymore! Focus on building the frontend and leave the rest to
                saucer
            </>
        ),
    },
    {
        title: "Interoperability",
        button: "Learn more",
        icon: <IconArrowLeftRight color="white" size={45} />,
        link: "/docs/interoperability",
        description: (
            <>
                Evaluate JavaScript expressions from <span style={{ textWrap: "nowrap" }}>C++</span>{" "}
                and expose native functions with ease!
            </>
        ),
    },
    {
        title: "Simple Deployment",
        button: "Embedding",
        link: "/docs/embedding",
        icon: <IconPackage color="white" size={45} />,
        description: <>Seamlessly embed all of your frontend code into saucer and ship a contained binary</>,
    },
    {
        title: "Customizability",
        button: "Modules",
        link: "/docs/advanced/modules",
        icon: <IconAdjustments color="white" size={45} />,
        description: (
            <>Modules allow extensive customization and access to underlying platform specific implementations</>
        ),
    },
    {
        title: "Small",
        button: "Learn more",
        link: "/docs/getting-started/dependencies",
        icon: <IconFeather color="white" size={45} />,
        description: (
            <>
                By using the the operating systems native web renderer<sup>*</sup>{" "}
                it's possible to produce binaries that are just ~700KB
                <br />

                <sup>
                    <sub>
                        <i>
                            <sup>*</sup> or a commonly used one
                        </i>
                    </sub>
                </sup>
            </>
        ),
    },
    {
        title: "Bindings",
        button: "Community Bindings",
        link: "/docs/getting-started/dependencies",
        icon: <IconPlugConnected color="white" size={45} />,
        description: <>Eventhough saucer is primarily a C++ library, it is available in other languages too</>,
    },
    {
        title: "FOSS",
        button: "See License",
        link: "https://github.com/saucer/saucer/blob/master/LICENSE",
        icon: <IconScale color="white" size={45} />,
        description: (
            <>
                Saucer is, and will always be, Free and Open Source
                <br />
                <br />
                <i>Licensed under MIT where applicable</i>
            </>
        ),
    },
    {
        title: "Modern",
        icon: <IconCrystalBall color="white" size={45} />,
        description: (
            <>Saucer was built on C++20 and will adopt newer standards once they're ready for production usage</>
        ),
    },
    {
        title: "Thread Safe",
        icon: <IconCpu2 color="white" size={45} />,
        description: <>All methods are completely thread-safe and annotated accordingly</>,
    },
];

export default function Home(): JSX.Element
{
    const { siteConfig } = useDocusaurusContext();
    const largeDisplay = useMediaQuery("(min-width: 60rem)");

    return (
        <Layout title={siteConfig.title}>
            <Hero.Header banner>
                <div className="container">
                    <center>
                        <Logo height={largeDisplay ? 350 : 200} />
                    </center>
                    <Hero.Subtitle>{siteConfig.tagline}</Hero.Subtitle>
                    <LinkButton color="primary" size="lg" white to="/docs/getting-started">
                        <IconBook /> Documentation
                    </LinkButton>
                </div>
            </Hero.Header>
            <main
                className="container"
                style={{ display: "flex", justifyContent: "center", margin: "5rem auto 5rem auto" }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: (largeDisplay ? "1fr 1fr 1fr" : "1fr"),
                        rowGap: "5rem",
                        columnGap: "10rem",
                    }}
                >
                    {features.map(feature => (
                        <motion.div
                            key={feature.title}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Feature.Item feature={feature} />
                        </motion.div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}
