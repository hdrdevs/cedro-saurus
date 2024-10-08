import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Cedro",
    tagline: "Build complex user interfaces easily",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://cedro.hdrdevs.com.ar",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "hdrdevs", // Usually your GitHub org/user name.
    projectName: "Cedro", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    //editUrl:
                    //    "https://github.com/hdrdevs/cedro-saurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //    "https://github.com/hdrdevs/cedro-saurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Cedro",
            logo: {
                alt: "Cedro Logo",
                src: "img/cedro-logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Docs",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/hdrdevs/cedro",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorial",
                            to: "/docs/intro",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/cedro",
                        },

                        {
                            label: "npm",
                            href: "https://npmjs.com/cedro",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/hdrdevs/cedro",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} cedro.hdrdevs.com.ar`,
        },
        prism: {
            theme: prismThemes.gruvboxMaterialLight,
            darkTheme: prismThemes.gruvboxMaterialDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
