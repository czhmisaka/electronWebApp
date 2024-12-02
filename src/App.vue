<!--
 * @Date: 2024-04-04 22:23:29
 * @LastEditors: CZH
 * @LastEditTime: 2024-04-07 14:51:57
 * @FilePath: /electron-vite-vue/src/App.vue
-->
<script setup lang="ts">
import { ref } from 'vue';

// 为了保证链接回显
const url = ref('http://123.206.222.58/')
const localUrl = localStorage.getItem('mainUrl') || '';
if (localUrl && localUrl.indexOf(url.value) > -1) {
  url.value = localStorage.getItem('mainUrl') as string
}
const urlChange = (e: any) => {
  url.value = e.url
  localStorage.setItem('mainUrl', e.url)
}
</script>

<template>
  <webview ref="webView_main" @load-commit="urlChange" class="mainBox" :src="url" partition></webview>
</template>

<style>
.mainBox {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  border: 0px black solid;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
</style>
