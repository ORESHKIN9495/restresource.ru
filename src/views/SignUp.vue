<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheButton from "../components/TheButton.vue";

const router = useRouter();

const selectedItem = ref();

const disabled = ref(false);

const errTitle = ref("");

const regExpUser = /^[a-z0-9_-]{3,16}$/;

const regExpPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

const regExpConf =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

const regExpEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const userData = {
  username: {
    value: "",
    placeholder: "Username",
    err: false,
    type: "text",
  },

  email: {
    value: "",
    placeholder: "Email",
    err: false,
    type: "text",
  },

  firstName: {
    value: "",
    placeholder: "First Name",
    err: false,
    type: "text",
  },

  lastName: {
    value: "",
    placeholder: "Last Name",
    err: false,
    type: "text",
  },

  password: {
    value: "",
    placeholder: "Password",
    err: false,
    type: "text",
  },

  confirm: {
    value: "",
    placeholder: "Confirm Password",
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
    errTitle.value = "Введиде корректное имя пользователя";
  } else {
    userData.username.err = false;
    errTitle.value = "";
    userData.username.placeholder = "Username";
    disabled.value = false;
  }

  if (userData.email.value == "") {
    userData.email.err = true;
    userData.email.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpEmail.test(userData.email.value)) {
    disabled.value = true;
    userData.email.err = true;
    errTitle.value = "Введиде корректный email";
  } else {
    userData.email.err = false;
    errTitle.value = "";
    userData.email.placeholder = "Username";
    disabled.value = false;
  }

  if (userData.firstName.value == "") {
    userData.firstName.err = true;
    userData.firstName.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpUser.test(userData.firstName.value)) {
    disabled.value = true;
    userData.firstName.err = true;
    errTitle.value = "Введиде корректное имя";
  } else {
    userData.firstName.err = false;
    errTitle.value = "";
    userData.firstName.placeholder = "First Name";
    disabled.value = false;
  }

  if (userData.lastName.value == "") {
    userData.lastName.err = true;
    userData.lastName.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpUser.test(userData.lastName.value)) {
    disabled.value = true;
    userData.lastName.err = true;
    errTitle.value = "Введиде корректную фамилию";
  } else {
    userData.lastName.err = false;
    errTitle.value = "";
    userData.lastName.placeholder = "Last Name";
    disabled.value = false;
  }

  if (userData.password.value == "") {
    userData.password.err = true;
    userData.password.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpPass.test(userData.password.value)) {
    userData.password.err = true;
    errTitle.value = "Введиде корректный пароль";
    disabled.value = true;
  } else {
    userData.password.err = false;
    errTitle.value = "";
    userData.password.placeholder = "Password";
    disabled.value = false;
  }

  if (userData.confirm.value == "") {
    userData.confirm.err = true;
    userData.confirm.placeholder = "Поле должно быть заполнено";
    disabled.value = true;
  } else if (!regExpConf.test(userData.confirm.value)) {
    disabled.value = true;
    userData.confirm.err = true;
    errTitle.value = "Введиде корректный пароль";
  } else if (userData.password.value !== userData.confirm.value) {
    disabled.value = true;
    userData.confirm.err = true;
    errTitle.value = "Пароли не совпадают";
  } else {
    userData.confirm.err = false;
    errTitle.value = "";
    userData.confirm.placeholder = "Confirm Password";
    disabled.value = false;

    setData();
  }
};

const setData = () => {
  localStorage.setItem("username", userData.username.value);
  localStorage.setItem("password", userData.password.value);
  router.push({ path: "/" });
};

const postData = () => {
  validate();
};
</script>

<template>
  <section>
    <form action="#" method="POST" @submit.prevent="postData">
      <h1>Sign Up</h1>

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
          title="Register"
          :g="true"
          type="submit"
          :disabled="disabled == !disabled"
        />
        <TheButton
          title="Go Back"
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
    position: relative;

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
      transition: 0.3s ease-in-out;
      width: 120px;

      &.active {
        border-color: #ccc;
        box-shadow: 0 19px 28px -18px #ccc;
        width: 100%;
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
