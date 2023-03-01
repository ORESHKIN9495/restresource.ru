<script setup lang="ts"></script>

<template>
  <section>
    <i class="icon-close" />

    <div>
      <ul>
        <p></p>

        <li></li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background: #e2e2e2;
  left: 0;
  position: fixed;
  padding-left: calc(29px + 12.2%);
  padding-right: calc(29px + 12.2%);
  top: 95px;
  width: 100%;
  z-index: 99;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    margin: 40px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &:nth-child(-n + 5) {
      border-bottom: 1px solid #c1c0c1;
      padding-bottom: 40px;
    }

    p {
      font-weight: 400;
      margin-bottom: 10px;
    }

    li {
      position: relative;

      &:hover {
        transform: translateX(10px);

        &::before {
          content: "—";
          position: absolute;
          margin: auto 0 auto -20px;
        }
      }
    }
  }

  .icon-close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 28px;
  }
}
</style>
