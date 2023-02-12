<script setup lang="ts">
import TheButton from "../components/TheButton.vue";
import NavModal from "./NavModal.vue";

import recipes from "../recipe.json";
import cook from "../cook.json";

import { ref } from "vue";

const modal = ref(false);

const prop = ref();
</script>

<template>
  <header>
    <picture nopin="nopin" class="recirc-image" data-v-7bf7b230=""
      ><source
        srcset="
          https://media-cdn.greatbritishchefs.com/media/kxtop14a/gbc_logo1.svg
        "
        type="image/svg+xml"
        data-v-7bf7b230="" />
      <img
        src="https://media-cdn.greatbritishchefs.com/media/roufmtew/img50118.png"
        nopin="nopin"
        class="menu-logo"
        data-v-7bf7b230=""
    /></picture>

    <div>
      <nav>
        <span
          ><a href="/">KITCHEN</a> | <a href="/">GREAT ITALIAN CHEFS</a></span
        >

        <TheButton title="VISIT OUR SHOP" bkgr="#facd02" color="#000" />
        <TheButton title="Join our club" bkgr="#000" />
        <TheButton title="Members Area" bkgr="#bba250" />

        <span
          ><router-link to="/" text="Sign in" /> |
          <router-link to="/" text="Register"
        /></span>
      </nav>

      <nav>
        <NavModal :props="prop" v-if="modal" @close="!modal" />

        <ul>
          <li @click="(modal = !modal), (prop = recipes)">
            Recipe
            <i class="icon-menu-down" />
          </li>

          <router-link to="/" text="Chefs" tag="li" />
          <router-link to="/" text="Restaurants" />

          <li @click="(modal = !modal), (prop = cook)">
            How to Cook
            <i class="icon-menu-down" />
          </li>

          <router-link to="/" text="Features" />
          <router-link to="/competitions" :text="'Competitions'" />

          <form action="#">
            <input type="text" placeholder="search" />

            <i class="icon-search-solid" />
          </form>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background: #fff;
  border-bottom: 8px solid rgb(124, 124, 124);
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 99;

  picture {
    padding: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    nav {
      display: flex;
      white-space: nowrap;
      height: 100%;

      &:first-child {
        background: #3d3d3d;

        span {
          align-items: center;
          display: flex;
          gap: 20px;
          padding: 0 20px;

          a {
            color: #fff;
          }

          &:first-child {
            margin: 0 auto 0 0;
          }
        }
      }

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
            display: inline;
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
</style>
