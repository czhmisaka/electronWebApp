/*
 * @Date: 2024-04-04 22:23:29
 * @LastEditors: CZH
 * @LastEditTime: 2024-04-07 11:14:41
 * @FilePath: /electron-vite-vue/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "./demos/ipc";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'
createApp(App)
  .use(ElementPlus)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
