<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const router = useRouter();

const selectedItem = ref();

const disabled = ref(false);

const errTitle = ref("");

const regExpUser = /^[a-z0-9_-]{3,16}$/;
const regExpPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

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

const validate = () => {
  if (userData.username.value == "") {
    userData.username.err = true;
    userData.username.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpUser.test(userData.username.value)) {
    disabled.value = true;
    userData.username.err = true;
    errTitle.value = "Введите корректное значение имени пользователя";
  } else {
    userData.username.err = false;
    errTitle.value = "";
    userData.username.placeholder = "Username";
    disabled.value = false;
  }

  if (userData.password.value == "") {
    userData.password.err = true;
    userData.password.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpPass.test(userData.password.value)) {
    userData.password.err = true;
    errTitle.value = "Введите корректный пароль";
    disabled.value = true;
  } else {
    userData.password.err = false;
    errTitle.value = "";
    userData.password.placeholder = "Password";
    disabled.value = false;

    getData();
  }
};

const getData = () => {
  const userName = localStorage.getItem("username");
  const userPass = localStorage.getItem("password");

  if (
    userData.username.value == userName &&
    userData.password.value == userPass
  ) {
    router.push({ path: "/" });
  }
};

const postData = () => {
  validate();
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
        @focus="selectedItem = index"
        @focusout="selectedItem = null"
        :minlength="3"
        :maxlength="16"
      />

      <p>{{ errTitle }}</p>

      <span>
        <TheButton
          title="Login"
          :g="true"
          type="submit"
          :disabled="disabled == !disabled"
        />
        <TheButton
          title="Go Back"
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
      border-bottom: 2px solid transparent;
      color: #ccc;
      font-size: 16px;
      padding: 10px 0;
      transition: 0.2s ease-in-out;

      &.active {
        border-color: #ccc;
        box-shadow: 0 19px 28px -18px #ccc;
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
