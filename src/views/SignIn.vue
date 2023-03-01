<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const regExpUser = /^[a-z0-9_-]{3,16}$/;

const regExpPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

const router = useRouter();

const selectedItem = ref();

const disabled = ref(false);

interface UserI {
  username: {
    value: string;
    placeholder: string;
    err: boolean;
    type: string;
    name: string;
    errTitle: string;
  };

  password: {
    value: string;
    placeholder: string;
    err: boolean;
    type: string;
    name: string;
    errTitle: string;
  };
}

const users: UserI = {
  username: {
    value: "",
    placeholder: "Username",
    err: false,
    type: "text",
    name: "username",
    errTitle: "",
  },

  password: {
    value: "",
    placeholder: "Password",
    err: false,
    type: "text",
    name: "password",
    errTitle: "",
  },
};

const prepare = (users: UserI) => {
  const err = validate(users);
  if (!err) {
    console.log("Ошибка");
    disabled.value = true;
  } else {
    // отправляем что-то в вуекс

    console.log("отправляю");
  }
};

const validate = (users: UserI) => {
  if (users.username.value == "") {
    users.username.err = true;
    users.username.errTitle = "Поле должно быть заполнено";

    return false;
  } else if (users.username.value.length < 3) {
    users.username.err = true;
    users.username.errTitle = "Имя пользователя должно быть больше 3 символов";

    return false;
  } else if (!regExpUser.test(users.username.value)) {
    users.username.err = true;
    users.username.errTitle = "Введите корректное имя пользователя";

    return false;
  } else {
    users.username.err = false;
    users.username.errTitle = "";
  }

  if (users.password.value == "") {
    users.password.err = true;
    users.password.errTitle = "Поле должно быть заполнено";

    return false;
  } else if (users.password.value.length < 3) {
    users.password.err = true;
    users.password.errTitle = "Пароль должен быть больше 3 символов";

    return false;
  } else if (!regExpPass.test(users.password.value)) {
    users.password.err = true;
    users.password.errTitle = "Введите корректный пароль";

    return false;
  } else {
    users.password.err = false;
    users.password.errTitle = "";
  }

  return true;
};
</script>

<template>
  <section>
    <form action="#" method="POST" @submit.prevent="prepare(users)">
      <h1>Sign Up</h1>

      <label :for="i.name" v-for="(i, index) in users">
        <p>{{ i.errTitle }}</p>

        <input
          :type="i.type"
          :placeholder="i.placeholder"
          v-model.trim="i.value"
          :class="{ active: index == selectedItem, invalid: i.err }"
          @focusin="selectedItem = index"
          @focusout="selectedItem = null"
          :name="i.name"
          @change="validate(users)"
        />
      </label>

      <span>
        <TheButton
          title="Register"
          :f="true"
          type="submit"
          :disabled="disabled == !disabled"
        />
        <TheButton
          title="Go Back"
          :f="true"
          @click.prevent="router.push({ path: '/restresource.ru' })"
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
    position: relative;

    h1 {
      font-size: 30px;
      margin-bottom: 80px;
      color: #ccc;
    }

    label {
      p {
        font-size: 14px;
        color: #fa02023e;
      }
    }

    input {
      border-bottom: 2px solid transparent;
      color: #ccc;
      font-size: 16px;
      padding: 10px 0;
      transition: 0.2s ease-in-out;
      width: 100%;

      &.active {
        border-color: #ccc;
        box-shadow: 0 19px 28px -18px #ccc;
      }

      &.invalid {
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
