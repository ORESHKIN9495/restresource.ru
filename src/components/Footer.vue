<script setup lang="ts">
import navigate from "../http/navigate.json";
import TheButton from "./TheButton.vue";
</script>

<template>
  <footer>
    <section>
      <div>
        <p v-text="`© 2023`" />

        <TheButton title="Manage cookies" :e="true" />
      </div>

      <div>
        <h3 v-text="`NAVIGATE`" />

        <ul v-for="i in navigate.Navigate">
          <li>
            <router-link to="/restresource.ru" :text="i" />
          </li>
        </ul>
      </div>

      <div>
        <h3 v-text="`INFORMATION`" />

        <ul v-for="i in navigate.Information">
          <li>
            <router-link to="/restresource.ru" :text="i" />
          </li>
        </ul>
      </div>

      <div>
        <h3>Follow</h3>

        <ul>
          <li>
            <router-link to="/restresource.ru" />
          </li>

          <li>
            <router-link to="/restresource.ru" />
          </li>

          <li>
            <router-link to="/restresource.ru" />
          </li>

          <li>
            <router-link to="/restresource.ru" />
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: var(--scheme-v4);

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
        color: var(--scheme-v1);
      }

      p {
        color: var(--scheme-v6);
        border-bottom: 1px solid var(--scheme-v6);
        padding-bottom: 20px;
      }

      ul {
        li {
          a {
            color: var(--scheme-v1);
          }
        }
      }

      &:last-child {
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          li {
            background: var(--scheme-v6);
            border-radius: 50px;
            padding: 15px;
          }
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
          color: var(--scheme-v1);
          gap: 0;
          text-align: center;

          ul {
            border-top: 1px solid var(--scheme-v3);
            padding: 20px;

            li {
              color: var(--scheme-v2);
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
