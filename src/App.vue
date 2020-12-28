<template>
  <div id="app">
    <b-toast id="save-toast" solid auto-hide variant="success">
      <div id="success-meseage">Salvo com sucesso!</div>
    </b-toast>
    <b-toast id="add-toast" solid auto-hide variant="success">
      <div id="success-meseage">Adicionado com sucesso!</div>
    </b-toast>
    <b-toast id="remove-success-toast" solid auto-hide variant="success">
      <div id="success-meseage">Removido com sucesso!</div>
    </b-toast>
    <b-toast id="error-toast" solid auto-hide variant="danger">
      <div id="warning-meseage">Erro ao salvar!</div>
    </b-toast>
    <b-toast id="remove-toast" solid auto-hide variant="danger">
      <div id="warning-meseage">Falha ao remover!</div>
    </b-toast>
    <router-view />
  </div>
</template>

<script>
//import axios from "axios";
//import { baseApiUrl, userKey } from "../src/global";

export default {
	name: "App",
	data: function () {
		return {
			validatingToken: true,
		};
	},
	methods: {
		/*async validateToken() {
			this.validatingToken = true;

			const json = localStorage.getItem(userKey);
			const userData = JSON.parse(json);

			if (!userData) {
				this.validatingToken = false;
				return this.$router.push({ path: "/login" });
			}
			axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;

			const validToken = await axios.post(baseApiUrl + "/validtoken");

			if (!validToken.data.mensege == "valid") {
				this.validatingToken = false;
				delete axios.defaults.headers.common.Authorization;
				localStorage.removeItem(userKey);
				return this.$router.push({ path: "/login" });
			}

			this.validatingToken = false;
		},*/
	},
	created() {
		//this.validateToken();
	},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
