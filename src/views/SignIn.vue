<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const router = useRouter();

const selectedItem = ref();

const setActive = (index: any) => (selectedItem.value = index);

const active = ref(false);
const err = ref(false);

const userData = ref({
  username: {
    value: "",
    placeholder: "Username or Email Address",
  },
  password: {
    value: "",
    placeholder: "Password",
  },
});

const postData = () => {
  userData.value.username.value = userData.value.password.value = "";
};
</script>

<template>
  <section>
    <form action="#" method="POST" @submit.prevent="postData">
      <h1>Sign In</h1>

      <input
        v-for="(i, index) in userData"
        type="text"
        :placeholder="i.placeholder"
        v-model.trim="i.value"
        :class="{ active: index == selectedItem, err: err }"
        @click="setActive(index)"
      />

      <span>
        <TheButton title="Login" :g="true" type="submit" />
        <TheButton
          title="Cancel"
          :g="true"
          @click.prevent="router.push({ path: '/' })"
        />
        <TheButton
          title="Forgot your password?"
          :g="true"
          @click.prevent="router.push({ path: '/' })"
        />
      </span>
    </form>
  </section>
</template>

<style scoped lang="scss">
section {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  color: #fa0202;

  form {
    background: #fff;
    box-shadow: 0 20px 30px 0 #ccc;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 600px;
    padding: 80px;
    width: 100%;

    h1 {
      font-size: 30px;
      margin-bottom: 80px;
      color: #ccc;
    }

    input {
      border: none;
      background: none;
      border-bottom: 2px solid transparent;
      color: #ccc;
      font-size: 20px;
      outline: none;
      padding: 10px 0;
      transition: 0.2s ease-in-out;

      &.active {
        border-color: #facd02;
        box-shadow: 0 19px 28px -18px #facd02;
      }

      &.err {
        border-color: #fa0202;
        box-shadow: 0 19px 28px -18px #fa02027b;
      }
    }

    span {
      display: grid;
      gap: 10px;
    }
  }
}
</style>
