module.exports = {
  title: "Stars Tracker Blogs",
  tagline: "Blogs for stars tracker",
  url: "https://blog.starstracker.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "abh80", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  onBrokenLinks: "ignore",
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "policies",
        path: "policies",
        editUrl: "https://github.com/abh80/blogs/tree/master",
        routeBasePath: "policies",
        sidebarPath: require.resolve("./sidebarPolicies.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guide",
        path: "guides",
        editUrl: "https://github.com/abh80/blogs/tree/master",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebarGuides.js"),
        remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "src/pages/guides",
        routeBasePath: "guides",
        id: "guide",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "src/pages/account",
        routeBasePath: "account",
        id: "account",
      },
    ],
  ],
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    hideableSidebar: true,
    navbar: {
      title: "Stars Tracker Blogs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "guides/",
          label: "Guides",
          position: "left",
        },
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
              label: "Guide",
              to: "guides/",
            },
            {
              label: "GitHub",
              href: "https://github.com/abh80/blogs",
            },
          ],
        },
        {
          title: "Home",
          items: [
            {
              label: "Home",
              to: "/",
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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/abh80/blogs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
