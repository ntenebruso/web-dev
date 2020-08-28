module.exports = {
  title: 'Learn Web Development',
  tagline: "Learn Web Development with Nick's Web Dev Course",
  url: 'https://nickforthewin.github.io',
  baseUrl: '/web-dev/',
  favicon: 'img/favicon.ico',
  organizationName: 'nickforthewin', // Usually your GitHub org/user name.
  projectName: 'web-dev', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Nick's Web Dev Course",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/html_info',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nickforthewin/web-dev',
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
              label: 'HTML Course',
              to: 'docs/doc1',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nickforthewin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nick's Web Dev Course. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nickforthewin/web-dev/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
