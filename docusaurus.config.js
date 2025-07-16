// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "全栈工程师教程",
  tagline: "轻松的学习",
  url: "https://idealjs.github.io",
  baseUrl: "/full-stack-tutorial/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "idealjs",
  projectName: "full-stack-tutorial",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/idealjs/full-stack-tutorial/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/idealjs/full-stack-tutorial/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "全栈工程师教程",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "快速开始",
          },
          { to: "blog", label: "博客", position: "left" },
          {
            href: "https://github.com/idealjs/full-stack-tutorial",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} idealjs.com. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

module.exports = config;
