<template>
  <div class="container pt-4">
    <div class="col-md text-left">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Nome</label>
          <input
            class="form-control"
            id="inputEmail4"
            placeholder="Nome"
            v-model="dadosconfig.nome"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputcnpjcpf4">CNPJ/CPF</label>
          <input
            type="number"
            class="form-control"
            id="inputcnpjcpf4"
            placeholder="CNPJ/CPF"
            v-model="dadosconfig.cnpjcpf"
          />
        </div>
      </div>
    </div>
    <div class="col-md text-left">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEndereco">Endereço</label>
          <input
            class="form-control"
            id="inputEndereco"
            placeholder="Endereço"
            v-model="dadosconfig.endereco"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputTelefone">Telefone</label>
          <input
            type="number"
            class="form-control"
            id="inputTelefone"
            placeholder="Telefone"
            v-model="dadosconfig.fone"
          />
        </div>
      </div>
    </div>
    <div class="col-md text-left">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputOnline">Recebe pedido online ?</label>
          <select
            class="form-control"
            id="inputOnline"
            v-model="dadosconfig.online"
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
      </div>
    </div>
    <div class="text-rigth">
      <button
        class="btn btn-success mb-2"
        v-if="acao == 'Save'"
        @click="saveData()"
      >
        Salvar dados
      </button>
      <button
        class="btn btn-warning mb-2"
        v-if="acao == 'Edit'"
        @click="editData()"
      >
        Editar dados
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";
export default {
	name: "Configuracao",
	data() {
		return {
			acao: "Save",
			dadosconfig: {
				nome: "",
				cnpjcpf: "",
				endereco: "",
				fone: "",
				online: "",
				iduser: localStorage.getItem("iduser"),
				id: "",
			},
		};
	},
	methods: {
		async saveData() {
			await axios.post(baseApiUrl + "/dados", this.dadosconfig).then(() => {
				this.$bvToast.show("save-toast");
			});
		},
		async getDataConfig() {
			await axios.get(baseApiUrl + "/dados").then((resposta) => {
				if (resposta.data.data.length > 0) {
					this.acao = "Edit";
					let dataConfig = { ...resposta.data.data[0] };
					dataConfig.iduser = localStorage.getItem("iduser");
					this.dadosconfig = { ...dataConfig };
				}
			});
		},
		async editData() {
			axios
				.put(baseApiUrl + "/dados/" + this.dadosconfig.id, this.dadosconfig)
				.then(() => {
					this.$bvToast.show("save-toast");
					this.getDataConfig();
				});
		},
	},
	mounted() {
		this.getDataConfig();
	},
};
</script>
<style></style>
