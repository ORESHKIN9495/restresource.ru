<script setup lang="ts">
import navigate from "../navigate.json";
</script>

<template>
  <footer>
    <div class="footer_container">
      <div>
        <p>© 2023</p>

        <hr />

        <button>Manage cookies</button>
      </div>

      <div>
        NAVIGATE
        <ul v-for="i in navigate.Navigate">
          <li>{{ i }}</li>
        </ul>
      </div>

      <div>
        INFORMATION
        <ul v-for="i in navigate.Information">
          <li>{{ i }}</li>
        </ul>
      </div>

      <div>
        Follow

        <span>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: #3d3d3d;

  .footer_container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    max-width: 1360px;
    margin: auto;
    padding: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        color: #595959;
      }

      ul {
        li {
          color: #fff;
        }
      }

      button {
        background: none;
        border: 1px solid #595959;
        padding: 10px 40px;
        text-transform: uppercase;
      }

      hr {
        background: #595959;
      }
    }

    &:last-child {
      span {
        display: flex;
        gap: 20px;

        a {
          background: #595959;
          border-radius: 50px;
          padding: 20px;
        }
      }
    }
  }
}
</style>
