<template>
  <div id="wrapper" v-bind:class="toggle">
    <Sidebar />
    <div id="page-content-wrapper">
      <!-- /#page-topbar -->
      <Topbar @toggle="toggleMenu()" />
      <!-- /#page-topbar -->
      <Agendas />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Agendas from "../components/ListAgenda";

export default {
	name: "Home",
	components: {
		Sidebar,
		Topbar,
		Agendas,
	},
	data() {
		return {
			toggle: "",
			toggleBool: false,
		};
	},
	methods: {
		toggleMenu() {
			this.toggleBool = !this.toggleBool;
			if (this.toggleBool == true) {
				this.toggle = "toggled";
			} else {
				this.toggle = "";
			}
		},
	},
};
</script>
