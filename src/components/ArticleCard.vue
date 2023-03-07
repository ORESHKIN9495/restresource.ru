<script setup lang="ts">
defineProps({
  anotation: {
    type: Boolean,
  },
});
</script>

<template>
  <article>
    <picture>
      <img
        src="../assets/image/ben-koorengevel-Vd0_Htlb-Kk-unsplash.jpg"
        alt="a duck is swimming in a pond with ice"
      />

      <span class="overlay">
        <i class="icon-suit-heart" />

        <i class="icon-menu" />
      </span>
    </picture>

    <h3 v-text="`Venetian`" />

    <p v-text="`Recipe collection`" />

    <p
      v-if="anotation"
      v-text="
        `  Italian food varies greatly depending on what part of the country youre in. Get to know more about the northern parts of Italy – from the jagged mountains of the Dolomites to the beautiful coastline of Liguria – and try recreating the dishes that make them culinary hotspots.`
      "
    />
  </article>
</template>

<style scoped lang="scss">
article {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  p {
    color: var(--scheme-v4);
    font-size: 14px;
  }

  picture {
    position: relative;
    transition: 0.3s ease-in-out;

    span {
      align-items: end;
      background: #00000092;
      display: flex;
      gap: 10px;
      inset: 0;
      opacity: 0;
      position: absolute;
      padding: 20px;
      transition: 0.2s ease-in-out;

      &:hover {
        opacity: 1;
      }

      i {
        border: 1px solid var(--scheme-v1);
        color: var(--scheme-v1);
        font-size: 16px;
        padding: 10px;
        transition: 0.3s ease-in-out;

        &:hover {
          background: #ffffff4f;
        }
      }
    }
  }
}
</style>
