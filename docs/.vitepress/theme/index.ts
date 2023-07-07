import Theme from "vitepress/theme";
import "./style/var.css";
import "./style/rainbow.css";

import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";

export default {
  ...Theme,
  enhanceApp({ app, router }) {
    app.component("demo-preview", AntDesignContainer);

    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
};
