<template>
  <div class="the-profile-page">
    <form class="form box profile-form">
      <ProfilePicSelector />
      <div class="container field-section">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-rounded"
              type="text"
              placeholder="Enter UserName"
              v-model="member.userName"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <!-- <span class="icon is-small is-right"> // to be added dynamically
          <i class="fas fa-check"></i>
        </span> -->
          </div>
          <!-- <p class="help is-success">This username is available</p> dynamic add -->
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input
              class="input is-rounded"
              type="password"
              placeholder="Input Password"
              v-model="member.password"
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-key"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input
              class="input is-rounded"
              type="text"
              placeholder="Input Name"
              v-model="member.firstName"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input
              class="input is-rounded"
              type="text"
              placeholder="Input Last Name"
              v-model="member.lastName"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-rounded"
              type="email"
              placeholder="Email input"
              v-model="member.email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <!-- <span class="icon is-small is-right"> dynamic class
          <i class="fas fa-exclamation-triangle"></i>
        </span> -->
          </div>
          <!-- <p class="help is-danger">This email is invalid</p> dynamic add -->
        </div>

        <div class="field single-role-select">
          <label class="label">Role</label>
          <div class="control">
            <div class="select is-rounded">
              <select v-model="member.role">
                <option>Child</option>
                <option>Parent</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-grouped is-justify-content-center selection-buttons">
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
        <div class="control">
          <button class="button is-link" @click.prevent="test">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ProfilePicSelector from "./ProfilePicSelector";
import { docRef } from "@/firebase/composables/profile-setters";

export default {
  name: "TheProfilePage",
  data() {
    return {
      member: {
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      },
    };
  },
  components: {
    ProfilePicSelector,
  },
  methods: {
    test() {
      docRef(this.member).then((refId) => {
        console.log(refId);
      });
    },
  },
};
</script>
