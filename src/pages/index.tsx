import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useMediaQuery } from "@mantine/hooks";
import {
    IconAdjustments,
    IconArrowLeftRight,
    IconBook,
    IconCpu2,
    IconDeviceDesktopBolt,
    IconFeather,
    IconPackage,
    IconPlugConnected,
    IconScale,
    IconTimeline,
} from "@tabler/icons-react";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Feature } from "../components/Feature";
import { Hero } from "../components/Hero";
import { LinkButton } from "../components/LinkButton";
import Logo from "../components/Logo";

// @ts-expect-error(raw-loader)
import exampleCode from "./example.cpp";

const features: Feature.Feature[] = [
    {
        title: "Easy to Use",
        button: "Getting Started",
        link: "/docs/getting-started",
        icon: <IconTimeline color="white" size={45} />,
        description: (
            <>
                Dead simple setup. Bring your favorite frontend framework and create beautiful desktop applications in
                seconds
            </>
        ),
    },
    {
        title: "Cross Platform",
        button: "Learn more",
        link: "/docs/getting-started/dependencies",
        icon: <IconDeviceDesktopBolt color="white" size={45} />,
        description: <>Deploy to Windows, MacOS and Linux - No code changes required. Saucer handles them all!</>,
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
                it's possible to produce binaries that are just ~250KB
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
        link: "https://github.com/saucer/bindings",
        icon: <IconPlugConnected color="white" size={45} />,
        description: <>Even though saucer is primarily a C++ library, it is available in other languages too!</>,
    },
    {
        title: "Thread Safe",
        icon: <IconCpu2 color="white" size={45} />,
        description: (
            <>
                All methods are fully thread-safe and annotated for your convenience. No special care required
            </>
        ),
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
];

export default function Home(): JSX.Element
{
    const { siteConfig } = useDocusaurusContext();
    const largeDisplay = useMediaQuery("(min-width: 85rem)");

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
                        rowGap: "5rem",
                        columnGap: "5rem",
                        flexWrap: "wrap",
                        display: "flex",
                        justifyContent: "center",
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
            {largeDisplay
                && (
                    <Hero.Header banner>
                        <motion.div
                            transition={{ duration: 0.5, delay: 0.15 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="container"
                        >
                            <TypeAnimation
                                wrapper="h1"
                                repeat={Infinity}
                                deletionSpeed={10}
                                sequence={["Code Example", 5000, "Your first application", 2000, "Code Example"]}
                            />
                            <div
                                style={{
                                    margin: "auto",
                                    marginTop: "3rem",
                                    textAlign: "left",
                                    width: "fit-content",
                                }}
                            >
                                <CodeBlock language="cpp">{exampleCode}</CodeBlock>
                            </div>
                        </motion.div>
                    </Hero.Header>
                )}
        </Layout>
    );
}
