<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const router = useRouter();

const selectedItem = ref();
const disabled = ref(false);

const regExpUser = /^[a-z0-9_-]{3,16}$/;
const regExpPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

const setActive = (index: any) => (selectedItem.value = index);

const errRegExpUser = ref(false);
const errRegExpPass = ref(false);

const userData = {
  username: {
    value: "",
    placeholder: "Username ",
    err: false,
    type: "text",
  },
  password: {
    value: "",
    placeholder: "Password",
    err: false,
    type: "text",
  },
};

const validation = () => {
  if (userData.username.value == "") {
    userData.username.err = true;
    userData.username.placeholder = "Поле должго быть заполнено";
    disabled.value = true;
  } else if (!regExpUser.test(userData.username.value)) {
    disabled.value = true;
    userData.username.err = true;
    errRegExpUser.value = true;
  } else {
    userData.username.err = false;
    errRegExpUser.value = false;
    userData.username.placeholder = "Username ";
    disabled.value = false;
  }

  if (userData.password.value == "") {
    userData.password.err = true;
    userData.password.placeholder = "Поле должго быть заполнено";
    disabled.value = true;
  } else if (!regExpPass.test(userData.password.value)) {
    userData.password.err = true;
    errRegExpPass.value = true;
    disabled.value = true;
  } else {
    userData.password.err = false;
    errRegExpPass.value = false;
    userData.password.placeholder = "Password";
    disabled.value = false;

    localStorage.setItem("username", userData.username.value);
    localStorage.setItem("password", userData.password.value);
    router.push({ path: "/" });
  }
};

const postData = () => {
  validation();
};
</script>

<template>
  <section>
    <form action="#" method="POST" @submit.prevent="postData">
      <h1>Sign In</h1>

      <input
        v-for="(i, index) in userData"
        :type="i.type"
        :placeholder="i.placeholder"
        v-model.trim="i.value"
        :class="{ active: index == selectedItem, err: i.err }"
        @click="setActive(index)"
      />

      <p v-if="errRegExpUser">Введите корректное значение имени пользователя</p>
      <p v-if="errRegExpPass">Введите корректное значение пароля</p>

      <span>
        <TheButton
          title="Login"
          :g="true"
          type="submit"
          :disabled="disabled == !disabled"
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

        &::placeholder {
          color: #fa0202;
        }
      }
    }

    span {
      display: grid;
      gap: 10px;
    }
  }
}
</style>
