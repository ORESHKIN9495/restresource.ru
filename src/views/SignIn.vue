<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const router = useRouter();

const selectedItem = ref();
const disabled = ref(false);

const setActive = (index: any) => (selectedItem.value = index);

const userData = ref({
  username: {
    value: "",
    placeholder: "Username or Email Address",
    err: false,
  },
  password: {
    value: "",
    placeholder: "Password",
    err: false,
  },
});

const invalid = () => {
  if (userData.value.username.value == "") {
    userData.value.username.err = true;
    disabled.value = true;
  } else if (userData.value.password.value == "") {
    userData.value.password.err = true;
    disabled.value = true;
  } else {
    userData.value.username.err = false;
    userData.value.password.err = false;
    disabled.value = false;
    postData();
  }
};

const postData = () => {
  userData.value.username.value = userData.value.password.value = "";
};
</script>

<template>
  <section>
    <form action="#" method="POST">
      <h1>Sign In</h1>

      <input
        v-for="(i, index) in userData"
        type="text"
        :placeholder="i.placeholder"
        v-model.trim="i.value"
        :class="{ active: index == selectedItem, err: i.err }"
        @click="setActive(index)"
      />

      <span>
        <TheButton
          title="Login"
          :g="true"
          type="submit"
          :disabled="disabled == !disabled"
          @click.prevent="invalid()"
        />
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
