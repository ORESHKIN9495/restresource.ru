<script setup lang="ts">
import Card from "../components/Card.vue";
import article from "../http/article/article.json";
</script>

<template>
  <section class="article" v-for="item in article">
    <h1>{{ item.title }}</h1>

    <picture></picture>

    <h2>{{ item.title }}</h2>

    <span class="descr">
      <p>
        {{ item.description }}
      </p>
    </span>

    <div>
      <article>
        <span>
          <h3>Social Media</h3>

          <p>{{ item.social }}</p>

          <p>See all Ramael's recipes</p>
        </span>

        <p>
          {{ item.article.first }}
        </p>
      </article>

      <Card :quant="2" collection="article" />

      <article>
        <p>
          {{ item.article.last }}
        </p>
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

  div {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 20px auto;
    max-width: 1360px;

    article {
      display: flex;
      gap: 40px;

      span {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 0 0 20%;

        @media only screen and (max-width: 780px) {
          & {
            display: none;
          }
        }

        h3 {
          color: #545454;
        }

        p:not(:last-child) {
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          color: rgb(114, 114, 114);
          padding: 20px 0;
        }
      }
    }
  }
}

.descr {
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
