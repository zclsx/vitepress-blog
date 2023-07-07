import type { DefaultTheme } from "vitepress";

export default {
  label: "简体中文",
  lang: "zc",
  description: "笔记",
  themeConfig: {
    navbar: true,
    lastUpdatedText: "上次更新",
    outlineTitle: "当前页面",
    editLink: {
      pattern: "https://github.com/zclsx/docs/edit/master",
      text: "在github上编辑此页面",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      {
        text: "关于我",
        link: "/me/index",
        activeMatch: "/me",
      },
      {
        text: "博客",
        link: "/blogs/index",
        activeMatch: "/blogs",
      },
      {
        text: "笔记",
        link: "/notes/index",
        activeMatch: "/notes",
      },
      {
        text: "面试题",
        link: "/private/index",
        activeMatch: "/interview",
      },
      {
        text: "做饭",
        link: "/english/index",
        activeMatch: "/english",
      },
      {
        text: "Demo",
        link: "/demo/index",
        activeMatch: "/demo",
      },
    ] as DefaultTheme.NavItem[],
    sidebar: {
      "/me": [
        {
          text: "关于我",
          items: [
            { text: "简介", link: "/me/introduce" },
            { text: "English Introduction", link: "/me/introduce-eg" },
          ],
        },
      ],
      "/blogs": [
        {
          text: "博客",
          items: [],
        },
      ],
      "/notes": [
        {
          text: "HTML",
          collapsed: true,
          items: [],
        },
        {
          text: "CSS",
          collapsed: true,
          items: [],
        },
        {
          text: "JavaScript",
          collapsed: true,
          items: [],
        },
        {
          text: "Typescript",
          collapsed: true,
          items: [],
        },
        {
          text: "Vue",
          collapsed: true,
          items: [],
        },
        {
          text: "Vitest",
          collapsed: true,
          items: [],
        },
        {
          text: "前端工程化",
          collapsed: true,
          items: [],
        },
        {
          text: "浏览器",
          collapsed: true,
          items: [],
        },
        {
          text: "Http",
          collapsed: true,
          items: [],
        },
        {
          text: "算法",
          collapsed: true,
          items: [],
        },
      ],
      "/english": [
        {
          text: "做饭",
          items: [],
        },
      ],
      "/demo": [
        {
          text: "demo",
          items: [],
        },
      ],
      "/private": [
        {
          text: "Interview List",
          items: [],
        },
      ],
    } as DefaultTheme.Sidebar,
  },
};
