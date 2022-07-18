<template>
  <div class="create-account-page-wrapper">
    <section class="section">
      <div class="box">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="e.g AlexSmith123"
              v-model="chosenUserName"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
              v-model="givenEmail"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="chosenPassword" />
          </div>
        </div>
      </div>
      <div class="buttons-group">
        <div class="buttons">
          <button class="button is-link" @click="resetForm">Reset</button>
          <button class="button is-primary" @click="betaHandleSubmit">
            Create
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createdUser } from "../../firebase/composables/auth/create-account";

export default {
  name: "the-create-account-page",
  data() {
    return {
      chosenUserName: "",
      givenEmail: "",
      chosenPassword: "",
    };
  },
  methods: {
    resetForm() {
      this.chosenUserName = "";
      this.givenEmail = "";
      this.chosenPassword = "";
    },
    betaHandleSubmit() {
      const newUser = { email: this.givenEmail, password: this.chosenPassword };
      createdUser(newUser);
    },
  },
};
</script>
