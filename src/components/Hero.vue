<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div>
      <h1>Great British Chefs</h1>

      <p>Inspiring food lovers everywhere</p>
    </div>

    <div>
      <p>This week on Great British Chefs</p>

      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <path
            d="M9.879 11.453 16 17.56l6.121-6.106L24 13.332l-8 8-8-8Zm0 0"
            style="
              stroke: none;
              fill-rule: nonzero;
              fill: #fff;
              fill-opacity: 1;
            "
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background: #ccc;
  display: flex;
  flex-direction: column;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    max-width: 1360px;
    width: 100%;

    h1 {
      color: #fff;
      font-size: 60px;
    }

    p {
      color: #fff;
    }

    &:last-child {
      margin: auto auto 0;

      button {
        background: rgba(255, 255, 255, 0.152);
        border: 1px solid #fff;
        max-width: 200px;
      }
    }
  }
}
</style>
