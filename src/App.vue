<script setup lang="ts">
import navigate from "./navigate.json";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="footer_container">
      <div>
        <p>© 2023</p>

        <hr />

        <button>Manage cookies</button>
      </div>

      <div>
        NAVIGATE
        <ul v-for="i in navigate.Navigate">
          <li>{{ i }}</li>
        </ul>
      </div>

      <div>
        INFORMATION
        <ul v-for="i in navigate.Information">
          <li>{{ i }}</li>
        </ul>
      </div>

      <div>
        Follow

        <span>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
        </span>
      </div>
    </div>
  </footer>
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
  background: #efefef;
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

main {
  background: #fff;
}

footer {
  background: #3d3d3d;

  .footer_container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    max-width: 1360px;
    margin: auto;
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        color: #595959;
      }

      ul {
        li {
          color: #fff;
        }
      }

      button {
        background: none;
        border: 1px solid #595959;
        padding: 10px 40px;
        text-transform: uppercase;
      }

      hr {
        background: #595959;
      }
    }

    &:last-child {
      span {
        display: flex;
        gap: 20px;

        a {
          background: #595959;
          border-radius: 50px;
          padding: 20px;
        }
      }
    }
  }
}
</style>
