<script setup lang="ts">
import Card from "../components/Card.vue";
import article from "../http/article/article.json";
</script>

<template>
  <section class="article" v-for="item in article">
    <h1>{{ item.title }}</h1>

    <picture></picture>

    <h2>{{ item.title }}</h2>

    <div class="first_child">
      <p>
        {{ item.description }}
      </p>
    </div>

    <div class="last_child">
      <article>
        <span>
          <h3>Social Media</h3>

          <p>{{ item.social }}</p>

          <p>See all Ramael's recipes</p>
        </span>

        <p>
          {{ item.article.first }}
        </p>

        <span></span>
      </article>

      <Card :quant="2" />

      <article>
        <span></span>

        <p>
          {{ item.article.last }}
        </p>

        <span></span>
      </article>

      <p>You may also like</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 150px 0;

  h1,
  h2 {
    font-size: 30px;
    text-align: center;
  }

  picture {
    background: #ccc;
    padding: 200px;
  }
}

.last_child {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 20px auto;
  max-width: 1360px;

  article {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 40px;

    span {
      display: block;
      padding: 300px 150px;

      &:last-child {
        background: #ccc;
      }

      &:first-child {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0;

        h3 {
          border-top: 1px solid #ccc;
          color: #545454;
          padding: 20px 0 0;
        }

        p {
          color: rgb(114, 114, 114);

          &:last-child {
            border-top: 1px solid #ccc;
            color: #727272;
            font-weight: 400;
            padding: 20px 0 0;
          }
        }
      }
    }
  }
}

.first_child {
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;

  p {
    color: #545454;
    font-style: italic;
    font-weight: 400;
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
  }
}
</style>
