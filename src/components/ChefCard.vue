<script setup lang="ts"></script>

<template>
  <section>
    <picture>
      <source
        srcset="
          https://media-cdn.greatbritishchefs.com/media/jyrne5a3/img19417.whqc_145x70q90fpt215fpl500.webp  1x,
          https://media-cdn.greatbritishchefs.com/media/jyrne5a3/img19417.whqc_290x140q90fpt215fpl500.webp 2x
        "
        media="(max-width:767.98px)"
        type="image/webp"
        data-v-4722e620="" />

      <img
        data-v-4722e620=""
        class="w-100 h-100 basic-image"
        src="https://media-cdn.greatbritishchefs.com/media/jyrne5a3/img19417.whqc_360x175q90fpt215fpl500.jpg"
        fetchpriority="auto"
    /></picture>

    <router-link to="#">Graham Hornigold</router-link>

    <p>
      Graham Hornigold’s expert pastry skills have been refined in some of the
      best restaurants and hotels in London, effortlessly adding delicate,
      refreshing touches to dessert menus. Previously group pastry chef at
      Hakkasan Group, he now travels the world with his pastry consultancy
      business Smart Patisserie (as well as producing the best doughnuts you've
      ever tasted under the Longboys brand).
    </p>
  </section>
</template>

<style scoped lang="scss">
section {
  border: 1px solid #ccc;
  flex: 100%;
  height: 100%;

  a {
    border-bottom: 1px solid #ccc;
    display: block;
    font-size: 20px;
    padding: 20px;
  }

  p {
    padding: 20px;
    text-align: left;
  }
}
</style>
