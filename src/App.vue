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
  color: #000;
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
  color: #fff;
  font: 300 16px / 1.42 Helvetica;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}

a {
  color: #000;
  font-weight: 400;
  text-decoration: none;
}

h1,
h2,
h3 {
  color: #000;
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
  color: #000;
}

ul {
  list-style: none;

  li {
    color: #000;
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
  outline: none;
  padding: 10px 40px;
}
</style>
