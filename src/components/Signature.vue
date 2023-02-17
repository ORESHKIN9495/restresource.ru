<script setup lang="ts">
import TheButton from "./TheButton.vue";
</script>

<template>
  <section>
    <div>
      <p>
        Have you taken a look at our Signature Series yet? Every Friday we
        release a brand new masterclass from one of our chefs, where they'll
        show you how to recreate their favourite dishes at home – exclusively
        for Great British Chefs Club members.
      </p>

      <TheButton title="Watch now" :e="true" />
    </div>

    <div>
      <h2>Latest recipe videos</h2>

      <p>Robert Chambers' Sheep's Milk Ricotta Tortellini</p>

      <hr />

      <p>Budgie Montoya's Lechon Belly</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  align-items: flex-end;
  background-image: url("https://media-cdn.greatbritishchefs.com/media/zdzhpomd/img87140.whqc_1049x437q90.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border: 8px solid #bba250;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  height: 500px;
  padding: 40px;
  position: relative;

  @media only screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 10px;

    div {
      &:last-child {
        display: none;
      }

      button {
        max-width: 100%;
      }
    }
  }

  &::before {
    background: rgba(0, 0, 0, 0.469);
    content: "";
    inset: 0;
    position: absolute;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1;
  }

  h2 {
    color: #fff;
  }

  p {
    color: #ffff;
  }
}
</style>
