<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style lang="scss">
:root {
  // scheme color

  --scheme-v1: #fff;
  --scheme-v2: #000;
  --scheme-v3: #ccc;
  --scheme-v4: #3d3d3d;
  --scheme-v5: #5b5b5b;
  --scheme-v6: #595959;

  // scheme gap

  --scheme-gap: 40px;
}

@font-face {
  font-display: auto;
  font-family: "Iconly";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/restresource-font/iconly.eot");
  src: url("./assets/fonts/restresource-font/iconly.eot")
      format("embedded-opentype"),
    url("./assets/fonts/restresource-font/iconly.woff2") format("woff2"),
    url("./assets/fonts/restresource-font/iconly.woff") format("woff"),
    url("./assets/fonts/restresource-font/iconly.ttf") format("truetype"),
    url("./assets/fonts/restresource-font/iconly.svg") format("svg");
}

[class="icon"],
[class^="icon-"],
[class*=" icon-"] {
  color: var(--scheme-v2);
  display: inline-block;
  font-family: "Iconly" !important;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.icon-search-solid:before {
  content: "\e000";
}

.icon-menu:before {
  content: "\e001";
}

.icon-close:before {
  content: "\e002";
}

.icon-menu-down:before {
  content: "\e003";
}

.icon-suit-heart:before {
  content: "\e004";
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--scheme-v1);
  color: var(--scheme-v1);
  font: 300 16px / 1.42 Helvetica;
}

a {
  color: var(--scheme-v2);
  font-weight: 400;
  text-decoration: none;
}

h1,
h2,
h3 {
  color: inherit;
  font-weight: 300;
  line-height: 1;
}

h2 {
  font-size: 30px;
}

h3 {
  font-weight: 400;
}

p {
  color: var(--scheve-v5);
}

ul {
  list-style: none;

  li {
    color: var(--scheme-v2);
    cursor: pointer;
  }
}

hr {
  border: none;
  background: #efefef;
  padding: 1px;
}

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

main {
  display: flex;
  flex-direction: column;
}

img {
  display: block;
  height: 100%;
  width: 100%;
}

input {
  background: none;
  border: none;
  outline: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--scheme-v1);
  outline: none;
  padding: 10px 40px;
  width: 100%;
}
</style>
