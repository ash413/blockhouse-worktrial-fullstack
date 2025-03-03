module.exports = {
  title: 'Crypto Price Tracker',
  tagline: 'Documentation for the Crypto Price Tracker project',
  url: 'http://localhost:3000/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ash413',
  projectName: 'blockhouse-worktrial-fullstack',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ash413/crypto-price-tracker-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Crypto Price Tracker',
      logo: {
        alt: 'Crypto Price Tracker Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/ash413/blockhouse-worktrial-fullstack',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'API Integration',
              to: '/docs/architecture/api-integration'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/ash413/blockhouse-worktrial-fullstack/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vaishnavi Kadam. Built with Docusaurus.`,
    },
  },
};