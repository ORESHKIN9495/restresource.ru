<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const regExpUser = /^[a-z0-9_-]{3,16}$/;

const regExpFirstname = /^[a-z0-9_-]{3,16}$/;

const regExpLastname = /^[a-z0-9_-]{3,16}$/;

const regExpPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

const regExpEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

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

  email: {
    value: string;
    placeholder: string;
    err: boolean;
    type: string;
    name: string;
    errTitle: string;
  };

  firstname: {
    value: string;
    placeholder: string;
    err: boolean;
    type: string;
    name: string;
    errTitle: string;
  };

  lastname: {
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

  confirm: {
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

  email: {
    value: "",
    placeholder: "Email",
    err: false,
    type: "text",
    name: "email",
    errTitle: "",
  },

  firstname: {
    value: "",
    placeholder: "First Name",
    err: false,
    type: "text",
    name: "firstName",
    errTitle: "",
  },

  lastname: {
    value: "",
    placeholder: "Last Name",
    err: false,
    type: "text",
    name: "lastName",
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

  confirm: {
    value: "",
    placeholder: "Confirm Password",
    err: false,
    type: "text",
    name: "confirm",
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

  if (users.email.value == "") {
    users.email.err = true;
    users.email.errTitle = "Поле должно быть заполнено";

    return false;
  } else if (users.email.value.length < 3) {
    users.email.err = true;
    users.email.errTitle = "Email должен быть больше 3 символов";

    return false;
  } else if (!regExpEmail.test(users.email.value)) {
    users.email.err = true;
    users.email.errTitle = "Введите корректный Email";

    return false;
  } else {
    users.email.err = false;
    users.email.errTitle = "";
  }

  if (users.firstname.value == "") {
    users.firstname.err = true;
    users.firstname.errTitle = "Поле должно быть заполнено";

    return false;
  } else if (users.firstname.value.length < 3) {
    users.firstname.err = true;
    users.firstname.errTitle = "Имя должно быть больше 3 символов";

    return false;
  } else if (!regExpFirstname.test(users.firstname.value)) {
    users.firstname.err = true;
    users.firstname.errTitle = "Введите корректное имя";

    return false;
  } else {
    users.firstname.err = false;
    users.firstname.errTitle = "";
  }

  if (users.lastname.value == "") {
    users.lastname.err = true;
    users.lastname.errTitle = "Поле должно быть заполнено";

    return false;
  } else if (users.lastname.value.length < 3) {
    users.lastname.err = true;
    users.lastname.errTitle = "Фамилия должена быть больше 3 символов";

    return false;
  } else if (!regExpLastname.test(users.lastname.value)) {
    users.lastname.err = true;
    users.lastname.errTitle = "Введите корректное имя";

    return false;
  } else {
    users.lastname.err = false;
    users.lastname.errTitle = "";
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

  if (users.confirm.value == "") {
    users.confirm.err = true;
    users.confirm.errTitle = "Поле должно быть заполнено";

    return false;
  } else if (users.confirm.value.length < 3) {
    users.confirm.err = true;
    users.confirm.errTitle = "Пароль должен быть больше 3 символов";

    return false;
  } else if (users.password.value !== users.confirm.value) {
    users.confirm.err = true;
    users.confirm.errTitle = "Пароли не совпадают";

    return false;
  } else {
    users.confirm.err = false;
    users.confirm.errTitle = "";
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
