<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section>
    <h1>Join our Club</h1>

    <p>
      Become a Silver or Gold member of the Great British Chefs Club today and
      gain unlimited access to over 10,000 recipes, features, guides and videos
      – plus many more benefits and perks. Already a member? Sign in via the
      header menu, then come back to this page to upgrade.
    </p>

    <div>
      <ul>
        <h2>
          Free

          <p>0 <small>₽</small></p>
        </h2>

        <span>What you get:</span>

        <li>
          Access to over 10,000 recipes, features and guides (capped at five per
          day)
        </li>

        <button @click="router.push({ path: '/restresource.ru/signup' })">
          Register
        </button>
      </ul>

      <ul>
        <h2>
          Silver

          <p>3822 <small>₽</small></p>
        </h2>

        <span>What you get:</span>

        <li>Unlimited access to over 10,000 recipes, features and guides</li>

        <li>
          Exclusive new chef recipes and in-depth features, six months before
          everyone else
        </li>

        <li>Our Signature Series of in-depth chef masterclass videos</li>

        <li>
          Exclusive discounts, offers and competitions with a much higher than
          average chance of winning
        </li>

        <button>Join Silver</button>
      </ul>

      <ul>
        <h2>
          Gold

          <p>6552 <small>₽</small></p>
        </h2>

        <span>What you get:</span>

        <li>Everything in Silver, plus:</li>

        <li>
          Free gifts delivered to your door for every three months of being a
          member, including exclusive products only available to Gold members
        </li>

        <li>
          Exclusive super-premium competitions, including money-can't-buy prizes
          (for Gold members only)
        </li>

        <li>
          Perks, offers and discounts for restaurants, at-home kits and food and
          drink products
        </li>

        <li>A gift on your birthday from us to you!</li>

        <button>Join Gold</button>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 40px;
  text-align: center;
  margin: 20px auto;

  p {
    max-width: 900px;
    margin: auto;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    text-align: center;
  }

  div {
    display: flex;
    gap: 20px;
    max-width: 1360px;
    margin: auto;

    @media only screen and (max-width: 996px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    ul {
      border: 2px solid #739fa5;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 40px;
      justify-items: center;
      max-width: 400px;
      text-align: left;

      button {
        background: #739fa5;
        margin: auto 0 0;
      }

      &:nth-child(2) {
        border-color: var(--scheme-v3);

        button {
          background: var(--scheme-v3);
        }
      }

      &:last-child {
        border-color: #bba250;

        button {
          background: #bba250;
        }
      }
    }
  }
}
</style>
