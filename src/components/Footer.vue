<script setup lang="ts">
import navigate from "../navigate.json";
</script>

<template>
  <footer>
    <section>
      <div>
        <p>© 2023</p>

        <hr />

        <button>Manage cookies</button>
      </div>

      <div>
        <h3>NAVIGATE</h3>

        <ul v-for="i in navigate.Navigate">
          <router-link to="/" custom v-slot="{ navigate }">
            <li :click="navigate">{{ i }}</li>
          </router-link>
        </ul>
      </div>

      <div>
        <h3>INFORMATION</h3>

        <ul v-for="i in navigate.Information">
          <router-link to="/" custom v-slot="{ navigate }">
            <li :click="navigate">
              {{ i }}
            </li>
          </router-link>
        </ul>
      </div>

      <div>
        <h3>Follow</h3>

        <span>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
        </span>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: #3d3d3d;

  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1360px;
    margin: auto;
    padding: 20px 0;

    div {
      align-content: baseline;
      display: grid;
      gap: 20px;

      h3 {
        color: #fff;
      }

      p {
        color: #595959;
      }

      ul {
        li {
          color: #fff;
        }
      }

      button {
        border: 1px solid #595959;
        text-transform: uppercase;
      }

      hr {
        background: #595959;
      }
    }

    &:last-child {
      span {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        a {
          background: #595959;
          border-radius: 50px;
          padding: 15px;
        }
      }
    }
  }
}

@media only screen and (max-width: 860px) {
  footer {
    section {
      grid-template-columns: 1fr;
      padding: 0;

      div {
        h3 {
          display: none;
        }

        &:first-child {
          order: 4;
        }

        &:nth-child(2) {
          background: #fff;
          gap: 0;
          text-align: center;

          ul {
            border-top: 1px solid #ccc;
            padding: 20px;

            li {
              color: #000;
              font-weight: 400;
            }
          }
        }

        &:nth-child(3) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        &:last-child {
          justify-content: center;
        }
      }
    }
  }
}
</style>
