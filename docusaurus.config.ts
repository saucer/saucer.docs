import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

const config: Config = {
    title: "Saucer",
    tagline: "A modern, cross-platform C++ webview library",

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
                    {
                        type: "search",
                        position: "right",
                    },
                    {
                        type: "custom-separator",
                        position: "right",
                    },
                    {
                        link: "https://github.com/saucer/saucer",
                        name: "GitHub",
                        position: "right",
                        type: "custom-icon",
                    },
                    {
                        link: "https://discord.gg/ndhmQE4225",
                        name: "Discord",
                        position: "right",
                        type: "custom-icon",
                    },
                    {
                        type: "custom-separator",
                        position: "right",
                        margin: 5,
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
                copyright: `Copyright © 2021-${new Date().getFullYear()} Saucer`,
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
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                indexBlog: false,
                language: ["en"],
            }),
        ],
    ],
};

export default config;
