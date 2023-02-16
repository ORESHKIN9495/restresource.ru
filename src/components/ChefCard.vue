<script setup lang="ts"></script>

<template>
  <section>
    <img
      src="https://media-cdn.greatbritishchefs.com/media/jyrne5a3/img19417.whqc_360x175q90fpt215fpl500.jpg"
    />

    <span>
      <router-link to="#">Graham Hornigold</router-link>
    </span>

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

  span {
    border-bottom: 1px solid #ccc;
    display: block;
    padding: 20px;
  }

  p {
    padding: 20px;
    text-align: left;
  }
}
</style>
