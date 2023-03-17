<script setup lang="ts">
import { ref } from "vue";

import { useStore } from "vuex";

import { useRouter } from "vue-router";

const router = useRouter();

const store = useStore();

interface UserI {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  address?: string;
  city?: string;
  postcode?: string;
}

const user = ref<UserI>({
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  address: "",
  city: "",
  postcode: "",
});

const errors = ref<UserI>({
  email: "",
  firstname: "",
  lastname: "",
  password: "",
});

const confirm = ref();

const agree = ref(false);

const showPrivacy = ref(false);

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

  if (!user.value.firstname) {
    errors.value.firstname = "Firstname is required";
    // return;
  } else {
    errors.value.firstname = "";
  }

  if (!user.value.lastname) {
    errors.value.lastname = "Lastname is required";
    // return;
  } else {
    errors.value.lastname = "";
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
  } else if (confirm.value != user.value.password) {
    errors.value.password = "Passwords do not match";
  } else {
    errors.value.password = "";
  }

  if (
    errors.value.email.length == 0 &&
    errors.value.firstname.length == 0 &&
    errors.value.lastname.length == 0 &&
    errors.value.password.length == 0
  ) {
    return true;
  }

  return false;
};

const send = () => {
  if (prepare()) {
    store.dispatch("signup/postUserData", user.value);
    router.push({ path: "/restresource.ru" });
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

      <small>We'll send your order confirmation here</small>
    </label>

    <label>
      First Name*

      <input
        v-model.trim="user.firstname"
        type="text"
        placeholder="First Name"
      />
      <p>{{ errors?.firstname }}</p>
    </label>

    <label>
      Last Name*

      <input v-model.trim="user.lastname" type="text" placeholder="Last Name" />
      <p>{{ errors?.lastname }}</p>
    </label>

    <label>
      Password*

      <input
        v-model.trim="user.password"
        type="password"
        placeholder="Password"
      />
      <input
        v-if="user.password"
        v-model.trim="confirm"
        type="password"
        placeholder="Confirm password"
      />

      <p>{{ errors?.password }}</p>

      <small>(8 characters minimum. case sensitive)</small>
    </label>

    <label>
      Address

      <small>
        To get the most out of your Silver/Free membership please enter your
        address. We may send you exclusive offers based on your location from
        time to time.
      </small>

      <input
        v-model.trim="user.address"
        type="text"
        placeholder="Address line"
      />

      <input v-model.trim="user.city" type="text" placeholder="Town or city" />

      <input v-model.trim="user.postcode" type="text" placeholder="Postcode" />
    </label>

    <div>
      <input type="checkbox" @click="agree = !agree" />
      <small
        >I have read the links below and accept the Great British Chefs Privacy
        Policy and Terms and Conditions</small
      >

      <input type="checkbox" />
      <small
        >I want to receive regular newsletters about new recipes and features
        from Great British Chefs</small
      >

      <input type="checkbox" />
      <small>I want to receive the competitions newsletter</small>
    </div>

    <div>
      <button :disabled="!agree">Register</button>
      <button @click.prevent="router.push({ path: '/restresource.ru' })">
        Go back
      </button>
    </div>

    <span>
      Все права защищены
      <a href="https://www.restresource.ru/" target="_blank"
        >www.restresource.ru</a
      >

      <p>
        <router-link
          to="/restresource.ru/policyagreement"
          v-text="`Соглашение о конфиденциальности`"
        />
        и
        <router-link
          to="/restresource.ru/privacypolicy"
          v-text="`Пользовательское соглашение`"
        />
      </p>
    </span>
  </form>
</template>

<style lang="scss" scoped>
form {
  border: 1px solid var(--scheme-v3);
  display: grid;
  gap: 30px;
  max-width: 600px;
  margin: 80px auto;
  padding: 20px;

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

  span {
    font-weight: 400;
    a {
      color: var(--scheme-v5);
    }
  }
}
</style>
