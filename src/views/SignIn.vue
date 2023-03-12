<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

import { useStore } from "vuex";

import { useRouter } from "vue-router";

const router = useRouter();

const store = useStore();

onMounted(() => {
  // store.dispatch("signup/deleteData");
});

interface UserI {
  email: string;
  password: string;
}

const user = ref<UserI>({
  email: "",
  password: "",
});

const errors = ref<UserI>({
  email: "",
  password: "",
});

const agree = ref(false);

const prepare = () => {
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.value.email) ||
    !user.value.email
  ) {
    errors.value.email = "Invalid Email Address";
    // return;
  } else {
    errors.value.email = "";
  }

  if (!user.value.password) {
    errors.value.password = "Password is required";
    // return;
  } else if (
    !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g.test(
      user.value.password
    )
  ) {
    errors.value.password =
      "6 to 15 characters which contain at least one special character";
  } else {
    errors.value.password = "";
  }

  if (errors.value.email.length == 0 && errors.value.password.length == 0) {
    return true;
  }

  return false;
};

const send = () => {
  if (prepare()) {
    console.log("No errors. Wait to submit");
    store.dispatch("signin/getUserData", user.value);
  }
};
</script>

<template>
  <form @submit.prevent="send">
    <label>
      Email Address*

      <input
        v-model.trim="user.email"
        type="text"
        placeholder="Enter your Email"
      />
      <p>{{ errors?.email }}</p>
    </label>

    <label>
      Password*

      <input
        v-model.trim="user.password"
        type="password"
        placeholder="Password"
      />

      <p>{{ errors?.password }}</p>
    </label>

    <div>
      <input type="checkbox" @click="agree = !agree" />
      <small
        >I have read the links below and accept the Great British Chefs Privacy
        Policy and Terms and Conditions</small
      >
    </div>

    <div>
      <button :disabled="!agree">Login</button>
      <button @click="router.push({ path: '/restresource.ru' })">
        Go back
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  border: 1px solid var(--scheme-v3);
  display: grid;
  gap: 20px;
  max-width: 600px;
  margin: 200px auto;
  padding: 20px;
  width: 100%;

  label {
    display: inherit;
    gap: 10px;

    input {
      border: 1px solid var(--scheme-v3);
      padding: 10px;

      &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
    }

    p {
      color: red;
      font-size: 12px;
    }
  }

  div {
    align-items: baseline;
    display: inherit;
    grid-template: auto / repeat(2, auto);
    gap: 20px;

    button {
      background: var(--scheme-v2);
      color: var(--scheme-v1);
      padding: 15px;

      &:disabled {
        background: var(--scheme-v3);
        cursor: default;
      }
    }
  }
}
</style>
