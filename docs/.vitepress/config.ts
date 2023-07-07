import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

import locales from "./locales";

export default defineConfig({
  base: "/vitepress-blog/",
  title: "jiushi21-blog",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // 默认主题
  appearance: "dark",

  // // i18n
  locales: {
    root: locales.zc,
  },

  // 从URL中删除尾随的.html
  cleanUrls: true,

  // 显示更新时间
  lastUpdated: true,

  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
    config: (md) => {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },

  themeConfig: {
    // 大纲
    outline: "deep",

    // 网站header部分标题
    siteTitle: "jiushi21-blog",
    logo: "/fate.jpg",

    // 社交账号链接
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zclsx",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
