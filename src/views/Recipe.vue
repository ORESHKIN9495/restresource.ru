<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Card.vue";
import Ingredients from "../components/Ingredients.vue";
import RecipeMethod from "../components/RecipeMethod.vue";

const change = ref(true);
</script>

<template>
  <section class="recipe">
    <div>
      <h1>Love Heart macarons</h1>
      <p>by <router-link to="#">Graham Hornigold</router-link></p>
    </div>

    <div>
      <picture
        class="recipe-summary__recipe-images"
        data-v-6657d234=""
        data-v-4722e620=""
      >
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_320x231q90.webp 1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_640x462q90.webp 2x
          "
          media="(max-width:767.98px)"
          type="image/webp"
          data-v-4722e620="" />
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.webp   1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_1536x1024q90.webp 2x
          "
          media="(min-width:768px) and (max-width:991.98px)"
          type="image/webp"
          data-v-4722e620="" />
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.webp   1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_1536x1024q90.webp 2x
          "
          media="(min-width:992px) and (max-width:1199.98px)"
          type="image/webp"
          data-v-4722e620="" />
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.webp   1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_1536x1024q90.webp 2x
          "
          media="(min-width: 1200px)"
          type="image/webp"
          data-v-4722e620="" />
        <!--]--><!--[-->
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_320x231q90.jpg 1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_640x462q90.jpg 2x
          "
          media="(max-width:767.98px)"
          type="image/jpg"
          data-v-4722e620="" />
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.jpg   1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_1536x1024q90.jpg 2x
          "
          media="(min-width:768px) and (max-width:991.98px)"
          type="image/jpg"
          data-v-4722e620="" />
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.jpg   1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_1536x1024q90.jpg 2x
          "
          media="(min-width:992px) and (max-width:1199.98px)"
          type="image/jpg"
          data-v-4722e620="" />
        <source
          srcset="
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.jpg   1x,
            https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_1536x1024q90.jpg 2x
          "
          media="(min-width: 1200px)"
          type="image/jpg"
          data-v-4722e620="" />
        <!--]--><img
          class="w-100 h-100 basic-image"
          src="https://media-cdn.greatbritishchefs.com/media/iqfk1rhy/img22457.whqc_768x512q90.jpg"
          fetchpriority="high"
          data-v-4722e620="" />
        <div></div
      ></picture>

      <article>
        <span>
          <p>Petit four</p>
          <p>challenging</p>
          <p>30</p>
        </span>

        <p>2 hours 15 minutes</p>

        <p>
          This beautiful love heart macaron recipe was created by Hakkasan
          executive pastry chef Graham Hornigold in collaboration with chef
          Sarah Frankland, head of Pastry at Yauatcha. The wonderful pastel
          shade shells are created using food colouring. You can only make one
          colour at a time, so whip up separate batches for a larger variety of
          colours. Crushed Love Heart sweets will add a subtle colour to the
          buttercream filling, but feel free to add a few drops of colour to
          correspond to your chosen shade of shell if you're after a more
          eye-popping shade.
        </p>

        <p>First published in 2015</p>
      </article>
    </div>

    <div>
      <button @click="change = !change">
        Related Recipes
        <svg
          v-if="change == true"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
        >
          <path
            d="M5 15v2h22v-2Zm0 0"
            style="
              stroke: none;
              fill-rule: nonzero;
              fill: #000;
              fill-opacity: 1;
            "
          />
        </svg>

        <svg
          v-else
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
        >
          <path
            d="M15 5v10H5v2h10v10h2V17h10v-2H17V5Zm0 0"
            style="
              stroke: none;
              fill-rule: nonzero;
              fill: #000;
              fill-opacity: 1;
            "
          />
        </svg>
      </button>

      <span v-if="change">
        <Card :quant="5" />
      </span>
    </div>

    <div>
      <Ingredients />
      <RecipeMethod />
      <div></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.recipe {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 150px 0;

  div {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1360px;

    h1 {
      font-size: 30px;
    }

    &:nth-child(2) {
      display: flex;
      gap: 20px;
      text-align: left;

      article {
        display: flex;
        flex-direction: column;
        gap: 20px;

        span {
          display: flex;
          gap: 20px;
        }
      }
    }

    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      background: #f9f9f9;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      text-align: left;
      max-width: 100%;
      padding: 40px 0;
      position: relative;
      align-items: center;

      span {
        display: block;
        max-width: 1360px;
        margin: 0 auto;
        padding: 0;
      }

      button {
        background: #fff;
        border: 1px solid #ccc;
        color: #000;
        cursor: pointer;
        display: flex;
        gap: 20px;
        padding: 10px;
        position: absolute;
        top: -15px;
      }
    }

    &:nth-child(4) {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 20px;

      div {
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>
