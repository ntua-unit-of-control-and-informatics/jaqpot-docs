module.exports = {
  title: 'Jaqpot',
  tagline: 'train. Deploy. Share.',
  url: 'https://www.jaqpot.org',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/jaqpot.svg',
  organizationName: 'euclia', // Usually your GitHub org/user name.
  projectName: 'euclia-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jaqpot',
      logo: {
        alt: 'Jaqpot Logo',
        src: 'img/jaqpot.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/sklearn',
          activeBasePath: 'docs/sklearn',
          label: 'Deploy',
          position: 'left',
        },
        {
          to: 'docs/spam',
          activeBasePath: 'docs/usecases',
          label: 'Use Cases',
          position: 'left',
        },
        {
          to: 'docs/projects',
          activeBasePath: 'docs/projects',
          label: 'Projects using Jaqpot',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        // {
        //   href: 'https://github.com/euclia',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Jaqpot',
              to: 'docs/',
              activeBasePath: 'docs',
              label: 'Docs',
            },
            {
              label: 'Clients',
              to: 'docs/sklearn',
            },
            {
              label: 'SDK',
              to: 'docs/.NET',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/euclia',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Gitter',
              href: 'https://gitter.im/euclia-xyz/jaqpot',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/euclia1',
            },
          ],
        },
        {
          title: 'Legal',
          items:[
            {
              //Renders the html pass-through instead of a simple link
              html: `
                  <div style="font-size: x-small">
                    <img style="width: 52%" src="/img/eu.jpg" alt="Deploys by Netlify" />
                    <p>This project has received funding from European Union Horizon 2020 Programme</p>
                  </div>

                  <div style="font-size: x-small">
                    <a href="https://www.ntua.gr" target="_blank" rel="noreferrer noopener">
                      <img style="width: 22%" src="/img/ntua.jpg" />
                    </a>

                    <p>Developed at NTUA by 
                      <a href="https://www.chemeng.ntua.gr/labs/control_lab/" target="_blank" rel="noreferrer noopener">UPCI</a>
                    </p>

                  </div>




                  <div style="font-size: x-small">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                `,
            },
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Euclia, Inc.`,
    },
    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
