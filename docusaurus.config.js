// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CEXSwap | the Decentralized Exchange (DEX)',
  tagline: 'CEXSwap is an decentralized exchange (DEX) open source project that will work for any EVM compatible chain.',
  url: 'https://www.cexswap.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cexswap_ico.ico',
  organizationName: 'cexswap', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themes: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cexswap/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cexswap/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/web.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CEXSwap',
        logo: {
          alt: 'CEXSwap',
          src: 'img/cexswap_logo.png',
        },
        items: [
          {
            label: 'About',
            position: 'left',
            href: '#about'
          },
          {
            label: 'Features',
            position: 'left',
            href: '#features'
          },
          {
            label: 'Whitepaper',
            position: 'left',
            href: '/'
          },
          {
            label: 'Roadmap',
            position: 'left',
            href: '#roadmap'
          },
          {
            label: 'Blog',
            position: 'left',
            href: 'https://medium.com/@cexswap'
          },
          {
            label: 'Open Source',
            position: 'left',
            items: [
              {
                label: 'Contracts',
                href: 'https://github.com/cexswap/contracts',
              },
              {
                label: 'Token',
                href: 'https://github.com/cexswap/token',
              },
              {
                label: 'Website',
                href: 'https://github.com/cexswap/website',
              }
            ]
          },
          {
            href: 'https://github.com/cexswap',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking for backers and core contributors, please <a target="_blank" rel="noopener noreferrer" href="mailto:investors@cexswap.org">contact us</a> if possible.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
