import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

const config: Config = {
    title: "Saucer",
    tagline: "Next-Gen desktop apps with web-frontend in C++",

    projectName: "saucer-docs",
    organizationName: "saucer",
    trailingSlash: false,

    baseUrl: "/",
    favicon: "img/favicon.ico",
    url: "https://saucer.github.io",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Saucer",
                logo: {
                    alt: "Logo",
                    src: "img/logo-alt.svg",
                },
                items: [
                    {
                        type: "doc",
                        label: "Docs",
                        position: "left",
                        docId: "getting-started/readme",
                    },
                    // { to: '/news', label: 'News', position: 'left' },
                    {
                        href: "https://github.com/saucer/saucer",
                        label: "GitHub",
                        position: "right",
                    },
                    {
                        href: "https://discord.gg/ndhmQE4225",
                        label: "Discord",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/saucer",
                            },
                            {
                                label: "Discord",
                                href: "https://discord.gg/ndhmQE4225",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © 2021 Saucer`,
            },
            prism: {
                theme: themes.github,
                darkTheme: themes.oneDark,
                additionalLanguages: ["cmake"],
                magicComments: [
                    {
                        className: "code-block-gray",
                        line: "highlight-next-line",
                        block: { start: "highlight-start", end: "highlight-end" },
                    },
                    {
                        className: "code-block-red",
                        block: {
                            start: "red-start",
                            end: "red-end",
                        },
                        line: "red",
                    },
                    {
                        className: "code-block-green",
                        block: {
                            start: "green-start",
                            end: "green-end",
                        },
                        line: "green",
                    },
                ],
            },
        }) satisfies Preset.ThemeConfig,

    // themeConfig: {
    //   // Replace with your project's social card
    //   image: 'img/docusaurus-social-card.jpg',
    //   navbar: {
    //     title: 'My Site',
    //     logo: {
    //       alt: 'My Site Logo',
    //       src: 'img/logo.svg',
    //     },
    //     items: [
    //       {
    //         type: 'docSidebar',
    //         sidebarId: 'tutorialSidebar',
    //         position: 'left',
    //         label: 'Tutorial',
    //       },
    //       {to: '/blog', label: 'Blog', position: 'left'},
    //       {
    //         href: 'https://github.com/facebook/docusaurus',
    //         label: 'GitHub',
    //         position: 'right',
    //       },
    //     ],
    //   },
    //   footer: {
    //     style: 'dark',
    //     links: [
    //       {
    //         title: 'Docs',
    //         items: [
    //           {
    //             label: 'Tutorial',
    //             to: '/docs/intro',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'Community',
    //         items: [
    //           {
    //             label: 'Stack Overflow',
    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //           },
    //           {
    //             label: 'Discord',
    //             href: 'https://discordapp.com/invite/docusaurus',
    //           },
    //           {
    //             label: 'Twitter',
    //             href: 'https://twitter.com/docusaurus',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'More',
    //         items: [
    //           {
    //             label: 'Blog',
    //             to: '/blog',
    //           },
    //           {
    //             label: 'GitHub',
    //             href: 'https://github.com/facebook/docusaurus',
    //           },
    //         ],
    //       },
    //     ],
    //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    //   },
    //   prism: {
    //     theme: prismThemes.github,
    //     darkTheme: prismThemes.dracula,
    //   },
    // } satisfies Preset.ThemeConfig,
    plugins: [
        () => ({
            name: "custom-webpack-plugin",
            configureWebpack()
            {
                return {
                    module: {
                        rules: [
                            {
                                test: /.*cpp$/,
                                use: "raw-loader",
                            },
                            {
                                test: /.*cmake$/,
                                use: "raw-loader",
                            },
                        ],
                    },
                };
            },
        }),
    ],
};

export default config;
