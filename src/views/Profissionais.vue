<template>
  <div id="wrapper" v-bind:class="toggle">
    <Sidebar />
    <div id="page-content-wrapper">
      <!-- /#page-topbar -->
      <Topbar @toggle="toggleMenu()" />
      <!-- /#page-topbar -->
      <ProfissinaisForm />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ProfissinaisForm from "../components/ListProfissionais";

export default {
	name: "Profissionais",
	components: {
		Sidebar,
		Topbar,
		ProfissinaisForm
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
