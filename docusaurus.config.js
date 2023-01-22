// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/palenight');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saucer',
  tagline: 'Next-Gen desktop apps with web-frontend in C++',

  baseUrl: '/',
  favicon: 'img/favicon.ico',
  url: 'https://saucer.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  projectName: 'saucer', // Usually your repo name.
  organizationName: 'saucer', // Usually your GitHub org/user name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Saucer',
        logo: {
          alt: 'Logo',
          src: 'img/logo_no_text.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/saucer/saucer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/saucer',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ndhmQE4225',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Saucer`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    () => ({
      name: 'custom-webpack-plugin',
      configureWebpack() {
        return {
          module: {
            rules: [
              {
                test: /.*cpp$/,
                use: 'raw-loader',
              }
            ],
          },
        };
      },
    }),
  ]
};

module.exports = config;
