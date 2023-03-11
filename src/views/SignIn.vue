<script setup lang="ts">
import { ref } from "vue";

import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const regExpUser = /^[a-z0-9_-]{3,16}$/;

const regExpPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

const router = useRouter();

const selectedItem = ref();

const error = ref(false);

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
    placeholder: "Username or Email Address",
    err: false,
    type: "text",
    name: "Username or Email Address",
    errTitle: "",
  },

  password: {
    value: "",
    placeholder: "Password",
    err: false,
    type: "text",
    name: "Password",
    errTitle: "",
  },
};

const prepare = (users: UserI) => {
  const err = validate(users);

  if (!err) {
    // проверяем на ошибки
    console.log("ошибка");
    error.value = true;
  } else {
    // отправляем что-то в вуекс
    console.log("отправляю");

    error.value = false;
    // router.push({ path: "/restresource.ru" });
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
      <h1 v-text="`Sign in with your username or email address`" />

      <label :for="i.name" v-for="(i, index) in users">
        <p v-text="i.name" />

        <input
          :type="i.type"
          :placeholder="i.placeholder"
          v-model.trim="i.value"
          :class="{ active: index == selectedItem, invalid: i.err }"
          @focusin="selectedItem = index"
          @focusout="selectedItem = null"
          :name="i.name"
        />
      </label>

      <ul v-if="error">
        <li v-for="i in users" v-text="i.errTitle" />
      </ul>

      <span>
        <TheButton
          title="Register"
          :f="true"
          type="submit"
          :disabled="error == !error"
        />
        <TheButton
          title="Go Back"
          :f="true"
          @click.prevent="router.push({ path: '/restresource.ru' })"
        />
      </span>
    </form>

    <!-- <p v-for="i in data">{{ i }}</p> -->
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
    box-shadow: 0 20px 30px 0 var(--scheme-v3);
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
    }

    label {
      p {
        font-size: 16px;
        color: var(--scheme-v2);
        margin: 0 0 10px;
        font-weight: 400;
      }
    }

    input {
      border: 2px solid var(--scheme-v3);
      font-size: 16px;
      padding: 10px;
      transition: 0.2s ease-in-out;
      width: 100%;

      &.invalid {
        border-color: #fa0202;
        box-shadow: 0 19px 28px -18px #fa02027b;
      }
    }

    span {
      display: grid;
      gap: 10px;
    }

    ul {
      background: #fa02024e;
      border-radius: 2px;
      padding: 20px;

      li {
        color: #910101;
      }
    }
  }
}
</style>
