<template>
  <!-- Sidebar -->
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-avatar">
        <a class="avatar" href="/"> </a>
        <h3 class="avatar-name">{{ nomeEmpresa }}</h3>
      </li>

      <li>
        <a href="/agendamento"
          ><i class="icofont-calendar"></i> Agenda
          <span class="caret float-right"></span
        ></a>
      </li>
      <div v-if="admin == 'true'">
        <li>
          <a href="/profissionais"
            ><i class="icofont-users-alt-3"></i> Profissionais
            <span class="caret float-right"></span
          ></a>
        </li>

        <li>
          <a href="/servicos"
            ><i class="icofont-search-stock"></i> Serviços
            <span class="caret float-right"></span
          ></a>
        </li>

        <li>
          <a href="/"
            ><i class="icofont-ui-timer"></i> Horários
            <span class="caret float-right"></span
          ></a>
        </li>
      </div>
      <li @click="logout()" > 
        <a href="#"><i class="icofont-logout" id="logout" ></i> Sair </a>
      </li>
      <li>
        <button class="btn btn-success w-75" id="btn-pedido">
          Criar agendamento
        </button>
      </li>
    </ul>
  </div>
  <!-- /#sidebar-wrapper -->
</template>

<script>

import axios from "axios";


export default {
	name: "Sidebar",
	data: () => {
		return {
			nomeEmpresa: "TESTE",
			admin: "",
		};
	},
	methods: {
		async isAdmin() {
			const admin = await localStorage.getItem("admin");
			this.admin = admin;
		},
		async logout () {
			await delete axios.defaults.headers.common.Authorization;
			await localStorage.removeItem("token");
			await localStorage.removeItem("admin");
			await localStorage.removeItem("iduser");
			return this.$router.push({ path: "/login" });
		}
	},

	mounted() {
		this.isAdmin();
	},
};
</script>

<style>
body {
  overflow-x: hidden;
  background-color: #fafafa;
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

/* Lista lado Esquerdo */
#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #414141;
  color: white;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 30px;
}

.sidebar-nav li ul li {
  text-indent: 20px;
  line-height: 15px;
  list-style: none;
}

.sidebar-avatar {
  padding-bottom: 10px;
  border-bottom: 1px solid #f9f9f9;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px 0;
  font-size: 19px;
  text-align: left;
}

.sidebar-nav li ul li a {
  font-size: 15px;
}

.sidebar-nav li a:hover {
  background-color: #f5f5f5;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #000;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

/* Logo Pefil*/
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 15px auto;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f5f5f5;
  border: 1px solid #dfe4f1;
  background-image: url("../assets/eu.png");
}

.avatar-name {
  text-align: center;
  font-size: 18px;
  margin-left: -25px;
}

.caret {
  margin-right: 10px;
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 250px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 250px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }

  #page-content-wrapper {
    position: relative;
  }

  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }

  #btn-pedido {
    margin-left: -5%;
    margin-top: 13%;
  }

  #logout {
    color: red;
  }
}
</style>
