<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NavLogo />
      <NavbarHamburger />
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'chore-page' }" class="navbar-link">
            Chores
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link :to="{ name: 'profile-page' }">Profile</router-link>
        </div>
        <hr />
        <div class="navbar-item">Log Out</div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLogo from "../navbar/NavLogo";
import NavbarHamburger from "../navbar/NavHamburger";
export default {
  name: "TheNavbar",
  components: {
    NavLogo,
    NavbarHamburger,
  },
};
</script>
