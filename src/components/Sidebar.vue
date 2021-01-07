<template>
  <!-- Sidebar -->
  <div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-avatar">
        <a class="avatar" href="/"> </a>
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
          <a href="/configuracao"
            ><i class="icofont-gear-alt"></i> Configurações
            <span class="caret float-right"></span
          ></a>
        </li>
      </div>
      <li @click="logout()">
        <a href="#"><i class="icofont-logout" id="logout"></i> Sair </a>
      </li>
      <li>
        <button class="btn btn-success w-75" v-b-modal.modal-1>
          Criar agendamento
        </button>
      </li>
    </ul>
    <b-modal id="modal-1" title="Agendamento" hide-footer>
      <form>
        <div class="form-group">
          <label for="listaServico">Selecione o serviço</label>
          <select class="form-control" id="listaServico">
            <option>-</option>
            <option v-for="servico of servicos" :key="servico.id">{{servico.nome}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Selecione a data</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>-</option>
            <option>07/01 - Quinta-Feira</option>
            <option>08/01 - Sexta-Feira</option>
            <option>09/01 - Sábado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Selecione a hora</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>-</option>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Profissional</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>-</option>
            <option>Fulano</option>
            <option>Cicranio</option>
            <option>Beltranio</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Observação</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
         <button class="btn btn-success w-100">Agendar</button>
      </form>
    </b-modal>
  </div>
  <!-- /#sidebar-wrapper -->
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
	name: "Sidebar",
	data: () => {
		return {      
			admin: "",
			servicos: []
		};
	},
	methods: {
		async isAdmin() {
			const admin = await localStorage.getItem("admin");
			this.admin = admin;
		},
		async logout() {
			await delete axios.defaults.headers.common.Authorization;
			await localStorage.removeItem("token");
			await localStorage.removeItem("admin");
			await localStorage.removeItem("iduser");
			return this.$router.push({ path: "/login" });
		},
		async listServicos() {
			await axios.get(baseApiUrl + "/servico").then((resposta) => {
				this.servicos = resposta.data.data;
				console.log(this.servicos)
			});
		},
	},

	mounted() {
		this.isAdmin();
		this.listServicos();
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
