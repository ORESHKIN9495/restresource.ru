<script setup lang="ts">
import TheButton from "./components/TheButton.vue";
import RecipeModal from "./components/RecipeModal.vue";
import CookModal from "./components/CookModal.vue";

import navigate from "./navigate.json";

import { ref } from "vue";

const showRec = ref(false);
const showCook = ref(false);
</script>

<template>
  <header>
    <picture nopin="nopin" class="recirc-image" data-v-7bf7b230=""
      ><source
        srcset="
          https://media-cdn.greatbritishchefs.com/media/px5dew3a/gic_logo.svg
        "
        type="image/svg+xml"
        data-v-7bf7b230=""
      />
      <img
        src="https://media-cdn.greatbritishchefs.com/media/amsf5fw5/img50119.png"
        nopin="nopin"
        class="menu-logo"
        data-v-7bf7b230=""
      />
    </picture>

    <div class="navigate">
      <nav>
        <span
          ><a href="/">KITCHEN</a> | <a href="/">GREAT BRITISH CHEFS</a></span
        >

        <TheButton title="VISIT OUR SHOP" bkgr="#facd02" color="#000" />
        <TheButton title="Join our club" bkgr="#000" />
        <TheButton title="Members Area" bkgr="#bba250" />

        <span><a href="/">Sign in</a> | <a href="/">Register</a></span>
      </nav>

      <nav>
        <RecipeModal v-if="showRec" @close="showRec = !showRec" />
        <CookModal v-if="showCook" @close="showCook = !showCook" />

        <ul>
          <li @click="showRec = !showRec && showCook == false">
            Recipe <i class="icon-menu-down" />
          </li>
          <li>Chefs</li>
          <li>Restaurants</li>
          <li @click="showCook = !showCook && showRec == false">
            How to Cook <i class="icon-menu-down" />
          </li>
          <li>Features</li>
          <li>Competitions</li>

          <form action="#">
            <input type="text" placeholder="search" />

            <i class="icon-search-solid" />
          </form>
        </ul>
      </nav>
    </div>
  </header>

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

header {
  background: #fff;
  border-bottom: 8px solid rgb(124, 124, 124);
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  picture {
    padding: 20px;

    img {
      width: 262px;
      height: 62px;
      position: relative;
      margin-right: 20px;
      margin-left: 12px;
    }
  }

  .navigate {
    display: flex;
    flex-direction: column;
    width: 100%;

    nav {
      display: flex;
      white-space: nowrap;
      height: 100%;

      &:first-child {
        background: #3d3d3d;
        display: flex;

        button {
          border: none;
          outline: none;
          padding: 13px 16px;
        }

        span {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 20px;

          &:first-child {
            margin: 0 auto 0 0;
          }
        }
      }

      &:last-child {
        ul {
          align-items: center;
          display: flex;
          gap: 20px;
          padding: 0 20px;
          width: 100%;

          li {
            cursor: pointer;
            font-weight: 400;

            i {
              font-size: 16px;
            }
          }

          form {
            align-items: center;
            border-left: 1.5px solid #efefef;
            display: flex;
            height: 100%;
            margin: 0 0 0 auto;
            max-width: 400px;
            width: 100%;

            input {
              border: none;
              color: #000;
              outline: none;
              padding: 0 20px;
              width: 100%;
            }
          }
        }
      }
    }
  }
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
