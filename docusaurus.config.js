module.exports = {
  title: "Stars Tracker Blogs",
  tagline: "Blogs for stars tracker",
  url: "https://blog.starstracker.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "abh80", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "policies",
        path: "policies",
        editUrl: "https://github.com/blogs/abh80/blogs",
        routeBasePath: "policies",
        sidebarPath: require.resolve("./sidebarPolicies.js"),
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Stars Tracker Blogs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "blog", label: "Blog", position: "left" },
        { to: "guides", label: "Guides", position: "right" },
        {
          href: "https://github.com/abh80/blogs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/abh80/blogs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abh80, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/abh80/blogs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ah80/blogs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
