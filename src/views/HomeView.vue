<script setup lang="ts">
import HeroNav from "../components/HeroNav.vue";
import Card from "../components/Card.vue";
import Signature from "../components/Signature.vue";
</script>

<template>
  <div class="hero">
    <div class="hero__container">
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
    </div>
  </div>

  <div class="container">
    <div class="container__hero">
      <HeroNav />

      <div class="container__grid">
        <h2>I feel it in my fingers</h2>

        <Card :filled="true" :grid="true" :quant="3" />
      </div>
    </div>

    <div class="container__row">
      <h2>Heart-y plates</h2>

      <Card :filled="false" :row="true" :quant="5" />
    </div>

    <div class="container__row">
      <Signature />
    </div>

    <div class="container__grid">
      <h2>The bright shades of winter</h2>

      <Card :filled="true" :grid="true" :quant="3" />
    </div>

    <div class="container__row">
      <h2>Pretty in pink</h2>

      <Card :filled="false" :row="true" :quant="5" />
    </div>

    <div class="latest">
      <h2>Latest from Great British Chefs</h2>

      <div class="latest__grid">
        <Card :filled="false" :row="true" :quant="3" />
        <Card :filled="false" :row="true" :quant="2" />
        <Card :filled="false" :row="true" :quant="3" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  background: #ccc;
  height: 100vh;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    justify-content: center;
    position: relative;
    max-width: 1360px;
    margin: auto;
    padding: 20px;

    div {
      h1 {
        color: #fff;
        font-size: 60px;
      }

      p {
        color: #fff;
      }

      &:last-child {
        bottom: 0;
        left: 20px;
        position: absolute;

        p {
          color: #fff;
          max-width: 135px;
        }

        button {
          background: rgba(255, 255, 255, 0.152);
          cursor: pointer;
          padding: 5px 80px;
          border: 1px solid #fff;
          outline: none;
        }
      }
    }
  }
}

.container {
  max-width: 1360px;
  margin: auto;
  padding: 20px;

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 80px 0;
  }

  &__hero {
    display: flex;
    gap: 20px;
  }
}

.latest {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
