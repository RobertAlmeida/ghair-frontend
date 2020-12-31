<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#" v-on:click.prevent.stop="$emit('toggle')">
      <i class="icofont-navigation-menu"></i>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="d-none d-lg-block">
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <i class="icofont-ui-user"></i>
          </template>
          <b-dropdown-item href="#" v-on:click="logout"
            ><i class="icofont-logout" id="logout" ></i> Logout</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

import axios from "axios";

export default {
	name: "Topbar",
	data: () => {
		return {
      
		}
	},
	methods: {
		async logout () {
			await delete axios.defaults.headers.common.Authorization;
			await localStorage.removeItem("token");
			await localStorage.removeItem("admin");
			await localStorage.removeItem("iduser");
			return this.$router.push({ path: "/login" });
		}
	}
};
</script>

<style>
.navbar {
  background-color: #fafafa;
  border-bottom: 1px solid #dee4ec;
  box-shadow: 5px 7px 26px -5px #cdd4e7;
}
.navbar .nav-link {
  color: #5b6e88 !important;
}
.navbar a i {
  color: #5b6e88;
  font-size: 20px;
}

@media (max-width: 768px) {
  .navbar-dark .navbar-toggler {
    border-color: transparent;
  }
}
#logout {
  color: red;
}
</style>
